/**
 * Konfigurasi Pusat Firebase - Pasar Candi Gebang Permai
 * Developer: fatur62
 */

const firebaseConfig = {
    apiKey: "AIzaSyD6-iEAKeoUtUfUxmsXD1sMH...",
    authDomain: "candi-gebang-lapak.firebaseapp.com",
    projectId: "candi-gebang-lapak",
    storageBucket: "candi-gebang-lapak.appspot.com",
    messagingSenderId: "81271558870",
    appId: "1:81271558870:web:6bd654b68b00b7fbb76f77",
    measurementId: "G-GV8R59H03N"
};

// Inisialisasi Firebase secara aman (Compat Mode)
let db = null;
try {
    if (window.firebase && firebaseConfig.projectId) {
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
    } else {
        console.error("Pustaka Firebase belum dimuat atau konfigurasi kosong.");
    }
} catch (error) {
    console.error("Gagal menginisialisasi Firebase:", error);
}
