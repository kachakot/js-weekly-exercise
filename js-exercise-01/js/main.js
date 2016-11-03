$(document).ready(function() {
	var $menuItems = $(".js-trigger"),
		$item = $menuItems.find("li a"),
		$category = $(".js-content").find("li");

	$item.on("click", function(e) {
		e.preventDefault();
		$menuItems.each(function() {
			$item.removeClass("active");
		});
		var clickedItem = $(this);
		clickedItem.toggleClass("active");
		var currentCategory = clickedItem.text().replace(" ", "-");
		$category.each(function() {
			var categoryItem = $(this);
			if (categoryItem.text().indexOf(currentCategory) <= 0) {
				categoryItem.addClass("hidden");
			}
			else {
				categoryItem.removeClass("hidden");
			}
		});
		if (currentCategory == "All") {
			$category.removeClass("hidden");
		}
	});
});