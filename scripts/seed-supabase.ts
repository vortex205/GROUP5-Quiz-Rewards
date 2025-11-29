import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your environment')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

async function run() {
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

  for (const u of users) {
    const email = `${u.username}@group5.test`
    try {
      console.log('Creating', u.username)
      const { data, error } = await supabase.auth.admin.createUser({ email, password: u.password, user_metadata: { username: u.username, role: u.role } })
      if (error) console.error('Error creating', u.username, error.message)
      else {
        console.log('Created', u.username, data.user.id)
        await supabase.from('profiles').upsert({ id: data.user.id, username: u.username, role: u.role, points: u.role === 'ADMIN' ? 12000 : 0 })
      }
    } catch (e) { console.error(e) }
  }
  console.log('Done')
}

run()