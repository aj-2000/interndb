import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ciworjzfkqsdjusptimg.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpd29yanpma3FzZGp1c3B0aW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQwODU5MDQsImV4cCI6MTk3OTY2MTkwNH0.P3KTdQyFRWPQpo4mgkoPWSYaKY5MsN1-RYEn4SOXZZw',
);

export default supabase;