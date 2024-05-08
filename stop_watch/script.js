window.onload=function(){
    var ms=document.querySelector("#milliseconds")
    var sec=document.querySelector("#second")
    var min=document.querySelector("#minute")
    var hr=document.querySelector("#hour")


    var btnstart=document.querySelector("#start")
    var btnstop=document.querySelector("#stop")
    var btnReset=document.querySelector("#restart")



    var interval;
    var second=0;
    var milliseconds=0;
    var minute=0;
    var hour=0;



    ms.innerHTML="00";
    sec.innerHTML=":00";
    min.innerHTML=":00";
    hr.innerHTML="00";


   btnstart.onclick=function(){
    clearInterval(interval);
    interval=setInterval(start,10)
   }

   btnstop.onclick=function(){
    clearInterval(interval);
   }
   btnReset.onclick=function(){
    clearInterval(interval);
    milliseconds=0;
    second=0;
    minute=0;
    hour=0;



    ms.innerHTML = milliseconds + "0";
    sec.innerHTML = ":" + second + "0";
    min.innerHTML = ":" + minute + "0";
    hr.innerHTML = hour + "0";



   }


   function start(){
    milliseconds++;
    if(milliseconds<9){
        ms.innerHTML="0"+milliseconds;

    }
    if(milliseconds>9){
        ms.innerHTML=milliseconds;
        
    }
    if(milliseconds>99){
        second++;
        sec.innerHTML=":0"+second;
        milliseconds=0;
        ms.innerHTML="0"+0;     
    }


    if (second > 9){
        sec.innerHTML = ":" + second;
      } 
      if (second > 58) {
        minute++;
        min.innerHTML = ":0" + minute;
        second = 0;
        sec.innerHTML = ":0" + second;
    }
    if (minute > 9){
        min.innerHTML = ":" + minute;
      } 
    if (minute > 58) {
        hour++;
        hr.innerHTML = "0" + hour;
        minute = 0;
        min .innerHTML = ":0" + minute;
    }
    if (hour > 9) {
        hr.innerHTML = hour;
    }


   }
    
}