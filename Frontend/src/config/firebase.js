
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAVmlRMkh-Q-4Paj1MxW_8Ja40EeqZF1s",
  authDomain: "blog-app-593de.firebaseapp.com",
  projectId: "blog-app-593de",
  storageBucket: "blog-app-593de.firebasestorage.app",
  messagingSenderId: "440603686889",
  appId: "1:440603686889:web:764ed2ecb094d69c0dbd78",
  measurementId: "G-WGW0QNKB39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth