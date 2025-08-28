import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js"; // si vas a usar auth
// Importa otros módulos de Firebase que necesites (firestore, storage, etc.)

const firebaseConfig = {
  apiKey: "AIzaSyD41l82bOMz_qrUFa0r1w_WWD10emGCKDo",
  authDomain: "ithub-993d0.firebaseapp.com",
  projectId: "ithub-993d0",
  storageBucket: "ithub-993d0.firebasestorage.app",
  messagingSenderId: "621889407442",
  appId: "1:621889407442:web:54411b922df2b2b3b0200b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }; // exporta lo que necesites usar en otras páginas