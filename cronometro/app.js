let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

function start() {
  pause();
  cron = setInterval(()  => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.querySelector('#hour').innerHTML = '00';
  document.querySelector('#minute').innerHTML = '00';
  document.querySelector('#second').innerHTML = '00';
  document.querySelector('#millisecond').innerHTML = '000';
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }

  document.querySelector('#hour').innerHTML = returnData(hour);
  document.querySelector('#minute').innerHTML = returnData(minute);
  document.querySelector('#second').innerHTML = returnData(second);
  document.querySelector('#millisecond').innerHTML = returnData(millisecond);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}
