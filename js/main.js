jQuery("#responsive_headline").fitText(1.2, { minFontSize: '15px', maxFontSize: '65px' });
new WOW().init();
// $(document).ready(function() {
// 	$('.mySelector').funnyText();
// });
$('.up').css('opacity' , '0')
$(document).ready(function(){

    $(window).scroll(function(){
        let x = $(window).scrollTop();
        if (x > 550) {
            $('.up').css('opacity' , '1')
        }else{
            $('.up').css('opacity' , '0')
        }
    })

})