
var element = $('.follow-scroll'), originalY = element.offset().top;

var topMargin = 20;
element.css('position', 'relative');

element[0].addEventListener("playing", function() {
    startFloating();
});

element[0].addEventListener("pause", function() {
    stopFloating();
});


function startFloating () {
    $(window).on('scroll', function(event) {

        var scrollTop = $(window).scrollTop();

        element.stop(false, false).animate({
                top: scrollTop < originalY ? 0 : scrollTop - originalY + topMargin
        }, 300);    
    });
}

// Reset your element
function stopFloating () {
    $(window).on('scroll', function(event) {

        var scrollTop = 0;

        element.stop(false, false).animate({
                top: scrollTop < originalY ? 0 : scrollTop - originalY + topMargin
        }, 300);    
    });
}