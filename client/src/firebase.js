import { useEffect, useState } from "react";
import auth from './utils/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxLkuUffzIsjuQNAUy3yFMKSEHnWIETzk",
  authDomain: "propairs.firebaseapp.com",
  projectId: "propairs",
  storageBucket: "propairs.appspot.com",
  messagingSenderId: "490559612342",
  appId: "1:490559612342:web:7bcc49c1047784b3b18d17",
  measurementId: "G-3EXL5EXWT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth();
const storage = getStorage();

// export function signup(email, password) {
//   return createUserWithEmailAndPassword(auth, email, password);
// }

// export function login(email, password) {
//   return signInWithEmailAndPassword(auth, email, password);
// }

// export function logout() {
//   return signOut(auth);
// }

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

// JOSH LOOK ABOVE ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// This useEffect method is apparently necessary for the photo to load. Commented out because we use two seperate auths

  return currentUser;
}

// Storage
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, auth.getProfile().data._id + '.png');
  setLoading(true);
  
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, {photoURL});
  
  setLoading(false);
  alert("Uploaded file!");
}