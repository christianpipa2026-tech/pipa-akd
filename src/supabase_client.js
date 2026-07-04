// Supabase client — Pipa Akd
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xvxmiorluyzoropjnvbm.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_YHkiS2RYbZkhozxvjZnuyA_0fJQKNzk";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
