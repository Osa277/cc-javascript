let topics = document.getElementsByTagName('h2');
let popup = document.getElementsByClassName('pop-up');
// console.log(topics);
console.log(popup[0].children[0]);
console.log(popup);
for (let i = 0; i < 3; i++) {
    topics[i].addEventListener('click', function () {
        // popup[i].style.display = 'block';

    });
    popup[i].children[0].addEventListener('click', function () {
        // popup[i].style.display = 'none';
    });
}
let nigeria = document.getElementById('Ft');
// console.log(Ft);
let trig = true;
nigeria.addEventListener('click',function (){
    let lorem = document.getElementById('loremm');
    
    if (trig === true){
        lorem.style.display='block';
        trig = false;
    } else {
        lorem.style.display='none';
        trig = true;
    }
     
});
