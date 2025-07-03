import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fgcggmswecgwolglbfle.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnY2dnbXN3ZWNnd29sZ2xiZmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyNzQ3NjcsImV4cCI6MjAzNDg1MDc2N30.6HnKiUhJPFd8QHJcHsHHZgGnQf1MdX6p6q2YWZGKjvY'

export const supabase = createClient(supabaseUrl, supabaseKey)