let heading = document.getElementById('main-heading');
console.log(heading.innerHTML);
heading.innerHTML = "JavaScript"
console.log(heading.innerHTML);
let sub = document.getElementsByClassName('sub-heading');
for (let i = 0; i < sub.length; i++) {
    sub[i].innerHTML = 'New text'
    // console.log(sub[i]);
}
// sub[1].innerHTML="topic No.2";

let paragraph = document.getElementsByTagName('p')
console.log(paragraph)
let thirdHeading = document.createElement('h2')
thirdHeading.innerHTML = 'third topic';
paragraph[1].appendChild(thirdHeading)
heading.style.color = 'green';
heading.style.backgroundColor = 'blue'
heading.style.textAlign = 'center'
heading.style.fontSize = '40px';
sub[1].style.color = 'yellow';
function displayParagraph() {
    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].style.display = 'block';
    }
}
// setTimeout(displayParagraph,3000);
let switch1 = false;
function switchParagraph() {
    if (switch1 === false) {
        for (let i = 0; i < paragraph.length; i++) {
            paragraph[i].style.display = 'block';
        }
        switch1 = true;
    } else {
        for (let i = 0; i < paragraph.length; i++) {
            paragraph[i].style.display = 'none';
        }
        switch1 = false;
    }
}
setInterval(switchParagraph, 1000);



