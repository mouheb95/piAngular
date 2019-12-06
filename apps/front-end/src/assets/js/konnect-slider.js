(function($) {
    "use strict"; // Start of use strict

    $(window).on('load', function() {
        var $allSlides, $flexslider;
        if (jQuery().flexslider) {
            $flexslider = $('.flexslider');
            $allSlides = $flexslider.find('.item');
            $flexslider.addClass("fade-loading");
            return $('.flexslider').flexslider({
                animation: 'fade',
                pauseOnHover: true,
                slideshowSpeed: 5000,
                animationSpeed: 400,
                prevText: '',
                nextText: '',
                before: function(slider) {
                    var $activeSlide;
                    $activeSlide = $flexslider.find('.flex-active-slide');
                    if ($activeSlide.index() === $allSlides.length - 1) {
                        $allSlides.eq(0).find('.animate').children().addClass("animate").removeClass("animated");
                        $allSlides.not('.flex-active-slide').find('.animate').children().addClass("animate").removeClass("animated");
                    } else {
                        $allSlides.not('.flex-active-slide').find('.animate').children().addClass("animate").removeClass("animated");
                    }
                    return setTimeout((function() {
                        return $allSlides.eq(slider.animatingTo).find('.animate').children().addClass("animated").removeClass("animate");
                    }), 50);
                }
            });
        }
    });

})(jQuery);