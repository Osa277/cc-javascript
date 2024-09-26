let clock =document.getElementsByTagName('h1')[0];
// console.log(clock);
clock.style.fontSize='180px'
// clock.style.border='solid 5px black'
clock.style.borderRadius='20px'

function displayTime(){
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let Second = date.getSeconds();
let timeOfDay = 'AM';
if (hour>12){
    hour ='0'+(hour-12);
    timeOfDay='PM';
}
if (minute<10){
    minute='0'+ minute;
}   
if  (Second<10){
    Second='0'+Second;
} 
clock.innerHTML=hour+':'+minute+':'+Second+timeOfDay;
}
setInterval(displayTime,1000)