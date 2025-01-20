const firebaseConfig = {
    apiKey: "",
    authDomain: "", 
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let storage = firebase.storage();
