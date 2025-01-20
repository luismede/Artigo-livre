const firebaseConfig = {
    apiKey: "AIzaSyCQep5YIZ1DPLixmqJtnNggA4XvcXEPbEc",
    authDomain: "biblioteca-de-artigos-64dda.firebaseapp.com", 
    projectId: "biblioteca-de-artigos-64dda",
    storageBucket: "biblioteca-de-artigos-64dda.appspot.com",
    messagingSenderId: "191113822411",
    appId: "1:191113822411:web:f0f5800f58af273ef05b4e",
    measurementId: "G-FWP05R4Q7W"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let storage = firebase.storage();