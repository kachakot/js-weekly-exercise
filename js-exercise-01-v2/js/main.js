/* global document */
var menuItems = document.querySelector('.js-trigger'),
    items = menuItems.querySelectorAll('a'), // names of categories array
    content = document.querySelector('.js-content'),
    category = content.querySelectorAll('li'), // categories array
    currentCategory,
    i,
    j,
    k,
    l;

for (i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function (e) {
        e.preventDefault();
        for  (j = 0; j < items.length; j++ ) {
            items[j].classList.remove('active');
        }
        var clickedItem = this;
        clickedItem.classList.add('active');
        currentCategory = clickedItem.innerHTML.replace(' ', '-');
        for (k = 0; k < category.length; k++) {
            if (category[k].innerHTML.indexOf(currentCategory) <= 0 ) {
                category[k].classList.add('hidden');
            }
            category[k].classList.remove('hidden');
        }
        for (l = 0; l < category.length; l++) {
            if (currentCategory === 'All') {
                category[l].classList.remove('hidden');
            }
        }
    });
}
