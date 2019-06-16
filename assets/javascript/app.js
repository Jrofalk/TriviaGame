

var time = 100;
var intervalId;
var wins = 0;


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    time--;
    $('#show-number').text(time);
    if (time === 0) {
        stop();
    }
}

function stop() {
    clearInterval(intervalId);
}
  



  run();



  $('#start').on('click', function(){
    $('.questions').show();
    $('#start').hide();
  });

 $('#correct-one').on ('click', function(){
    wins++;
    console.log(wins);
    $('#question-two').show();
    $('#question-one').hide();
  });

  

  $('#correct-two').on('click', function(){
    wins++;
    console.log(wins);
    $('#question-three').show();
    $('#question-two').hide();
  });

  $('#correct-three').on('click', function(){
    wins++;
    console.log(wins);
    $('#question-three').hide();
    $('#score').show()
    $('#total-score').text(wins);
  });

  




  

























