import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyATFtvcLbz7Ifyi_jeAnXcSu7wWBZd9txo",
  authDomain: "login-page-b62fb.firebaseapp.com",
  projectId: "login-page-b62fb",
  storageBucket: "login-page-b62fb.appspot.com",
  messagingSenderId: "508224096315",
  appId: "1:508224096315:web:ec6f0c87a539425769741e",
  measurementId: "G-BG0DMT0VW3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("succussfully registerd")
      window.location.href="registration.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
