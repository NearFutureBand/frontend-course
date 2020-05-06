const firebase = require('firebase');

(async () => {
  firebase.initializeApp({
    apiKey: "AIzaSyAbdb4fItJEKTPPxOYl_wkygmA3ZzwlsPA",
    authDomain: "frontend-course-test.firebaseapp.com",
    databaseURL: "https://frontend-course-test.firebaseio.com",
    projectId: "frontend-course-test",
    storageBucket: "frontend-course-test.appspot.com",
    messagingSenderId: "426890771279",
    appId: "1:426890771279:web:6d2ab497285fc22e62233a",
    measurementId: "G-Z21ERVFE2S"
  });


  try {
    await firebase.auth().signInWithEmailAndPassword('email@email.email', '123456');
    const user = firebase.auth().currentUser;

    const response = await user.updateProfile({
      displayName: "Test User",
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
})();

