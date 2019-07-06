window.onload = function(){

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBvlOAJ3KITjlAGCLdhvMm4cKeNVMt3alI",
    authDomain: "trainschedule-a9cf1.firebaseapp.com",
    databaseURL: "https://trainschedule-a9cf1.firebaseio.com",
    projectId: "trainschedule-a9cf1",
    storageBucket: "",
    messagingSenderId: "59215949957",
    appId: "1:59215949957:web:836b13604082d8a2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();

  $("#addTrain").on("click", function(event){
   event.preventDefault();
  //Adding train info
  var trainName = $("#nameInput").val().trim();
  var destination = $("#destinationInput").val().trim();
  var firstTime = $("#firstTimeInput").val().trim();
  var frequency = $("#frequencyInput").val().trim();

  var newTrain ={
      name: trainName,
      dest: destination,
      time: firstTime,
      freq: frequency 
  }

  database.ref().push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.firstTime);
  console.log(newTrain.frequency);

  alert("Train successfully added");

  //Clears the inputs
  $("#nameInput").val("");
  $("#destinationInput").val("");
  $("#firstTimeInput").val("");
  $("#frequencyInput").val("");

});

database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().dest;
    var firstTime = childSnapshot.val().time;
    var frequency = childSnapshot.val().freq;

    console.log(trainName);
    console.log(destination);
    console.log(firstTime);
    console.log(frequency);
})

}