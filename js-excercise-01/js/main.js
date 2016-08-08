$(document).ready(function() {
    var $categories = $('.js-trigger');
    var $item = $categories.find('li a');
    var $content = $('.js-content');
    var $category = $content.find('li');

    $item.on('click', function() {
    	$categories.each(function(index) {
    		$item.removeClass('active');
    	});
    	$(this).toggleClass('active');
        var currentCategory = ($(this).text().replace(' ', '-'));
        $category.each(function(index) {
            if ($(this).text().indexOf(currentCategory) <= 0) {
                $(this).hide();
                
            } else {
                $(this).show();     
            }
        });
        if (currentCategory == 'All') {
            $category.show();
        }
    })
})