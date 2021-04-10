$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });


    // Scroll Up
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
  
        if($(window).scrollTop() > 0){
          $('.scrollup').show();
        }else{
          $('.scrollup').hide();
        }

        $('section').each(function(){

            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });

    });

    // Smooth Scroll
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,

        },
        500,
        'linear'
        )
    })
});