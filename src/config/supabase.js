import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jfvzcyvevvurxgbrrgui.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmdnpjeXZldnZ1cnhnYnJyZ3VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2NjQ4MTUsImV4cCI6MjA3MDI0MDgxNX0.Kz8ciACbw2aCEucm2t-1Ajqgv0o-UIJgATFQay4gBDo";

export const supabase = createClient(supabaseUrl, supabaseKey);
