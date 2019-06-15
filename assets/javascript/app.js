

var time = 100;
var intervalId;

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
    $('#questions').show();
    $('#start').hide();
  });


























