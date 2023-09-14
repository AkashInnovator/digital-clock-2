clockFrame=document.querySelector('.clock');
function clock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let text="AM"
    if(h>12){
        h=h-12;
        text="PM";
    }
    else if(h==0){
        h=12;
        text="AM"
    }
    h=h<10?'0'+h:h
    m=m<10?'0'+m:m
    s=s<10?'0'+s:s
    clockFrame.innerHTML=`${h} : ${m} : ${s} ${text}`;
    

}
clock();
setInterval(clock, 1000);
