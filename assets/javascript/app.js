$(document).ready(function(){
   
    var timer2 = "3:01";
    var interval = setInterval(function() {
    
    
      var timer = timer2.split(':');
      var minutes = parseInt(timer[0], 10);
      var seconds = parseInt(timer[1], 10);
      --seconds;
      minutes = (seconds < 0) ? --minutes : minutes;
      if (timer === 0) alert("Time is Up!");
      seconds = (seconds < 0) ? 59 : seconds;
      seconds = (seconds < 10) ? '0' + seconds : seconds;
      $('#timer').html(minutes + ':' + seconds);
      timer2 = minutes + ':' + seconds;
    }, 1000);
})

function submitAnswers() {

    var total = 5;
    var score = 0;

    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;

    //validation    
    for(i = 1; i <= total;i++) {
        if(eval('q'+i))  null || eval(('q'+i) === ''); {
            alert("you missed question" + i);
            return false;
        }
    }
//array of correct answers
    var answers = ["a","b","b","b"];

//check answers with if statements
    for(i = 1; i <= total; i++){
        if(eval('q'+ i) === answers[i - 1]) {
        score++;
    }
    }   
}