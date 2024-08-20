import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(
    import.meta.env.VITE_SUPA_URL,
    import.meta.env.VITE_SUPA_API_KEY
)

