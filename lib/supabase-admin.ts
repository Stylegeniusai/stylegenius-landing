import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://imkvzudhshjgqkoywosw.supabase.co'
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlta3Z6dWRoc2hqZ3Frb3l3b3N3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDQwNzg2MywiZXhwIjoyMDU5OTgzODYzfQ.RhWi-af0BVdUaw6ETrQ--GUSDlcbIBR8d9m_NPs2hHY'

// Admin client with service key for server-side operations
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)