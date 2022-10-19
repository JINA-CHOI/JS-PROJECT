const clockContainer = document.querySelector(".js-clock");
const Dday = clockContainer.querySelector(".js-Dday");

function getTime() {
  const xmasDay = new Date("2022-12-24:00:00:00+0900");
  const nowDay =  new Date();

  //크리스마스 D-day
  const resultDay = xmasDay.getTime()- nowDay.getTime();

  const day = Math.floor(resultDay / (1000 * 60 * 60 * 24));
  const hour = Math.floor((resultDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min = Math.floor((resultDay % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((resultDay % (1000 * 60)) / 1000); 
  

  Dday.innerText= `${day}d ${hour < 10 ? `0${hour}`:hour}h ${
    min < 10 ? `0${min}`:min}m ${sec < 10 ? `0${sec}`:sec}s`;
    
}

function init(){
  getTime();
  setInterval(getTime, 1000);
}

init();