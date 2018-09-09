// Nav bar transition function. 
// Keeps the nav bar fixed as you scroll but avoids obstructing site content 

$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else{
        $('nav').removeClass('black');
    }
})