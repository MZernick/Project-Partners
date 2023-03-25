import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxLkuUffzIsjuQNAUy3yFMKSEHnWIETzk",
  authDomain: "propairs.firebaseapp.com",
  projectId: "propairs",
  storageBucket: "propairs.appspot.com",
  messagingSenderId: "490559612342",
  appId: "1:490559612342:web:7bcc49c1047784b3b18d17",
  measurementId: "G-3EXL5EXWT5"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const storage = getStorage(app);