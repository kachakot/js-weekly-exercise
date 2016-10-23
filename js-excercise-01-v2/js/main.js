var menuItems = document.querySelector(".js-trigger");
var item = menuItems.querySelector("a");
var items = menuItems.querySelectorAll("a"); //tablica nazw kategorii
var content = document.querySelector(".js-content");
var category = content.querySelectorAll("li"); //tablica kategorii

for (var i = 0; i < items.length; i++){
    items[i].addEventListener('click', function(e){
        for(var j = 0; j < items.length; j++ ) {
            items[j].classList.remove("active");
        }
        var clickedItem = this;
        e.preventDefault();
        clickedItem.classList.add('active');
        var currentCategory = clickedItem.innerHTML.replace(' ','-');
        console.log(currentCategory);
        for(var k = 0; k < category.length; k++) {
            if(category[k].innerHTML.indexOf(currentCategory) <=0 ) {
                category[k].classList.add('hidden');
            }
            else {
                category[k].classList.remove('hidden');
            }
        }
        for(var l = 0; l < category.length; l++) {
            if (currentCategory == 'All') {
                category[l].classList.remove('hidden');
            }
        }
    });
}
var menuItems = document.querySelector(".js-trigger");
var items = menuItems.querySelectorAll("a"); //tablica nazw kategorii
var content = document.querySelector(".js-content");
var category = content.querySelectorAll("li"); //tablica kategorii

for (var i = 0; i < items.length; i++){
    items[i].addEventListener('click', function(e){
        for(var j = 0; j < items.length; j++ ) {
            items[j].classList.remove("active");
        }
        var clickedItem = this;
        e.preventDefault();
        clickedItem.classList.add('active');
        var currentCategory = clickedItem.innerHTML.replace(' ','-');
        console.log(currentCategory);
        for(var k = 0; k < category.length; k++) {
            if(category[k].innerHTML.indexOf(currentCategory) <=0 ) {
                category[k].classList.add('hidden');
            }
            else {
                category[k].classList.remove('hidden');
            }
        }
        for(var l = 0; l < category.length; l++) {
            if (currentCategory == 'All') {
                category[l].classList.remove('hidden');
            }
        }
    });
}
