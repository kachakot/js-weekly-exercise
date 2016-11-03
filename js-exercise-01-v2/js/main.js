var menuItems = document.querySelector(".js-trigger"),
    items = menuItems.querySelectorAll("a"), // names of categories array
    content = document.querySelector(".js-content"),
    category = content.querySelectorAll("li"); // categories array

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function(e) {
        e.preventDefault();
        for(var j = 0; j < items.length; j++ ) {
            items[j].classList.remove("active");
        }
        var clickedItem = this;
        clickedItem.classList.add('active');
        var currentCategory = clickedItem.innerHTML.replace(' ','-');
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