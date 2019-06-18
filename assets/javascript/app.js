

var time = 50;
var intervalId;
var numCorrect = 0;

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
        $('#question-four').hide();
        $('#question-five').hide();
        var timesUp = $("<div>");
          timesUp.attr('id', 'time-over');
          timesUp.html('Time is up! ' + numCorrect + ' out of 5 questions were answered correctly.');
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
    numCorrect++;
    $('#question-two').toggle();
    $('#question-one').toggle();
  });

  $('#false-one').on('click', function(){
    $('#question-two').toggle();
    $('#question-one').toggle();
  });
  

  $('#correct-two').on('click', function(){
    numCorrect++;
    $('#question-three').toggle();
    $('#question-two').toggle();
  });

  $('#false-two').on('click', function(){
    $('#question-three').toggle();
    $('#question-two').toggle();
  });

  $('#correct-three').on('click', function(){
    numCorrect++;
    $('#question-four').toggle();
    $('#question-three').toggle();
  });

  $('#false-three').on('click', function(){
    $('#question-four').toggle();
    $('#question-three').toggle();
  });

  $('#correct-four').on('click', function(){
    numCorrect++;
    $('#question-five').toggle();
    $('#question-four').toggle();
  });

  $('#false-four').on('click', function(){
    $('#question-five').toggle();
    $('#question-four').toggle();
  });

  
  $('#correct-five').on('click', function(){
    numCorrect++;
    $('#question-five').toggle();
    $('#score').toggle()
    $('#total-score').html(numCorrect + ' out of 5 questions were answered correctly.');
    stop();
  });

  $('#false-five').on('click', function(){
    $('#question-five').toggle();
    $('#score').toggle();
    $('#total-score').text(numCorrect + ' out of 5 questions were answered correctly.');
    stop();
  });

  



  

















