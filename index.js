const start = document.getElementById("start")
const  stop = document.getElementById("stop")
const  reset= document.getElementById("reset")
const  timer= document.querySelector(".timer")

let interval;
time_left= 1500; //25 min
function update(){
    let minutes=Math.floor(time_left /60);
    let seconds =time_left % 60;
    let formattedTime = `${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`;
   
    timer.innerHTML = formattedTime;
}
function startTimer(){  
    
    interval = setInterval(() => {//setInterval() method repeats a block of code at every given timing event.
        
        time_left--; 
        update();
        if (time_left === 0){
            alert("Time's up!");
            clearInterval(interval);
            time_left=1500;
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(interval);
    update();
}

function resetTimer(){
    clearInterval(interval);
    time_left=1500;
    update();
}

start.addEventListener("click",startTimer);
stop.addEventListener("click",stopTimer);
reset.addEventListener("click",resetTimer);