jQuery(document).ready(function($){
	var cartWrapper = $('.cd-cart-container');
	var productId = 0;

//___________________________________________ Function for displaying the content on condition that the cart isn't empty--hence it's viscible

    if( cartWrapper.length > 0 ) {
        //store jQuery objects
		var cartBody = cartWrapper.find('.body')
		var cartList = cartBody.find('ul').eq(0);
		var cartTotal = cartWrapper.find('.checkout').find('span');
		var cartTrigger = cartWrapper.children('.cd-cart-trigger');
        var cartCount = cartTrigger.children('.count')
//______ The individual items that partain to this project using unique identifiers (IDs in this case)
        var addToCartBtn1 = $('#black_Shirt');
		var addToCartBtn2 = $('#grey_Pants');
		var addToCartBtn3 = $('#dark_Bag');
		var addToCartBtn4 = $('#green-giaket');
		var addToCartBtn5 = $('#hiking-shoe');
        var addToCartBtn6 = $('#indigo-female-shirt');
//______ End of items ...
		var undo = cartWrapper.find('.undo');
        var undoTimeoutId;
        
//______add the products to cart for each items listed
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
        
 //______open/close cart ----------------------------- This is innitially triggered when you add an item to the cart - making the cart viscible

		cartTrigger.on('click', function(event){
			event.preventDefault();
			toggleCart();
        });
        
 //______close cart when clicking on the .cd-cart-container::before (bg layer)
		cartWrapper.on('click', function(event){
			if( $(event.target).is($(this)) ) toggleCart(true);
		});

//_______delete an item from the cart followed by an update function below it after deletion
		cartList.on('click', '.delete-item', function(event){
			event.preventDefault();
			removeProduct($(event.target).parents('.product'));
        });
        
//_______update item quantity
		cartList.on('change', 'select', function(event){
			quickUpdateCart();
        });
        
//_______reinsert item deleted from the cart
		undo.on('click', 'a', function(event){
			clearInterval(undoTimeoutId);
			event.preventDefault();
			cartList.find('.deleted').addClass('undo-deleted').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
				$(this).off('webkitAnimationEnd oanimationend msAnimationEnd animationend').removeClass('deleted undo-deleted').removeAttr('style');
				quickUpdateCart();
			});
			undo.removeClass('visible');
        });
        
    }

// -----------Define the cart close and open fuction called the the `cartTrigger` whose click listener prompts this function

    function toggleCart(bool) {
		var cartIsOpen = ( typeof bool === 'undefined' ) ? cartWrapper.hasClass('cart-open') : bool;
		
		if( cartIsOpen ) {
			cartWrapper.removeClass('cart-open');
			//reset undo
			clearInterval(undoTimeoutId);
			undo.removeClass('visible');
			cartList.find('.deleted').remove();

			setTimeout(function(){
				cartBody.scrollTop(0);
				//check if cart empty to hide it
				if( Number(cartCount.find('li').eq(0).text()) == 0) cartWrapper.addClass('empty');
			}, 500);
		} else {
			cartWrapper.addClass('cart-open');
		}
	}


//_______________________Define each function called in the case of the click event I have defined above which subsequently identify each item....

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

// ____________________________________________The details pertaining to each item/product defined in the html page...
    
    function addProduct1() {
        //you can insert an item with the selected product information
        //replace productId, productName, price and url with your custom product info (incase you want to test)
		productId = productId + 1;
		var productAdded = $('<li class="product"> <div class="product-image"><a href="#0"><img src="css/assets/products/tshirt.png" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Black Shirt</a></h3><span class="price">$10.00</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-'+ productId +'">Qty</label><span class="select"><select id="cd-product-'+ productId +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
		cartList.prepend(productAdded);
	}

	function addProduct2() {
		//you can insert an item with the selected product information
        //replace productId, productName, price and url with your custom product info (incase you want to test)
		productId = productId + 1;
		var productAdded = $('<li class="product"> <div class="product-image"><a href="#0"><img src="css/assets/products/pants.png" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Brown Pants</a></h3><span class="price">$53.00</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-'+ productId +'">Qty</label><span class="select"><select id="cd-product-'+ productId +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
		cartList.prepend(productAdded);
	}

	function addProduct3() {
		//you can insert an item with the selected product information
        //replace productId, productName, price and url with your custom product info (incase you want to test)
		productId = productId + 1;
		var productAdded = $('<li class="product"> <div class="product-image"><a href="#0"><img src="css/assets/products/backpack.png" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Grey Bag</a></h3><span class="price">$33.00</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-'+ productId +'">Qty</label><span class="select"><select id="cd-product-'+ productId +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
		cartList.prepend(productAdded);
	}

	function addProduct4() {
		//you can insert an item with the selected product information
        //replace productId, productName, price and url with your custom product info (incase you want to test)
		productId = productId + 1;
		var productAdded = $('<li class="product"> <div class="product-image"><a href="#0"><img src="css/assets/products/giacket.png" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Green Jacket</a></h3><span class="price">$60.00</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-'+ productId +'">Qty</label><span class="select"><select id="cd-product-'+ productId +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
		cartList.prepend(productAdded);
	}

	function addProduct5() {
		//you can insert an item with the selected product information
        //replace productId, productName, price and url with your custom product info (incase you want to test)
		productId = productId + 1;
		var productAdded = $('<li class="product"> <div class="product-image"><a href="#0"><img src="css/assets/products/trekkingshoes.png" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Hiking Shoes</a></h3><span class="price">$80.00</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-'+ productId +'">Qty</label><span class="select"><select id="cd-product-'+ productId +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
		cartList.prepend(productAdded);
	}

	function addProduct6() {
		//you can insert an item with the selected product information
        //replace productId, productName, price and url with your custom product info (incase you want to test)
		productId = productId + 1;
		var productAdded = $('<li class="product"> <div class="product-image"><a href="#0"><img src="css/assets/products/tshirt_ladies.png" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Female Top Indigo</a></h3><span class="price">$33.00</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-'+ productId +'">Qty</label><span class="select"><select id="cd-product-'+ productId +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
		cartList.prepend(productAdded);
    }
//_________________________________Defined the function called in the click event `cartList` in the `if-statement` that calls the cart
//  This function takes the products class as a parameter whose variable I have defined in this java file as `product`.
//  After deletion the product `Total` count is updated and the checkout price just after deletion ....

    function removeProduct(product) {
		clearInterval(undoTimeoutId);
		cartList.find('.deleted').remove();
		
		var topPosition = product.offset().top - cartBody.children('ul').offset().top ,
			productQuantity = Number(product.find('.quantity').find('select').val()),
			productTotPrice = Number(product.find('.price').text().replace('$', '')) * productQuantity;
		
		product.css('top', topPosition+'px').addClass('deleted');

		//update items count + total price
		updateCartTotal(productTotPrice, false);
		updateCartCount(true, -productQuantity);
		undo.addClass('visible');

		//wait 8sec before completely remove the item
		undoTimeoutId = setTimeout(function(){
			undo.removeClass('visible');
			cartList.find('.deleted').remove();
		}, 8000);
    }

//_____________________Follow up update of quantity and price after deletion of items above.  

    function quickUpdateCart() {
		var quantity = 0;
		var price = 0;
		
		cartList.children('li:not(.deleted)').each(function(){
			var singleQuantity = Number($(this).find('select').val());
			quantity = quantity + singleQuantity;
			price = price + singleQuantity*Number($(this).find('.price').text().replace('$', ''));
		});

		cartTotal.text(price.toFixed(2));
		cartCount.find('li').eq(0).text(quantity);
		cartCount.find('li').eq(1).text(quantity+1);
    }
    
// _____________This function is called every time you click on an "ADD TO CART" icon which adds an item to the list 
// by checking if it was already available in the cart and adding to the count (DEFINED ABOVE) if already there

    function updateCartCount(emptyCart, quantity) {
		if( typeof quantity === 'undefined' ) {
			var actual = Number(cartCount.find('li').eq(0).text()) + 1;
			var next = actual + 1;
			
			if( emptyCart ) {
				cartCount.find('li').eq(0).text(actual);
				cartCount.find('li').eq(1).text(next);
			} else {
				cartCount.addClass('update-count');

				setTimeout(function() {
					cartCount.find('li').eq(0).text(actual);
				}, 150);

				setTimeout(function() {
					cartCount.removeClass('update-count');
				}, 200);

				setTimeout(function() {
					cartCount.find('li').eq(1).text(next);
				}, 230);
			}
		} else {
			var actual = Number(cartCount.find('li').eq(0).text()) + quantity;
			var next = actual + 1;
			
			cartCount.find('li').eq(0).text(actual);
			cartCount.find('li').eq(1).text(next);
		}
    }

//__________ This takes the price variable and the condition of whether the cart is empty adds the total prices on the list 
// and converts the result to text.....
    
    function updateCartTotal(price, bool) {
		bool ? cartTotal.text( (Number(cartTotal.text()) + Number(price)).toFixed(2) )  : cartTotal.text( (Number(cartTotal.text()) - Number(price)).toFixed(2) );
	}
});