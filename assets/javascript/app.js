// David Jagodowski - HW05 - Trivia Game 

$(document).ready(function() {

// MAIN PROGRAM
  
  var time = 20; // Sets length of gameplay. Initializes timer at 30 seconds.
  var intervalId;
  var timeUp = false;
  var answered = false;
  var myChoice = "";
  var numQuestions = 3; //default number of questions asked per game.
  var numCorrect = 0;
  var numIncorrect = 0;

  
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
   	a: "Wayne Newton",
   	b: "The Caped Invader",
   	c: "Bruce Banner",
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
   // document.getElementById("contentDiv").addEventListener("load",)
    $("#contentDiv").hide(); //Hides the content div on this screen
    $("#titleDiv").html('<p id="startTextId">' + 
    	'Click the START button to begin. </p>' +  
    	'<p style="text-align:center"> <img id="startButtonId" src="./assets/images/start_button.png"> </p>');
  }


  function loadGameScreen() {
	//Listen for click event on START button and load the main game screen.
    $("startButtonId").off("click");
    $("#startButtonId").click(function() { 
      console.log("loadGameScreen function called.");
    $("#contentDiv").show(); //restore contentDiv  
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
    console.log("function showQuestion called");
    for (var i=0; i<numQuestions; i++) {
  

      //write question i out to the contentDiv
      var divId = "#div" + i;
      console.log("divId has value " + divId);
      //$("#question").html('Question '+(i+1) + ": " + questionArray[i].question);
      $(divId).prepend('<p>Question '+(i+1) + ": " + questionArray[i].question + '</p>'); 
      // write out form element to div  
      var formName = "q" + i; // gives each <form> element a unique name. 
      var ans1 =  i + "answer1"; // 0answer1 -->gives each radio button a unique class. 
      var ans2 =  i + "answer2"; // 0answer2
      var ans3 =  i + "answer3"; // 0answer3 
      var ans4 =  i + "answer4"; // 0answer4
      console.log("ans1 = " + ans1);
      console.log("ans2 = " + ans2);
      console.log("ans3 = " + ans3);
      console.log("ans4 = " + ans4);
 
//Assign variables to each answer and read them into the form upon creation.
      var choiceA = "A) " + questionArray[i].answers.a;
      var choiceB = "B) " + questionArray[i].answers.b;
      var choiceC = "C) " + questionArray[i].answers.c;
      var choiceD = "D) " + questionArray[i].answers.d; 

      $(divId).append('<form>' +
      '<input type="radio" name=formName id="a1" value="a">' + choiceA + '<input type="radio" name=formName id="a2" value="b">' + choiceB +   
      '<input type="radio" name=formName id="a3" value="c">' + choiceC + '<input type="radio" name=formName id="a4" value="d">' + choiceD + 
      '</form>');
        

      //write out possible answers to input/radio button element in the html
/*
      var answerId1 = "."+ i + "answer1"; 
      var answerId2 = "."+ i + "answer2"; 
      var answerId3 = "."+ i + "answer3";
      var answerId4 = "."+ i + "answer4";

       console.log("answerId1 has value " + answerId1);
       console.log("answerId2 has value " + answerId2);
       console.log("answerId3 has value " + answerId3);
       console.log("answerId4 has value " + answerId4);

      $(answerId1).html("A) " + questionArray[i].answers.a);
      $(answerId2).html("B) " + questionArray[i].answers.b);
      $(answerId3).html("C) " + questionArray[i].answers.c);
      $(answerId4).html("D) " + questionArray[i].answers.d);
*/     
   } //end for loop 

      $("#a1").click(function() {
        console.log("button a is checked");
        myChoice = "a";
        checkAnswer();
        return myChoice}); 
        
 
      $("#a2").click(function() { 
        console.log("button b is checked");
        myChoice = "b";
        checkAnswer();
        return myChoice}); 

      $("#a3").click(function() {
        console.log("button c is checked");
        myChoice = "c";
        checkAnswer();
        return myChoice}); 

      $("#a4").click(function() {
        console.log("button d is checked");
        myChoice = "d";
        checkAnswer();
        return myChoice}); 
  
          
    //  } // end while
  } // end function showQuestion()


  function checkAnswer() {
  	console.log("function checkAnswer called.");
    console.log("The choice is " + myChoice);
    //compare myChoice to correct answer
    var correct = questionArray[0].correctAnswer;
    if (myChoice === correct) {
      console.log("correct answer selected");
      numCorrect ++;
    } else {
         console.log("wrong answer selected");
         numIncorrect ++;
      }  
  }



//TIMING FUNCTIONS
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