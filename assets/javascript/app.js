// David Jagodowski - HW05 - Trivia Game 

$(document).ready(function() {

// MAIN PROGRAM
  
  var time = 10; // Sets length of gameplay. Initializes timer at 30 seconds.
  var intervalId;
  var timeUp = false;
  
  var questions = [    //Declare  array
  {
   question: "What is another name for Superman?",
   answers: {   //make each answer a property of questions.answers
   	a: "The Caped Crusader",
   	b: "The Red Redeemer",
   	c: "The Man of Steel",
   	d: "The Krypton Kid"
   },
   correctAnswer: "c"
   }, //end question 

   {
   question: "What is Superman's only known weakness?",
   answers: {
   	a: "Lois Lane's Legs",
   	b: "Kryptonite",
   	c: "Samsonite",
   	d: "Gambling"
   },
   correctAnswer: "b"
   },
   
   {
   question: "What is the name of Batman's secret identity?",
   answers: {
   	a: "Bat Boy",
   	b: "The Caped Invader",
   	c: "Bruce Willis",
   	d: "Bruce Wayne"
   },
   correctAnswer: "d"
   }]


  // On load, display Start screen information
  loadStartScreen();
  loadGameScreen();
 
  //showQuestions(questions);


//FUNCTIONS

  function foo() { 
  };

  function loadStartScreen() { //Draws the START button and prompt screen.
    $("#titleDiv").html('<p id="startTextId">' + 
    	'Click the START button to begin. </p>' +  
    	'<p style="text-align:center"> <img id="startButtonId" src="./assets/images/start_button.png"> </p>');
  }


  function loadGameScreen() {
	//Listen for click event on START button and load the main game screen.
    $("startButtonId").off("click");
    $("#startButtonId").click(function() { 
      console.log("loadGameScreen function called.");
	  // $("#contentDiv").html(""); //clears the div content.
	  $("#titleDiv").html("<h1>Totally Trivial Trivia!");
   	  //Display timer with 30 seconds on the clock
	  $("#titleDiv").append('<h2>Time Remaining: <span id="timeDisplayId">' + '00:' + time + '</span></h2>'); 
  
      setTimeout(countDown, 1000 * .5); //initiate countdown timer after brief delay.
    });      
  };

/* function showQuestions() {
	var output = []; // stores the questions and answers.
	var answers;

    for (var i = 0; i < questions.length; i++) {   //for each question in array
      answers = [] //reset answer list.
      
//
      for (letter in questions[i].answers) {
      	answers.push(  //push the code to create a radio button
      		'<label>' 
      		  + '<input type="radio" name="question" + i + "value=" + letter +">'
			  + letter + ": " + questions[i].answers[letter] 
			+ '</label>' );
      }  
      //Populate the output array with each question and its answers
      output.push('<p class = "question">' + questions[i].question + '</p>' +  
      	'<p class = "answers">' + answers.join("") + '</p>'); 
    }
   //$("#contentDiv").append(output.join(""));
}

*/


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