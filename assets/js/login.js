import { auth } from './firebase.js';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Formulario de correo/contraseña
const loginForm = document.getElementById('login-form');
const errorMsg = document.getElementById('error-msg');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = 'dashboard.html';
  } catch (error) {
    errorMsg.textContent = error.message;
  }
});

// Botón Google
const googleButton = document.getElementById('google-login');
googleButton.addEventListener('click', async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    // Usuario logueado con Google
    console.log("Usuario Google:", result.user);
    window.location.href = 'dashboard.html';
  } catch (error) {
    errorMsg.textContent = error.message;
  }
});