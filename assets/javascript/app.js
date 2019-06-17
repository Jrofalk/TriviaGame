

var time = 10;
var intervalId;
var wins = 0;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}



function decrement() {
    time--;
    $('#timer').text(time);
    if (time === 0) {
        stop();
        $('#question-one').hide();
        $('#question-two').hide();
        $('#question-three').hide();
        var timesUp = $("<div>");
          timesUp.html('Time is over!');
          $('#timer').replaceWith(timesUp);

        
    }
}

function stop() {
    clearInterval(intervalId);
}
  

  run();

  $('#start').on('click', function(){
    $('.questions').toggle();
    $('#start').toggle();
  });

 $('#correct-one').on('click', function(){
    wins++;
    console.log(wins);
    $('#question-two').toggle();
    $('#question-one').toggle();
  });

  $('#false-one').on('click', function(){
    $('#question-two').toggle();
    $('#question-one').toggle();
  });
  

  $('#correct-two').on('click', function(){
    wins++;
    console.log(wins);
    $('#question-three').toggle();
    $('#question-two').toggle();
  });

  $('#false-two').on('click', function(){
    $('#question-three').toggle();
    $('#question-two').toggle();
  });

  $('#correct-three').on('click', function(){
    wins++;
    console.log(wins);
    $('#question-three').toggle();
    $('#score').toggle()
    $('#total-score').text(wins);
    stop();
  });

  $('#false-three').on('click', function(){
    console.log(wins);
    $('#question-three').toggle();
    $('#score').toggle();
    $('#total-score').text(wins);
    stop();
  });

  



  

















