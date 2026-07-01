import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const missingVariables = [
  !supabaseUrl && "SUPABASE_URL",
  !supabaseServiceRoleKey && "SUPABASE_SERVICE_ROLE_KEY",
].filter(Boolean);

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error(
    `[Supabase] Missing required environment variables: ${missingVariables.join(", ")}. ` +
      "Copy .env.example to .env and fill in the Supabase values.",
  );
}

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});
