import Firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAsDyh8RileMOFF9Cg_mddH7mEIKKjpwJo",
  authDomain: "pokemon-dfc37.firebaseapp.com",
  projectId: "pokemon-dfc37",
  storageBucket: "pokemon-dfc37.appspot.com",
  messagingSenderId: "149438330840",
  appId: "1:149438330840:web:7ea191f2430035d8d864ad",
};
// Initialize Firebase
if (!Firebase.apps.length) {
  Firebase.initializeApp(firebaseConfig);
}

export default Firebase;
