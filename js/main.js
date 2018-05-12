$(document).ready(function(){
    $('#gallery-button').click(function(e){
        e.preventDefault();
        if ($('#gallery-extra').is(':hidden')) {
            $('#gallery-extra').slideDown(1500);
            $('#gallery-button').text('VIEW LESS');
        } else if ($('#gallery-extra').is(':visible')) {
            $('#gallery-extra').slideUp(1500);
            $('#gallery-button').text('VIEW MORE');
        }
    });
});


$(window).on("scroll",function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop>90){
        $("#nav-menu").addClass("stick");
    }else{
        $("#nav-menu").removeClass("stick");
    }
});

$(window).scroll(function() {
    var height = $(window).scrollTop();
    var menuList = menu.classList;
    if(height  > 30) {    
        //console.log(menu);
        if(!menuList.contains('scroll')) {
            menuList.add('scroll');
            //console.log(menuList);
        }
    } else if(height <= 30) {
        if(menuList.contains('scroll')) {
            menuList.remove('scroll');
            //console.log(menuList);
        }
    }
});


$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top -0
        }, 1000);
    }
});