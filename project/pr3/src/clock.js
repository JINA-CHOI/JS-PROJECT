
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
let monthNames=["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

function getTime(){
    const date =  new Date();
    const year = date.getFullYear();
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = 
    `${year} ${month < 10 ? `0${month}`:month} ${day<10?`0${day}`
    :day}th 
    ${hours < 10 ? `0${hours}`:hours} : ${minutes < 10 ? `0${minutes}`:minutes} :${seconds < 10 ? `0${seconds}`:seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();
