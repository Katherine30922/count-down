const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
const weekdays=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

const deadline=document.querySelector(".deadline"),
items=document.querySelectorAll('.deadline-format h4'),
info=document.querySelector('.info');

let futureDate=new Date(2023,3,21,18);

let Weekday=weekdays[futureDate.getDay()];
const year=futureDate.getFullYear();
let month=months[futureDate.getMonth()];//get a number 3
const date=futureDate.getDate();
const hour=futureDate.getHours();
const minute=futureDate.getMinutes();
const second=futureDate.getSeconds();

info.textContent=`Midterm Exam ends on ${Weekday}, ${year} ${month} ${date}th ${hour} :${minute}${second} pm`;

//future time in ms
const futureTime=futureDate.getTime();

// 1s=1000ms
// 1m=60s
// 1h=60m
// 1d=24h
function getRemainingTime(){
    const today=new Date().getTime();
    const t=futureTime-today;

    const oneDay=24*60*60*1000;
    const oneHour=60*60*1000;
    const oneMin=60*1000;

    let remainDay=Math.floor(t/oneDay);
    let remainHour=Math.floor((t%oneDay)/oneHour);
    let remainMin=Math.floor((t%oneHour)/oneMin);
    let remainSec=Math.floor((t%oneMin)/1000);

    //set value array 
    const value=[remainDay,remainHour,remainMin,remainSec];
    function format(item){
        if(item<10){//if time<10, add `0` in front of number
            return item=`0${item}`;
        }
        return item;
    } 
    items.forEach(function(item,index){
        item.innerHTML=format(value[index]);//assign each parameter to html repectively
    });
    
    if(t<0){
        clearInterval(countdown);
        deadline.innerHTML=`sorry, this event has expired.`
    }
}
let countdown=setInterval(getRemainingTime,1000);

getRemainingTime();

//if setting time is past
