// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAUbV7q0DWCQVD5gL2gp9QyZ_oLz1RvUBI",
    authDomain: "lets-chat-4d400.firebaseapp.com",
    databaseURL: "https://lets-chat-4d400-default-rtdb.firebaseio.com",
    projectId: "lets-chat-4d400",
    storageBucket: "lets-chat-4d400.appspot.com",
    messagingSenderId: "44650349399",
    appId: "1:44650349399:web:20e6d26eeac6af8cc63412"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
}



