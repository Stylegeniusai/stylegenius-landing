import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || ''
const supabaseServiceKey = (process.env.SUPABASE_SERVICE_KEY || '').replace(/\s/g, '')

// Admin client with service key for server-side operations
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)