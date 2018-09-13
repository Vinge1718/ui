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
        // The individual items that partain to this project using unique identifiers (IDs in this case)
        var addToCartBtn1 = $('#black_Shirt');
		var addToCartBtn2 = $('#grey_Pants');
		var addToCartBtn3 = $('#dark_Bag');
		var addToCartBtn4 = $('#green-giaket');
		var addToCartBtn5 = $('#hiking-shoe');
        var addToCartBtn6 = $('#indigo-female-shirt');
        // End of items ...
		var undo = cartWrapper.find('.undo');
        var undoTimeoutId;
        
        //add the products to cart for each items listed
		addToCartBtn1.on('click', function(event){
			event.preventDefault();
			addToCart1($(this));
		});

		addToCartBtn2.on('click', function(event){
			event.preventDefault();
			addToCart2($(this));
		});

		addToCartBtn3.on('click', function(event){
			event.preventDefault();
			addToCart3($(this));
		});

		addToCartBtn4.on('click', function(event){
			event.preventDefault();
			addToCart4($(this));
		});

		addToCartBtn5.on('click', function(event){
			event.preventDefault();
			addToCart5($(this));
		});

		addToCartBtn6.on('click', function(event){
			event.preventDefault();
			addToCart6($(this));
		});

    }

    function addToCart1(trigger) {
		var cartIsEmpty = cartWrapper.hasClass('empty');
		//update cart product list
		addProduct1();
		//update number of items 
		updateCartCount(cartIsEmpty);
		//update total price
		updateCartTotal(trigger.data('price'), true);
		//show cart
		cartWrapper.removeClass('empty');
	}

	function addToCart2(trigger) {
		var cartIsEmpty = cartWrapper.hasClass('empty');
		//update cart product list
		addProduct2();
		//update number of items 
		updateCartCount(cartIsEmpty);
		//update total price
		updateCartTotal(trigger.data('price'), true);
		//show cart
		cartWrapper.removeClass('empty');
	}

	function addToCart3(trigger) {
		var cartIsEmpty = cartWrapper.hasClass('empty');
		//update cart product list
		addProduct3();
		//update number of items 
		updateCartCount(cartIsEmpty);
		//update total price
		updateCartTotal(trigger.data('price'), true);
		//show cart
		cartWrapper.removeClass('empty');
	}

	function addToCart4(trigger) {
		var cartIsEmpty = cartWrapper.hasClass('empty');
		//update cart product list
		addProduct4();
		//update number of items 
		updateCartCount(cartIsEmpty);
		//update total price
		updateCartTotal(trigger.data('price'), true);
		//show cart
		cartWrapper.removeClass('empty');
	}

	function addToCart5(trigger) {
		var cartIsEmpty = cartWrapper.hasClass('empty');
		//update cart product list
		addProduct5();
		//update number of items 
		updateCartCount(cartIsEmpty);
		//update total price
		updateCartTotal(trigger.data('price'), true);
		//show cart
		cartWrapper.removeClass('empty');
	}

	function addToCart6(trigger) {
		var cartIsEmpty = cartWrapper.hasClass('empty');
		//update cart product list
		addProduct6();
		//update number of items 
		updateCartCount(cartIsEmpty);
		//update total price
		updateCartTotal(trigger.data('price'), true);
		//show cart
		cartWrapper.removeClass('empty');
    }
    
});