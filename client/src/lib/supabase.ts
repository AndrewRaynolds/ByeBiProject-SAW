import { createClient } from '@supabase/supabase-js';

// Vite espone al frontend le variabili pubbliche tramite import.meta.env.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Segnala una configurazione incompleta senza modificare l'inizializzazione.
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Attenzione: Variabili d'ambiente VITE_SUPABASE mancanti!");
}

// Client Supabase condiviso dal frontend.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
