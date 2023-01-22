let valueMinutes = 0;
let valueSeconds = 0;
let interval;

const buttonStart = document.getElementById("start");
const buttonStop  = document.getElementById("stop");
const buttonReset = document.getElementById("reset");

const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function swStart(){
    interval = setInterval(displayTimer,1000);
};

function swStop(){
    clearInterval(interval);
};

function swReset(){
    clearInterval(interval);
    valueMinutes = 0;
    valueSeconds = 0;
    minutes.innerHTML="00";
    seconds.innerHTML="00";
};

function displayTimer(){
    valueSeconds ++;
    if(valueSeconds<=9){
        seconds.innerHTML="0"+valueSeconds;
    }
    if(valueSeconds>9){
        seconds.innerHTML=valueSeconds;
    }
    if(valueSeconds>=60){
        valueMinutes++;
        minutes.innerHTML="0"+valueMinutes;
        valueSeconds = 0;
        seconds.innerHTML="0"+valueSeconds;
    }
    if(valueMinutes>9){
        minutes.innerHTML=valueMinutes;
    }
    if(valueMinutes>60){
        valueMinutes=0;
        minutes.innerHTML="0"+valueMinutes;
    }
}

buttonStart.addEventListener("click",swStart);
buttonStop.addEventListener("click",swStop);
buttonReset.addEventListener("click",swReset);
