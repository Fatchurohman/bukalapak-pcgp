/**
 * Konfigurasi Pusat Supabase - Pasar Candi Gebang Permai
 * Developer: fatur62
 */

const SUPABASE_URL = "https://your-project-id.supabase.co";
const SUPABASE_ANON_KEY = "your-supabase-anon-public-key-here";

// Inisialisasi Klien Supabase dengan penanganan validasi null/undefined yang aman
let supabase = null;

try {
    if (window.supabase && typeof window.supabase.createClient === 'function') {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } else {
        console.error("Pustaka Supabase belum dimuat di DOM.");
    }
} catch (error) {
    console.error("Terjadi kesalahan saat menginisialisasi Supabase:", error);
}
