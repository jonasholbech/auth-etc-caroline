import { createClient } from "@supabase/supabase-js";
const supabaseClient = createClient(
  "https://uwrwptibotlxlvcdeicv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3cndwdGlib3RseGx2Y2RlaWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ3OTI4MDYsImV4cCI6MTk4MDM2ODgwNn0.FuHj1T6qJO-wQ_aWaaXNFVfZPG45FsnE3RvHd3PGQmA"
);

export { supabaseClient };
