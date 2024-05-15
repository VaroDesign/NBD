jQuery(document).ready(function($){
    $(window).on("load", function(){
        $('.nbd-lookbook__grid').masonry({
            itemSelector: '.nbd-lookbook__grid-item',
            percentPosition: true,
            columnWidth: '.nbd-lookbook__grid-item',
            gutter: 14
        });
    });


    $('.nbd-lookbook__grid-item a').on('openstart.fluidbox', function() {
        $('body').addClass('no-scroll');
        $('.nbdc-header').css('z-index', '999');
    }).on('closeend.fluidbox', function() {
        $('body').removeClass('no-scroll');
        $('.nbdc-header').css('z-index', '9999');
    }).fluidbox({
        maxHeight: 900,
    });
});