// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBrKS5w0R3XfCWW3AQseWMcC-qWTFcbcLc",
      authDomain: "letschat-cb221.firebaseapp.com",
      databaseURL: "https://letschat-cb221-default-rtdb.firebaseio.com",
      projectId: "letschat-cb221",
      storageBucket: "letschat-cb221.appspot.com",
      messagingSenderId: "1066051761360",
      appId: "1:1066051761360:web:f28d420f03d011c7c6dad5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "add room"
      });
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
