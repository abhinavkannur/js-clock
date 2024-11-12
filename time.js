function updateClock(){
  const now=new Date();
  const hours=now.getHours().toString().padStart(2,0);
  const minutes=now.getMinutes().toString().padStart(2,0);
  const meridem=hours>=12?"PM":"AM";
  const seconds=now.getSeconds().toString().padStart(2,0);;
  const timeString=`${hours}:${minutes}:${seconds} ${meridem}`;
   document.getElementById("clock-container").textContent=timeString;

}

updateClock();
setInterval(updateClock,1000);