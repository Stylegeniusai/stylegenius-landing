import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://imkvzudhshjgqkoywosw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlta3Z6dWRoc2hqZ3Frb3l3b3N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0MDc4NjMsImV4cCI6MjA1OTk4Mzg2M30.6reENx-5l7cRKCsYzh1fqkBIer8FT0SJPPyfevQixMs'

export const supabase = createClient(supabaseUrl, supabaseKey)