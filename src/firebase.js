
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyARGVguFWbIT10W6Frde8sz-xtDVfOu0E8",
    authDomain: "fitness-gym-5df7b.firebaseapp.com",
    projectId: "fitness-gym-5df7b",
    storageBucket: "fitness-gym-5df7b.appspot.com",
    messagingSenderId: "490652120235",
    appId: "1:490652120235:web:60d27cf1f9ad7b6e5f73ee"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app, auth};