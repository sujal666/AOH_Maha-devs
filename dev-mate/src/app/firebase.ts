import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBedehC66oBktGQsh3JYAqfhlSsDIJS5Rw",
  authDomain: "argon-depth-418108.firebaseapp.com",
  projectId: "argon-depth-418108",
  storageBucket: "argon-depth-418108.appspot.com",
  messagingSenderId: "775746809192",
  appId: "1:775746809192:web:ff19ae4a29c03bc5ef3add",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { db, storage };
