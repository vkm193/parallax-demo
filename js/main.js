$(function(){
    $(window).scroll(function() {
        // 100 = The point you would like to fade the nav in.
          
            if ($(window).scrollTop() > 200 ){
                 $('.menu').addClass('show-menu-background');
            
          } else {
            $('.menu').removeClass('show-menu-background');
            
             };   	
        });
        $(".mobile-menu").click(function(){
            $(".mobile-menu-item").toggle();
        });
});