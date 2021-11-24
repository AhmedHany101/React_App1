// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut}from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA48GL8MjTOiiA1LqTk0QUvTRZcuMHoDQU",
  authDomain: "logpro-e1a33.firebaseapp.com",
  projectId: "logpro-e1a33",
  storageBucket: "logpro-e1a33.appspot.com",
  messagingSenderId: "848652474156",
  appId: "1:848652474156:web:05739c286979a4ca0e7e89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password){
   return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password){
  return signInWithEmailAndPassword(auth, email, password);
}
//Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser ] = useState();
  useEffect(() => { 
   const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
   return unsub;
  },[])
  return currentUser;
}

export function logout()
{
  return signOut(auth)
}