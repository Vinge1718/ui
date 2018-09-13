jQuery(document).ready(function($){
    var cartWrapper = $('.cd-cart-container');

    // Function for displaying the content on condition that the cart isn't empty--hence it's viscible

    if( cartWrapper.length > 0 ) {
        //store jQuery objects
		var cartBody = cartWrapper.find('.body')
		var cartList = cartBody.find('ul').eq(0);
		var cartTotal = cartWrapper.find('.checkout').find('span');
		var cartTrigger = cartWrapper.children('.cd-cart-trigger');
        var cartCount = cartTrigger.children('.count')
        // The individual items that partain to this project
        var addToCartBtn1 = $('#black_Shirt');
		var addToCartBtn2 = $('#grey_Pants');
		var addToCartBtn3 = $('#dark_Bag');
		var addToCartBtn4 = $('#green-giaket');
		var addToCartBtn5 = $('#hiking-shoe');
        var addToCartBtn6 = $('#indigo-female-shirt');
        // End of items ...
		var undo = cartWrapper.find('.undo');
		var undoTimeoutId;
    }
});