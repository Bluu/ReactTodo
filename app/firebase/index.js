import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBzJcHBYFoG1QSasPxoQIU6P7wOnnaOYTM",
    authDomain: "bluu-todo-app.firebaseapp.com",
    databaseURL: "https://bluu-todo-app.firebaseio.com",
    storageBucket: "bluu-todo-app.appspot.com",
  };

  firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;
