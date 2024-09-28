
function updateclock(){
    const now=new Date();
    let hours=now.getHours().toString().padStart(2,0);
    let minutes=now.getMinutes().toString().padStart(2,0);
    let seconds=now.getSeconds().toString().padStart(2,0);

    
    hours=hours<10?'0'+hours:hours;
    minutes=minutes<10?'0'+minutes:minutes;
    seconds=seconds<10?'0'+seconds:seconds;




const timeString=`${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent=timeString;
}

updateclock();
setInterval(updateclock,1000);