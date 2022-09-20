import firebase from 'firebase/compat/app';
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc, setDoc,
    query, where,
    orderBy, serverTimestamp,
    getDoc, updateDoc
} from 'firebase/firestore'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'
import { sign } from 'crypto'

const firebaseConfig = {
    apiKey: "AIzaSyBZboMNGqUV2Qbf7RLPuoDCOvTnuXQfawM",
    authDomain: "catchu-f1810.firebaseapp.com",
    projectId: "catchu-f1810",
    storageBucket: "catchu-f1810.appspot.com",
    messagingSenderId: "753717629362",
    appId: "1:753717629362:web:7f26d7c3c22ed38bd514ab",
    measurementId: "G-65DKV4M5QD"
};
firebase.initializeApp(firebaseConfig);

const tenantId = "TENANT_ID1";

//const db = getFirestore()
const db = getFirestore()
//auth.tenantId = tenantId;
//const database = firebase.firestore();
export default db;