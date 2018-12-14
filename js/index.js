(function($) {
  "use strict"; // enforces syntax

  // scrolling using jQuery
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Bootstrp scrollspy used to update navbar
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery);

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

$(document).ready(function(){

$(".project-filter").click(function(){
	var value = $(this).attr('data-filter');
	if(value == "all")
	{ 
		$('.filter').show('1000');
	}
	else
	{ 
		$(".filter").not('.'+value).hide('3000');
		$('.filter').filter('.'+value).show('3000');
	}
});

if ($(".project-filter").removeClass("active")) {
  $(this).removeClass("active");
}
$(this).addClass("active");
});

// SKILLS & Skills
$(function () {
	$('.counter').counterUp({
		delay: 5,
		time: 1000
	});

});

$(document).ready(function(){
	$('button').click(function(){
		$('.alert').show()
	}) 
});
