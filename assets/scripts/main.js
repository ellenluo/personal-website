$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 2000);
});

$('.fixed-nav-bar li a').click(function() {
    $('.fixed-nav-bar li a').removeClass();
    $(this).addClass('active');
});
