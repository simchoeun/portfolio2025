$(function(){
    // swipe
    var swiper = new Swiper(".mySwiper", {
        effect: 'fade',
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            slideChange: function () {
                var swipeIdx = swiper.realIndex + 1;

                console.log(swipeIdx)

                if (swipeIdx == 3  || swipeIdx == 4 || swipeIdx == 6 || swipeIdx == 8 || swipeIdx == 11 || swipeIdx == 13) {
                    $('.work .main-tit').css('text-shadow','0px 0px 20px rgba(0, 0, 0, 0.8)');
                } else {
                    $('.work .main-tit').css('text-shadow','0px 0px 20px rgba(255, 255, 255, 0.8)');
                }
            }
        }
    });

    //scroll
    $(window).on('scroll', function(e){
        $('.img .bg-img, .img-wrap .bg-img').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'width':'0'},700);
            }
            
        }); 
    });

    // modal
    var posY;
    $('.button.view').on('click', function(e){
        var buttonId = $(this).attr('id');
        posY = $(window).scrollTop();

        $('#modal-container').removeAttr('class').addClass('on');
        $('body').addClass('modal-active');
        $("body").css("top", -posY);

        // console.log(posY)
        
        $('#modal-container .modal-bg .modal').each(function (index, item) {
            if($(this).attr('id') == buttonId) {
                $('.modal').hide();
                $(this).show();
            }
        });

    });
    
    $('#modal-container').on('click', function(e){
        if($(e.target).parents('.modal').length < 1){
            $(this).addClass('out');
            $('body').removeClass('modal-active');
            posY = $(window).scrollTop(posY);
        }
    });
})