import { collection, getDocs, getDoc, addDoc, doc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAHeF66TrE2EPTpPcGJjfQhExVodvWK16U",
    authDomain: "cp-project-2023.firebaseapp.com",
    projectId: "cp-project-2023",
    storageBucket: "cp-project-2023.appspot.com",
    messagingSenderId: "558905493631",
    appId: "1:558905493631:web:3a2df19452f0c20ca2174a",
    measurementId: "G-LKY08VTTEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const projetsCollectionRef = collection(db, "projets");

class ProjetsDataService {
  addProject = async (project) => {
    return await addDoc(projetsCollectionRef, project);
  };

  getAllProject = async () => {
    return await getDocs(projetsCollectionRef);
  };

  getProject = async (id) => {
    const docRef = doc(db, "projets", id);
    return await getDoc(docRef);
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProjetsDataService();
