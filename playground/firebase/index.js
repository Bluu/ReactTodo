import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBzJcHBYFoG1QSasPxoQIU6P7wOnnaOYTM",
    authDomain: "bluu-todo-app.firebaseapp.com",
    databaseURL: "https://bluu-todo-app.firebaseio.com",
    storageBucket: "bluu-todo-app.appspot.com",
  };
firebase.initializeApp(config);

const firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: 1
  },
  isRunning: true,
  user: {
    name: 'German',
    age: 30
  }
});

var notesRef = firebaseRef.child('todos');
notesRef.on('child_added', (snapshot) => {
  console.log('created', snapshot.key, snapshot.val());
});
var newNoteRef = notesRef.push({
  text: 'asd11'
});

var newNoteRef = notesRef.push({
  text: '123'
});
