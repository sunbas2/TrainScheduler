$(document).ready(function(){

    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCDtHLfCzJmUublZHf8BeNK7Ike_BquDVM",
    authDomain: "trainschedule-ada12.firebaseapp.com",
    databaseURL: "https://trainschedule-ada12.firebaseio.com",
    projectId: "trainschedule-ada12",
    storageBucket: "trainschedule-ada12.appspot.com",
    messagingSenderId: "446441822049"
  };
  firebase.initializeApp(config);
  console.log(config);
 
  
  var database = firebase.database();

  $("#submit").on("click", function() {
      var inputName = $("#trainname").val().trim;
      var inputDestination = $("#destination").val().trim;
      var inputFirsttraintime = $("#firsttraintime").val().trim;
      var inputFrequency = $("#frequency").val().trim;
 
      database.ref().push({
        inputName: TrainName,
        inputDestination: Destination,
        inputFirsttraintime: Firsttraintime,
        inputFrequency: Frequency,
        })
    });
});