const animals = ['tiger', 'lion', 'monkey', 'goat', 'fish', 'turkey'];
let input = prompt('Type the name of the animal');
let searchText = new RegExp(input, 'i');
for (let i = 0; i<animals.length; i++) {
    if (animals[i].search(searchText)){
        alert('Yes' + input + 'is here');
     } else{
        alert('Animal not found');
    }
}