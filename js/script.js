$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    fade: true, 
    prevArrow: '<i class="fas fa-arrow-circle-left prev"></i>',
    nextArrow: '<i class="fas fa-arrow-circle-right next"></i>',
  });



  // =========venubox=====
  $('.venobox1').venobox(); 

// ===========service slider start ==============
  $('.service-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    vertical:true,
    centerMode:true,
    centerPadding:"0",
    infinite:true,
    prevArrow: '<i class="fas fa-chevron-up prev-aro"></i>',
    nextArrow: '<i class="fas fa-chevron-down next-aro"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical:false,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical:false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
// ===========service slider End ==============


  // ===========Testimonial slider start ==============


  $('.slider-item').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical:true,
    autoplay:true,
    centerMode:true,
    centerPadding:"0",
    asNavFor:".details-slider",
    prevArrow: '<i class="fas fa-chevron-up top-aro"></i>',
    nextArrow: '<i class="fas fa-chevron-down bottom-aro"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          vertical:false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
         vertical:false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



    $('.details-slider').slick({
      dots: false,
      infinite: true,
      arrows:false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical:true,
      asNavFor:".slider-item",
    });
  
    // ===========Testimonial slider End ==============

    $('.counter').counterUp({
      delay: 10,
      time: 1000
  });


  $('.venobox2').venobox(); 

 
  // sponsor slider start
  $('.sponsor-slider').slick({
    dots: false,
    infinite: true,
    arrows:false,
    autoplay:true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding:"0",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  
  $(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('nav').addClass('fixed-header');    
    }
    else {
        $('nav').removeClass('fixed-header');  
    }
    // scroll button show and hide
    if ($(window).scrollTop() >= 500) {
      $('.btt').fadeIn();    
  }
  else {
    $('.btt').fadeOut();  
}
});

// When the user clicks on the button, scroll to the top of the body or html
$(".btt").click(function(){
  $("html,body").animate({
    scrollTop:0
  },100)
})

//  when user click to the search icon then search-box show and start search
$(".search").click(function(){
  $(".search-div").slideDown()
})

$(".cross").click(function(){
  $(".search-div").slideUp()
})

$(".btt").click(function(){
  $("html,body").animate({
    scrollTop:0
  },100)
})




// //Get the button:
// mybutton = document.getElementById("myBtn");

// // When the user scrolls down 200px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
