let productItem = document.getElementsByClassName('item');
let popup = document.getElementsByClassName('item');
for (let i=0;i<productItem.length;i++){
    productItem[i].addEventListener('click',function(){
        let image = this. children[0].getAttribute('src');
        let productionName = this.children[1].innerHTML;
        let Price = this.children[2].innerHTML;
        let units =Math.trunc(Math.random()*5)

        popup.children[0].children[0].setAttribute('src',image);
    });
}
