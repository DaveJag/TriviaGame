// David Jagodowski - HW05 - Trivia Game 

$(document).ready(function() {

// MAIN PROGRAM
  
  var time = 30; // Sets length of gameplay. Initializes timer at 30 seconds.
  var intervalId;
  var timeUp = false;
  var answered = false;
  var myChoice = "";
  var numQuestions = 5; //default number of questions asked per game.
  var numCorrect = 0;
  var numIncorrect = 0;
  //var className = "";
  var divId;
  var index = 0;
  var stopped = false; 
  
  var questionArray = [    //Declare  array
  {
   question: "What gift did Galadriel give to Gimli?",
   answers: {   //make each answer a property of questions.answers
   	a: "Lembas for food",
   	b: "The Phial of Galadriel",
   	c: "Nothing",
   	d: "3 strands of her hair"
   },
   correctAnswer: "d"
   }, //end question 

   {
   question: "The Uruk-hai are bred from what two species?",
   answers: {
   	a: "Orcs and Men",
   	b: "Men and Elf",
   	c: "Orcs and Elf",
   	d: "Elf and Dwarf"
   },
   correctAnswer: "a"
   },
   
   {
   question: "What do the elves call Gandalf?",
   answers: {
   	a: "Greyhame",
   	b: "Stormcrow",
   	c: "Lathspell",
   	d: "Mithrandir "
   },
   correctAnswer: "d"
   },
   {
   question: "Who cut the Ring from Sauron's hand?",
   answers: {
    a: "Earendil",
    b: "Calimehtar",
    c: "Isildur",
    d: "Elendil"
   },
   correctAnswer: "c"
   },
   {
   question: "What does Eowyn mean??",
   answers: {
    a: "Daughter of Kings",
    b: "Shieldmaiden of Rohan",
    c: "Horse Joy",
    d: "Horse Lover"
   },
   correctAnswer: "c"
   }
   ];


  // On load, display Start screen information
  loadStartScreen();
 
  
  

 
  
//FUNCTIONS

  function loadStartScreen() { //Draws the START button and prompt screen.
   // document.getElementById("contentDiv").addEventListener("load",)
    $("#startDiv").show(); //shows the Start div
    $("#contentDiv").hide(); //Hides the content div on this screen
    $("#titleDiv").html('<img id="bannerId" src="./assets/images/lotr_banner.png">');
   // $("#contentDiv").show();
    $("#startDiv").html('<img id="startButtonId" src="./assets/images/start_button.png">');
    /*$("#div0").hide(); //Hides the content div on this screen
    $("#div1").hide();
    $("#div2").hide();
    $("#div3").hide();
    $("#div4").hide(); */
    $("#startButtonId").click(loadGameScreen);
  }


  function loadGameScreen() {
	//Listen for click event on START button and load the main game screen.
   // $("startButtonId").off("click");
    $("#startDiv").hide();
//    $("#startButtonId").click(function() { 
    console.log("loadGameScreen function called.");
    $("#contentDiv").show(); //restore contentDiv  
	  // $("#contentDiv").html(""); //clears the div content.
$("#titleDiv").html('<img id="bannerId" src="./assets/images/lotr_banner.png">');   	  //Display timer with 30 seconds on the clock
	  $("#titleDiv").append('<h2>Time Remaining: <span id="timeDisplayId">' + '00:' + time + '</span></h2>'); 
  
    $("#footerDiv").html('<p style="text-align:center"> <img id="doneButtonId" src="./assets/images/done_button.png"> </p>');
      setTimeout(countDown, 1000 * .5); //initiate countdown timer after brief delay.
      
    showQuestions(); //Write the questions out to the html page.  

    //Stop the clock if the Done image is clicked.
    $("#doneButtonId").click(function(){
    stopped = true;
  });   
  };

  function showQuestions() {   //Writes 1 question out to each allocated div
    var space = "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;";
    //console.log("function showQuestion called");
    for (var i=0; i<numQuestions; i++) {
      //write question i out to the Div[i]
      var divId = "#div" + i;
      console.log("divId has value " + divId);
      //$("#question").html('Question '+(i+1) + ": " + questionArray[i].question);
      $(divId).prepend('<p id="question">Question '+(i+1) + ": " + questionArray[i].question + '</p>'); 
      // write out form element to div  
      formName = "q" + i; // gives each <form> element a unique name. 
        
//Assign variables to each answer choice and read them into the form upon creation.
      var choiceA = questionArray[i].answers.a + space;
      var choiceB = questionArray[i].answers.b + space;
      var choiceC = questionArray[i].answers.c + space;
      var choiceD = questionArray[i].answers.d + space; 

      //Write radio button field out to each div 
      $(divId).append('<form>' +
      '<input type="radio" name=formName class="a0" value="a">' + choiceA + '<input type="radio" name=formName class="a1" value="b">' + choiceB +   
      '<input type="radio" name=formName class="a2" value="c">' + choiceC + '<input type="radio" name=formName class="a3" value="d">' + choiceD + 
      '</form>');
      
    } //end for i loop 
    readAnswers();  
   } // end function showQuestion()

function getLastChar(divId) {  //Returns the last value of the divId string which identifies the div.
  var myString = divId;
  var stringLength = myString.length;
  var lastChar = myString.charAt(stringLength - 1);
  if (isNaN(lastChar) === false) {   // if it is a number...
    index = parseInt(lastChar);
    console.log("getLastChar: index = " + index);
    return index;
  }
}
  //Since each question is in its own sequentially numbered div (div0, div1, etc.),
  //this function is supposed to capture which div was clicked in and use that info
  //to know which question # was answered, so it can be referenced in the
  //database. I could not get it to work, so scoring does not work in the game.  
 function getIndex() {  
    console.log("function getIndex");
    $('div').click(function() {
    var divId = this.id;
    console.log("divId is " + divId);
    getLastChar(divId); //converts div name into a index number for questionArray
    console.log("readanswers: index is " + index);
    return index;
    })
  }

  function readAnswers() {
    console.log("function readAnswers called");
      $(".a0").click(function() { 
         console.log("button a is checked")
         myChoice = "a"; 
         getIndex();  //Finds out what question # was clicked on by finding its div Id.
         var correct = questionArray[index].correctAnswer;
         console.log("correct = " + correct);
         checkAnswer(myChoice, correct);
      }); 

      $(".a1").click(function() { 
         console.log("button b is checked")
         myChoice = "b"; 
         getIndex();
         var correct = questionArray[index].correctAnswer;
         console.log("correct = " + correct);
         checkAnswer(myChoice, correct);
      }); 

      $(".a2").click(function() {

         console.log("button c is checked")
         myChoice = "c"; 
         getIndex();
         var correct = questionArray[index].correctAnswer;
         console.log("correct = " + correct);
         checkAnswer(myChoice, correct);
      }); 

      $(".a3").click(function() {
         console.log("button d is checked")
         myChoice = "d"; 
         var correct = questionArray[index].correctAnswer;
         console.log("correct = " + correct);
         checkAnswer(myChoice, correct);
      }); 
      }; //end function readAnswers.
      
  


  function checkAnswer(myChoice, correct) {
  	console.log("function checkAnswer called.");
    console.log("The choice is " + myChoice);
    //compare myChoice to correct answer
    if (myChoice === correct) {
      console.log("correct answer selected");
      numCorrect ++;
      $("#numRight").html(numCorrect);
    } else {
         console.log("wrong answer selected");
         numIncorrect ++;
         $("#numWrong").html(numIncorrect);
      }  
  }



//TIMING FUNCTIONS
  function countDown() {
	  console.log ("countDown function called");
	  intervalId = setInterval(count, 1000); //tell setInterval method to run the count function every 1 sec.
  }


  function count() {
    //console.log ("count function called")
    time--; //decrement time variable by 1 (second)
    var converted = timeConverter(time); //pass the new time to the timeConverter function.
    $("#timeDisplayId").html(converted);
    var timeLeft = converted;
    if (converted === "00:00") {
   	  stop();
   	  console.log("function count - time is up.");
      $("#startDiv").show(); //shows the Start div
      $("#startDiv").html('<h1>GAME OVER</h1>');
   	  timeUp = true;
   }  else if(stopped == true) {
      console.log ("stopped = true" + stopped);
      stop();
      $("#timeDisplayId").html(timeLeft);
      console.log("function count - clock stopped");
      $("#startDiv").show(); //shows the Start div
      $("#startDiv").html('<h2>You Finished in Time!</h2>');
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