// David Jagodowski - HW05 - Trivia Game 

$(document).ready(function() {

// MAIN PROGRAM
  
  var time = 10; // Sets length of gameplay. Initializes timer at 30 seconds.
  var intervalId;
  timeUp = false;

  // On load, display Start screen information
  loadStartScreen();
  // Listen for click event on START button and load the main game screen.
  $("#startButtonId").click(loadGame);
  setTimeout(countDown, 1000 * 1.8); //Provide a buffer before timer starts to allow elements to update in html.



//FUNCTIONS

function loadStartScreen() {
  $("#contentDiv").html('<p id="startTextId"> Click the START button to begin. </p> <p style="text-align:center"> <img id="startButtonId" src="./assets/images/start_button.png"> </p>');
}


function loadGame() {
	console.log("loadGame function called.");
	$("#contentDiv").html(""); //clears the div content.
	$("#contentDiv").html("<h1>Totally Trivial Trivia!");

	//Display timer with 30 seconds on the clock
	$("#contentDiv").append('<h2>Time Remaining: <span id="timeDisplayId">' + '00:' + time + '</span></h2>'); 
  }


function countDown() {
	console.log ("countDown function called");
	intervalId = setInterval(count, 1000); //tell setInterval method to run the count function every 1 sec.
  }


function count() {
   console.log ("count function called")
   time--; //decrement time variable by 1 (second)
   var converted = timeConverter(time); //pass the new time to the timeConverter function.
   $("#timeDisplayId").html(converted);
   if (converted === "00:00") {
   	stop();
   	console.log("function count - clock stopped");
   	timeUp = true;
   }
 }


 function stop() {
   console.log("stop function called.");
   clearInterval(intervalId); //stop the setInterval method from running.
 }


function timeConverter(t) {

  var minutes = Math.floor(t / 60); //convert seconds into minutes.
  var seconds = t - (minutes * 60); //subtract all previous minutes from the count so only seconds remain.

  if (seconds < 10) {
    seconds = "0" + seconds;  //If seconds are single digits, preceed it with a zero.
  }

  if (minutes === 0) {  
    minutes = "00";   //When there are only seconds to display, represent minutes with "00".
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;  //If minutes are single digits, preceed it with a zero.
  }
  //console.log ("timeConverter function called.")
  return minutes + ":" + seconds;
 }


}); //end document ready