var firebaseConfig = {
    apiKey: "AIzaSyBajBfDEWqvcdxjFEQyN0J_eh8kq_fDWiw",
    authDomain: "project-94-4e40a.firebaseapp.com",
    projectId: "project-94-4e40a",
    storageBucket: "project-94-4e40a.appspot.com",
    messagingSenderId: "827818613464",
    appId: "1:827818613464:web:210146045a50d22b4d95ad"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addRoom(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    })
  }