//Write codes to go to top button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Remaining time codes
var SixtyTimer ;

SixtyTimer = setInterval(myClock, 1000);
var setTime = 60;
counter=1;
function myClock() {
 
  document.getElementById("time").innerHTML = --setTime;
  if (setTime == 0) {
    clearInterval(SixtyTimer);
    alert("Time is up! Please click 'View Marks' to see the marks");
    while(counter<=40){

      //Disable radio buttons of the answers
      document.getElementById("ans"+counter).disabled = true;
      counter++;
    }
  }
    //Instuctions to "View Marks" button
    var button = document.querySelector("#markViewBtn");
    button.addEventListener('click', function() {
        submit1();
    });
    function submit1() {
      
      button.disabled = false;
      counter=1
      //counter the time that user got to complete the quiz
      while(counter<=40){
        
        var allTime = 60-setTime;
        
        //Display time that get to complete the quiz
        document.getElementById("myTextClock").innerHTML = "You got "+allTime+" seconds for complete the quiz";
        document.getElementById("ans"+counter).disabled = true;
        counter++;
      }
    }
  }
  
  //Get user input answers into seperate arrays
  function displayRadioValue() {
    
    //Get Question 1 answer to array
    var array = document.getElementsByName('group1');
    for(i = 0; i < array.length; i++) {
      if(array[i].checked){
        var Qgroup1=parseInt(array[i].value);
      }
    }
    //Display result
    if(document.getElementById('ans3').checked) { 
      document.getElementById("ansResult1").innerHTML = "&#10004;";ansResult1.style.color = " #009933";
    }else{
      document.getElementById("ansResult1").innerHTML = "\u274C  <br /> <br /> Correct answer is 11";ansResult1.style.color = "#ff0000";
    }

    //Get Question 3 answers to array
    var array = document.getElementsByName('group3');
    for(i = 0; i < array.length; i++) {
      if(array[i].checked){
        var Qgroup3=parseInt(array[i].value);
      }
    }
    //Display result
    if(document.getElementById('ans10').checked) { 
      document.getElementById("ansResult3").innerHTML = "&#10004;";ansResult3.style.color = " #009933";
      }else{
        document.getElementById("ansResult3").innerHTML = "\u274C  <br /> <br />  Correct answer is The Ashes";ansResult3.style.color = "#ff0000";
      }

    //Get Question 2 answers to array
    var array = document.getElementsByName('group2');
    for(i = 0; i < array.length; i++) {
      if(array[i].checked){
        var Qgroup2=parseInt(array[i].value);
      }
      //Display result
      if(document.getElementById('ans5').checked) { 
        document.getElementById("ansResult2").innerHTML = "&#10004;";ansResult2.style.color = " #009933";
      }else{
        document.getElementById("ansResult2").innerHTML = "\u274C  <br /> <br />  Correct answer is Five days";ansResult2.style.color = "#ff0000";
      }

      //Get Question 4 answers to array
      var array = document.getElementsByName('group4');
      for(i = 0; i < array.length; i++) {
        if(array[i].checked){
          var Qgroup4=parseInt(array[i].value);
        }
      }
      if(document.getElementById('ans13').checked) { 
        document.getElementById("ansResult4").innerHTML = "&#10004;";
        ansResult4.style.color = " #009933";
      }else{
        document.getElementById("ansResult4").innerHTML = "\u274C  <br /> <br />  Correct answer is Benson and Hedges World Cup ";
        ansResult4.style.color = "#ff0000";
      }

      //Get Question 5 answers to array
      var array = document.getElementsByName('group5');
      for(i = 0; i < array.length; i++) {
        if(array[i].checked){
          var Qgroup5=parseInt(array[i].value);
        }
      }
      //Display result
      if(document.getElementById('ans17').checked) {
        document.getElementById("ansResult5").innerHTML = "&#10004;";ansResult5.style.color = " #009933";
      }else{
        document.getElementById("ansResult5").innerHTML = "\u274C <br /> <br />  Correct answer is 1982 ";ansResult5.style.color = "#ff0000";
      }

      //Get Question 6 answers to array
      var array = document.getElementsByName('group6');
      for(i = 0; i < array.length; i++) {
        if(array[i].checked){
          var Qgroup6=parseInt(array[i].value);
        }
      }
      //Display result
      if(document.getElementById('ans22').checked) { 
        document.getElementById("ansResult6").innerHTML = "&#10004;";ansResult6.style.color = " #009933";
      }else{
        document.getElementById("ansResult6").innerHTML = "\u274C <br /> <br />   Correct answer is 952 runs ";ansResult6.style.color = "#ff0000";
      }
      
      //Get Question 7 answers to array
      var array = document.getElementsByName('group7');
      for(i = 0; i < array.length; i++) {
        if(array[i].checked){
          var Qgroup7=parseInt(array[i].value);
        }
      }
      //Display result
      if(document.getElementById('ans25').checked) { 
        document.getElementById("ansResult7").innerHTML = "&#10004;";ansResult7.style.color = " #009933";
      }else{
        document.getElementById("ansResult7").innerHTML = "\u274C  <br /> <br />  Correct answer is 400 not out ";ansResult7.style.color = "#ff0000";
      }
      
      //Get Question 8 answers to array
      var array = document.getElementsByName('group8');
      for(i = 0; i < array.length; i++) {
        if(array[i].checked){
          var Qgroup8=parseInt(array[i].value);
        }
      }
      //Display result
      if(document.getElementById('ans29').checked) { 
        document.getElementById("ansResult8").innerHTML = "&#10004;";ansResult8.style.color = " #009933";
      }else{
        document.getElementById("ansResult8").innerHTML = "\u274C  <br /> <br />  Correct answer is Mutthiah Muralitharan ";ansResult8.style.color = "#ff0000";
      }

      //Get Question 9 answers to array
      var array = document.getElementsByName('group9');
      for(i = 0; i < array.length; i++) {
        if(array[i].checked){
          var Qgroup9=parseInt(array[i].value);
        }
      }
      //Display result
      if(document.getElementById('ans35').checked) { 
        document.getElementById("ansResult9").innerHTML = "&#10004;";ansResult9.style.color = " #009933";
      }else{
        document.getElementById("ansResult9").innerHTML = "\u274C  <br /> <br /> Correct answer is ICC World Cup ";ansResult9.style.color = "#ff0000";
      }

      //Get Question 10 answers to array
      var array = document.getElementsByName('group10');
      for(i = 0; i < array.length; i++) {
        if(array[i].checked){
          var Qgroup10=parseInt(array[i].value);
        }
      }
      //Display result
      if(document.getElementById('ans40').checked) { 
        document.getElementById("ansResult10").innerHTML = "&#10004;";ansResult10.style.color = " #009933";
      }else{
        document.getElementById("ansResult10").innerHTML = "\u274C       <br /> <br />   Correct answer is 1774 ";ansResult10.style.color = " #ff0000";
      }
      
      //If user did not answer question get the program het it as -1
      if (isNaN(Qgroup1)) {
        Qgroup1 = -1;
      }
      if (isNaN(Qgroup2)) {
        Qgroup2 = -1;
      }
      if (isNaN(Qgroup3)) {
        Qgroup3 = -1;
      }
      if (isNaN(Qgroup4)) {
        Qgroup4 = -1;
      }
      if (isNaN(Qgroup5)) {
        Qgroup5 = -1;
      }
      if (isNaN(Qgroup6)) {
        Qgroup6 = -1;
      }
      if (isNaN(Qgroup7)) {
        Qgroup7 = -1;
      }
      if (isNaN(Qgroup8)) {
        Qgroup8 = -1;
      }
      if (isNaN(Qgroup9)) {
        Qgroup9 = -1;
      }
      if (isNaN(Qgroup10)) {
        Qgroup10= -1;
      }
      
      //Set totalCountal to "0" and calculate all marks
      var totalCount=0;
      totalCount=Qgroup1+Qgroup2+Qgroup3+Qgroup4+Qgroup5+Qgroup6+Qgroup7+Qgroup8+Qgroup9+Qgroup10;
      if(0>totalCount){
        totalCount=0;
      }
      //Display totalCountal marks
      document.getElementById("totalCountal").innerHTML= "You got "+totalCount+" out of 20 for this quiz";

      //Change background colour according to marks
      if (totalCount < 7) {
        document.body.style.backgroundImage = "linear-gradient(to right,#ff0000,#780606)";
      }
      else if (totalCount < 13) {
        document.body.style.backgroundImage = "linear-gradient(to right,orange,rgb(182, 139, 61)";
      }
      else {
        document.body.style.backgroundImage = "linear-gradient(to right,rgb(0, 255, 0),rgb(5, 110, 5)";
      }
      
      //Scroll up button functions
      window.scrollTo(600, 7700);
    }
  }
