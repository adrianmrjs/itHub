import { auth } from './firebase.js';
import { 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut 
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Filtro de dominio permitido
const allowedDomain = "@flybondi.com";

// Elementos del DOM
const loginForm = document.getElementById('login-form');
const errorMsg = document.getElementById('error-msg');
const googleButton = document.getElementById('google-login');

// -------------------------
// 🔹 Login con email/contraseña
// -------------------------
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validar dominio
  if (!email.endsWith(allowedDomain)) {
    errorMsg.textContent = "Acceso permitido solo a correos corporativos (@flybondi.com)";
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = 'dashboard.html';
  } catch (error) {
    errorMsg.textContent = error.message;
  }
});

// -------------------------
// 🔹 Login con Google
// -------------------------
googleButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const email = result.user.email;

    // Validar dominio
    if (!email.endsWith(allowedDomain)) {
      errorMsg.textContent = "Acceso permitido solo a correos corporativos (@flybondi.com)";
      await signOut(auth); // Cierra sesión si no pertenece al dominio
      return;
    }

    window.location.href = 'dashboard.html';
  } catch (error) {
    errorMsg.textContent = error.message;
  }
});
