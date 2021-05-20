import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'



var firebaseConfig = {
    apiKey: "AIzaSyBmoWKlsT6gu5BvcSrjRMvyiH8iCbbEfCA",
    authDomain: "auro-project-manager.firebaseapp.com",
    projectId: "auro-project-manager",
    storageBucket: "auro-project-manager.appspot.com",
    messagingSenderId: "74908633748",
    appId: "1:74908633748:web:bc70580e5b68c647980281",
    measurementId: "G-B6VWCKP2SC"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;