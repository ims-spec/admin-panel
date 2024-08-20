import { supabaseDataProvider } from "ra-supabase";
import { supabaseClient } from "./supabase";



export const dataProvider = supabaseDataProvider({
    instanceUrl: import.meta.env.VITE_SUPA_URL,
    apiKey: import.meta.env.VITE_SUPA_API_KEY,
    supabaseClient
})

