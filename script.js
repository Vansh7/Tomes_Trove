/*-----For Search Bar-----------------------------*/
$(document).on('click','.search',function(){
    $('.search-bar').addClass('search-bar-active')
});

$(document).on('click','.search-cancel',function(){
    $('.search-bar').removeClass('search-bar-active')
});
// for toggle
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.navigation').toggleClass('active')
    })
});
// for login signup form
$(document).on('click','.user,.already-account',function(){
    $('.form').addClass('login-active').removeClass('sign-up-active')
});

$(document).on('click','.sign-up-btn',function(){
    $('.form').addClass('sign-up-active').removeClass('login-active')
});

$(document).on('click','.form-cancel',function(){
    $('.form').removeClass('login-active').removeClass('sign-up-active')
});
// for css
$(document).ready(function(){
    $('.dropdown .dropdown-menu li').mouseenter(function(){
        $(this).css("background-color", "#f76b6a");
    });
    $('.dropdown .dropdown-menu li').mouseleave(function(){
        $(this).css("background-color", "#272727");
    });
});
// for home page slider
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 100,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
// jee slider
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
// footer
  document.querySelector("#redirect")
  .addEventListener('click',()=>{
     window.location.href="https://www.facebook.com/"
 });
 document.querySelector("#redirect2")
  .addEventListener('click',()=>{
     window.location.href="https://www.twitter.com/"
 });
 document.querySelector("#redirect3")
  .addEventListener('click',()=>{
     window.location.href="https://www.instagram.com/"
 });
 document.querySelector("#redirect4")
  .addEventListener('click',()=>{
     window.location.href="https://www.youtube.com/"
 });
 document.querySelector("#redirect5")
  .addEventListener('click',()=>{
    window.location.href="index.html";
 });
// for FAQs
 var acc=document.getElementsByClassName('accordian');
 var i;
 var len=acc.length;
 for (i=0;i<len;i++) {
   acc[i].addEventListener('click',function(){
     this.classList.toggle('active');
     var panel = this.nextElementSibling;
     if(panel.style.maxHeight) {
       panel.style.maxHeight=null;
     }else {
       panel.style.maxHeight=panel.scrollHeight+ 'px'
     }
   });
 };
// home slider-2
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
