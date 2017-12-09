import * as firebase from 'firebase';
const  config = {
    apiKey: "AIzaSyBoRec0kGNSjgPbdNz9nKIh9R8LinLSYoI",
    authDomain: "budgetplanner-4b0df.firebaseapp.com",
    databaseURL: "https://budgetplanner-4b0df.firebaseio.com",
    projectId: "budgetplanner-4b0df",
    storageBucket: "budgetplanner-4b0df.appspot.com",
    messagingSenderId: "1056848735727"
  };
  firebase.initializeApp(config);

  const database=firebase.database();

  export {
      firebase,database as default
  }