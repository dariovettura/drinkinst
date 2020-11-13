
 jQuery(document).ready(function( $ ){
   $('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
	 $('nav a').click(function() {
  $('#overlay').removeClass('open');
		  $('.button_container').removeClass('active'); 
});
	$('.close').click(function() {
  $('.cookie-banner').hide(); 
});
if(localStorage.getItem('cookieSeen') != 'shown'){
    $(".cookie-banner").delay(2000).show();
    localStorage.setItem('cookieSeen','shown')
}
});
