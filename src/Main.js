// JavaScript Document

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("vedi");
}
function filterFunction2() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput2");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown2");
  a = div.getElementsByClassName("e");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    }
    else {
      a[i].style.display = "none";
    }
  }
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("vedi");
}
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByClassName("e");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    }
    else {
      a[i].style.display = "none";
    }
  }
}


jQuery(document).ready(function( $ ){
  $(".presi").click(function(e) {
    $('.pre-si').removeClass("pre-no");
  }
                   );
  $(".fbutton").click(function(e) {
    $('.k').removeClass("k");
    $('.t').removeClass("t");
  }
                     );
  $(".fbuttonx").click(function(e) {
    $('.d').removeClass("d");
    $('.y').removeClass("y");
  }
                      );
  $(".Abutton").click(function(e) {
    $('.b').removeClass("bb");
    $('.c').addClass("cc");
    $('.a').removeClass("aa");
    $ ('.waz').addClass("attivo");
    $('.inf').removeClass("attivo");
    $('.map').removeClass("attivo");
  }
                     );
  $(".Bbutton").click(function(e) {
    $('.b').addClass("bb");
    $('.c').addClass("cc");
    $('.a').addClass("aa");
    $
    ('.waz').removeClass("attivo");
    $('.inf').addClass("attivo");
    $('.map').removeClass("attivo");
  }
                     );
  $(".Cbutton").click(function(e) {
    $('.b').removeClass("bb");
    $('.c').removeClass("cc");
    $('.a').addClass("aa");
    $ ('.waz').removeClass("attivo");
    $('.inf').removeClass("attivo");
    $('.map').addClass("attivo");
  }
       );             
  if ($(window).width() > 514) {
    $('.barile').removeClass('barile');
  } 
  if ($(window).width() > 514) {
    $('.barile-filtro').removeClass('barile-filtro');
  } 
  $(".barile").html($(".bar").sort(function(){
    return Math.random()-0.5;
  } )); 
                                 
  $('#site-logo-inner img').addClass('scompa');

                    
                                    });
  
 $('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

 



$('.close').click(function() {
  $('.cookie-banner').hide(); 
});
if(localStorage.getItem('cookieSeen') != 'shown'){
    $(".cookie-banner").delay(2000).show();
    localStorage.setItem('cookieSeen','shown')
}

 $('.flip-button').click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {$('.fre').addClass("anim2"); $('.fre').removeClass("anim");		  
     // odd clicks
  } else {$('.fre').addClass("anim");$('.fre').removeClass("anim2");
  }
  $(this).data("clicks", !clicks);
});
 $('.flip-button h3').after("<div class='fre'>▲</div>"); 

