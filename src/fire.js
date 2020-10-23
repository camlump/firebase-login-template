import firebase from 'firebase'



  var firebaseConfig = {
    apiKey: "AIzaSyAoZiGcrRu7wTOA2HoRQzK0oaqnQ-SlmTo",
    authDomain: "login-5d2a7.firebaseapp.com",
    databaseURL: "https://login-5d2a7.firebaseio.com",
    projectId: "login-5d2a7",
    storageBucket: "login-5d2a7.appspot.com",
    messagingSenderId: "484020362051",
    appId: "1:484020362051:web:160f623b7858dd4fc46df6"
  };

  const fire = firebase.initializeApp(firebaseConfig);


  export default fire;
