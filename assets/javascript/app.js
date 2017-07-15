// David Jagodowski - HW05 - Trivia Game 

$(document).ready(function() {

// MAIN PROGRAM
  
  var time = 10; // Sets length of gameplay. Initializes timer at 30 seconds.
  var intervalId;
  var timeUp = false;
  var radio1 = false;
  var radio2 = false;
  var radio3 = false;
  var radio4 = false;
  
  var questionArray = [    //Declare  array
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
  console.log("Main program ref 1");
  loadGameScreen();
  console.log("Main program ref 2");
  
 
  
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
      showQuestion(); //Write the questions out.
    });      
  };

  function showQuestion() {
    var space = "&nbsp; &nbsp; &nbsp; ";
    var selection = "";
    console.log("function showQuestion called");
    //write 1 question out to the contentDiv
    $("#question").html("Question 1: " + questionArray[0].question);
    
    //write out possible answers to input/radio button element in the html
    $("#answer1").html("A " + questionArray[0].answers.a);
    $("#answer2").html("B " + questionArray[0].answers.b);
    $("#answer3").html("C " + questionArray[0].answers.c);
    $("#answer4").html("D " + questionArray[0].answers.d);


    $("#a1").click(function() {console.log("button a is checked")}); 
    $("#a2").click(function() {console.log("button b is checked")}); 
    $("#a3").click(function() {console.log("button c is checked")}); 
    $("#a4").click(function() {console.log("button d is checked")}); 

    //when a choice is made, check the answer.
 /*   if ($("#a1").checked = true ) {console.log("button a is checked")};
    if ($("#a2").checked = true ) {console.log("button b is checked")};
    if ($("#a3").checked = true ) {console.log("button c is checked")};
    if ($("#a4").checked = true ) {console.log("button d is checked")};
  */  
//var selection = $('input[name="q1"]:checked').value;
// console.log("You entered " + selection + "for your choice.");
/* 
    radio1 = $("#a1").checked;
  	radio2 = $("#a2").checked;
  	radio3 = $("#a3").checked;
  	radio4 = $("#a4").checked;
    console.log ("radio1 = " + radio1);
    console.log ("radio2 = " + radio2);
    console.log ("radio3 = " + radio3);
    console.log ("radio4 = " + radio4);
    return radio1, radio2, radio3, radio4
  */
  }

  function checkAnswer() {
  	console.log("function checkAnswer called.")



    //for (var i=1; i<5; i++) {  //
    //	if  
    //}
  }
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