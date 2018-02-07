/* Mobile nav - starts here: */

var navIcon1 = document.getElementById("nav-icon1");
var navMenuBar = document.getElementById("nav-menu-bar");
navIcon1.addEventListener("click", function() {
    this.classList.toggle("open");
    navMenuBar.classList.toggle("nav_menu_bar_visible");
});

/*Activ nav*/
// (function() {
//     var nav = document.getElementById('nav-menu-bar'),
//         anchor = nav.getElementsByTagName('li'),
//         current = window.location.pathname.split('/')[1];
//         console.log(ancor);
//         for (var i = 0; i < anchor.length; i++) {
//         if(anchor[i].href == current) {
//             anchor[i].className = "active";
//         }
//     }
// })();


/* SLIDER - starts here: */
function openModal() {
  document.getElementById('myModal').style.display = "flex";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

var nextBtn = document.getElementById("plus-slides-prev");

nextBtn.addEventListener("click", plusSlides(n));



function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("description");
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
  captionText.innerHTML = dots[slideIndex-1].innerHTML;
}
