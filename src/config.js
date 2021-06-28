import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({

        apiKey: "AIzaSyCgoz8gooV1vwKpiy3EFCDryjHCFpeAOt4",
        authDomain: "regisauth-pat.firebaseapp.com",
        projectId: "regisauth-pat",
        storageBucket: "regisauth-pat.appspot.com",
        messagingSenderId: "17039028712",
        appId: "1:17039028712:web:d1d348dbbe44b73ea9345d",
        measurementId: "G-YPGCLVMN4K"
 
});

export default firebaseConfig;