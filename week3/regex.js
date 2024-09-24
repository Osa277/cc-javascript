let text ='visit abuja Code Campus'
let n = text.search('Code Campus');
// alert(n)
let a = text.search(/code Campus/);
// alert (a);
let b = text.search(/code Campus/i);
// alert(b);
//replace Method
let text2 ='Visit Abuja Code Campus';
let c = text2.replace(/code campus/i,'Banex');
// alert(c);
//Modifier:g
let song ='Twinkle Twinkle little star';
let operation1 = song.replace(/twinkle/,'shiny');
let operation2 = song.replace(/twinkle/i,'shiny');
let operation3 = song.replace(/twinkle/ig,'shiny');
alert(operation1)
alert(operation2)
alert(operation3)