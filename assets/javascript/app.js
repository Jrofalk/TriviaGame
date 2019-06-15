
var time = 100;
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    time--;
    $('#show-number').text(time);
    if (number === 0) {
        stop();
    }
}

function stop() {
    clearInterval(intervalId);
    }
  


  run();


























