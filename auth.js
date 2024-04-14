 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyD8nq9EbuiOVYi0bDz65_BZR-NwOWL5yyU",
   authDomain: "fir-auth-904f3.firebaseapp.com",
   projectId: "fir-auth-904f3",
   storageBucket: "fir-auth-904f3.appspot.com",
   messagingSenderId: "362273315498",
   appId: "1:362273315498:web:245884c15aa931fec70ed3"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(); // Get the Auth instance

 // Function to handle sign up
 window.signUp = () => {
  console.log("signUp");
   const email = document.getElementById("email").value;
   const password = document.getElementById("pswd").value;

   // Sign up with email and password
   createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed up
       const user = userCredential.user;
       console.log("Signed up user:", user);
       alert("Signed up successfully");
       // You can redirect or do any further action upon successful sign up
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.error("Sign up error:", errorMessage);
       // Handle sign up errors (display message, etc.)
     });
 };

 // Function to handle sign in
// window.signIn = async () => {
//   console.log("signIn");
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("pswd").value;

//   try {
//     // Sign in with email and password
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     // Signed in
//     const user = userCredential.user;
//     console.log("Signed in user:", user);
//     alert("Signed in successfully");
//     // Redirect to home page after sign in
//     window.location.href = "home.html";
//     // You can redirect or do any further action upon successful sign in
//   } catch (error) {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.error("Sign in error:", errorMessage);
//     // Handle sign in errors (display message, etc.)
//   }
// };


window.signIn= async ()=>{
  const signInEmail=email.value;
  const signInPassword=password.value;
  signInWithEmailAndPassword(auth, signInEmail, signInPassword)
  .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      alert('user signed in successfully');
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
      alert(errorMessage);
  });
}