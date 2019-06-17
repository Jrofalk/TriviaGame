

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
        $('#question-one').hide();
        $('#question-two').hide();
        $('#question-three').hide();
        var tryAgain = $("<button>");
          tryAgain.addClass('btn btn-secondary btn-lg');
          tryAgain.html('Try Again')
          $("#new-button").append(tryAgain);
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

 $('#correct-one').on('click', function(){
    wins++;
    console.log(wins);
    $('#question-two').show();
    $('#question-one').hide();
  });

  $('#false-one').on('click', function(){
    $('#question-two').show();
    $('#question-one').hide();
  });
  

  $('#correct-two').on('click', function(){
    wins++;
    console.log(wins);
    $('#question-three').show();
    $('#question-two').hide();
  });

  $('#false-two').on('click', function(){
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

  $('#false-three').on('click', function(){
    console.log(wins);
    $('#question-three').hide();
    $('#score').show()
    $('#total-score').text(wins);
  });

  




  

























