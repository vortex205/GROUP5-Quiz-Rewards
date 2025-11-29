import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  const SUPABASE_URL = process.env.SUPABASE_URL
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(400).json({ error: 'Missing SUPABASE environment variables' })
  }
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

  const users = [
    { username: 'elvis', password: 'ElvisAdmin2025!', role: 'ADMIN' },
    { username: 'tariqamir', password: 'Tariq2025!', role: 'STUDENT' },
    { username: 'mohammedahmed', password: 'Moha2025!', role: 'STUDENT' },
    { username: 'idrissa', password: 'Idrissa2025!', role: 'STUDENT' },
    { username: 'fatmaahmed', password: 'Fatma2025!', role: 'STUDENT' },
    { username: 'gloriamunisi', password: 'Gloria2025!', role: 'STUDENT' },
    { username: 'humaiyya', password: 'Humai2025!', role: 'STUDENT' },
    { username: 'runnysaid', password: 'Runny2025!', role: 'STUDENT' },
    { username: 'mariamswedy', password: 'Mariam2025!', role: 'STUDENT' },
    { username: 'khadijajafari', password: 'Khadija2025!', role: 'STUDENT' }
  ]

  const created = []
  for (const u of users) {
    try {
      const email = `${u.username}@group5.test`
      const { data, error } = await supabase.auth.admin.createUser({
        email,
        password: u.password,
        user_metadata: { username: u.username, role: u.role }
      })
      if (error) {
        console.error('createUser error', error.message)
        created.push({ username: u.username, error: error.message })
      } else {
        created.push({ username: u.username, id: data.user.id })
        await supabase.from('profiles').upsert({ id: data.user.id, username: u.username, role: u.role, points: u.role === 'ADMIN' ? 12000 : 0 })
      }
    } catch (e) {
      created.push({ username: u.username, error: String(e) })
    }
  }
  res.status(200).json({ created })
}