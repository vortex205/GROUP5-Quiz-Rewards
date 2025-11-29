import { createClient } from '@supabase/supabase-js'
import fetch from 'node-fetch'

export default async function handler(req, res) {
  const OPENAI_KEY = process.env.OPENAI_API_KEY
  const SUPABASE_URL = process.env.SUPABASE_URL
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!OPENAI_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(400).json({ error: 'Missing environment variables' })
  }

  const { subject = 'BUSINESS ACCOUNTING', topic = 'basic accounting', count = 5 } = req.body || {}

  const prompt = `Generate ${count} multiple choice questions (with 4 options and indicate the correct option letter) about ${topic} in the subject ${subject}. Output as JSON array with fields: question, options (array), answer (index), explanation.`

  try {
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENAI_KEY}` },
      body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], max_tokens: 1000 })
    })
    const json = await resp.json()
    const content = json?.choices?.[0]?.message?.content || ''
    let parsed = []
    try { parsed = JSON.parse(content) } catch (e) { parsed = [{ question: 'Sample question', options: ['A','B','C','D'], answer: 0, explanation: 'Sample explanation' }] }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
    for (const q of parsed) {
      await supabase.from('questions').insert([{ subject, topic, question: q.question, options: q.options, answer: q.answer, explanation: q.explanation }])
    }

    res.status(200).json({ ok: true, created: parsed.length })
  } catch (e) {
    res.status(500).json({ error: String(e) })
  }
}