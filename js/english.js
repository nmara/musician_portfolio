AOS.init();
// stop audio if other is playing
document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);

// ---------Desktop nav-------------------
var navItems = document.getElementsByClassName('nav_menu_bar_item');
function removeActiveNav() {
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove("active");
    }
}
window.addEventListener("scroll", function() {
    var sections = document.getElementsByClassName('section');
    var breakPoints = [];
    for (var i = 0; i < sections.length; i++) {
        breakPoints.push((sections[i].offsetTop)-80);
    }
    for (var i = 0; i < sections.length; i++) {
        if(window.pageYOffset >= breakPoints[i] && window.pageYOffset < breakPoints[i+1]) {
            removeActiveNav();
            navItems[i].classList.add("active");
        } else if (i === (sections.length-1) && window.pageYOffset >= breakPoints[i]) {
            removeActiveNav();
            navItems[i].classList.add("active");
        }
    }
})

function correctNavScroll(el) {
    var sectionName = el.getAttribute("data-nav");
    var section = document.getElementById(sectionName);
    var position = section.offsetTop;
    var scrollDestination = position - 80;
    // window.scrollTo(0, scrollDestination);
    window.scrollTo({
        top: scrollDestination,
        left: 0,
        behavior: 'smooth'
    });
    if(window.innerWidth < 800) {
        navIcon1.classList.remove("open");
        navMenuBar.classList.toggle("nav_menu_bar_visible");
        var mobileNavBg = document.getElementById('nav-menu-bar-bg');
        mobileNavBg.classList.toggle("show-mobile-nav");
    }
}

// --------------Mobile nav------------
var navIcon1 = document.getElementById("nav-icon1");
var navMenuBar = document.getElementById("nav-menu-bar");
navIcon1.addEventListener("click", function() {
    this.classList.toggle("open");
    navMenuBar.classList.toggle("nav_menu_bar_visible");
    var mobileNavBg = document.getElementById('nav-menu-bar-bg');
    mobileNavBg.classList.toggle("show-mobile-nav");
})
//----------------Gallery overlayer-----------
function openModal() {
    document.getElementById('myModal').style.display = "flex";
    document.getElementById('main-nav').style.position = "static";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
    document.getElementById('main-nav').style.position = "fixed";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
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

  document.onkeydown = function(event) {
      var e = event || window.event;
      if(e.keyCode == '37') {
          plusSlides(-1);
      }
      else if (e.keyCode == '39') {
          plusSlides(1);
      }
      else if (e.keyCode == '27') {
          closeModal();
      }
  }
}
// ------------Event container---------------
var pastEvents = [];

// -------------Event constructor-----------
function SingleEvent(date, title, city, place, author, part, conductor, link) {
    this.date = date;
    this.title = title;
    this.city = city;
    this.place = place;
    this.author = author;
    this.part = part;
    this.conductor = conductor;
    this.link = link;
}

// --------------All events-------------
var singleEvent = new SingleEvent("April 12th 2013", "The Coronation of Poppea", "Warsaw", "Collegium Nobilum", "C.&nbsp;Monteverdi", "part: Seneka", "Lilianna Stawarz - music director", "http://www.encyklopediateatru.pl/przedstawienie/49419/koronacja-poppei");
pastEvents.push(singleEvent);
var singleEvent = new SingleEvent("April 12th 2014", "The Seven Last Words of Christ", "Gdańsk", "Gdański Festiwal Muzyczny", "J.&nbsp;Haydn", null, "Jan Łukaszewski - conductor", "http://polskichorkameralny.pl/doc_941.html");
pastEvents.push(singleEvent);
var singleEvent = new SingleEvent("March 23rd 2014", "Coronation Mass <br>in C minor", "Warsaw", "Studio Koncertowe Polskiego Radia im. Witolda Lutosławskiego", "W.A.&nbsp;Mozart", null, "Marta Kluczyńska - conductor", "http://www.kulturalna.warszawa.pl/wydarzenia,1,107777,Koncerty_muzyki_powa%C5%BCnej_w_Polskim_Radiu.html?locale=pl_PL");
pastEvents.push(singleEvent);
var singleEvent = new SingleEvent("March 14th 2014", "Don Giovanni", "Kielce", "Filharmonia Świętokrzyska", "W.A.&nbsp;Mozart", "part: Commendatore", "Jacek Rogala - conductor", "http://filharmonia.kielce.pl/arch_2014/archiwum14_03_14.html");
pastEvents.push(singleEvent);
var singleEvent = new SingleEvent("October 24th 2014", "Don Giovanni", "Warsaw", "Opera Kameralna", "W.A.&nbsp;Mozart", "part: Commendatore", "Lilianna Krych - conductor", "http://www.operakameralna.pl/index.php?24102014-n-21");
pastEvents.push(singleEvent);
var singleEvent = new SingleEvent("April 27th 2015", "Eugene Onegin", "Bydgoszcz", "Opera Nova", "P.&nbsp;Tchaikovsky", "part: Griemin", "Piotr Wajrak - music director", "http://www.ofm.amuz.bydgoszcz.pl/index.php?act=article&artid=94");
pastEvents.push(singleEvent);
var singleEvent = new SingleEvent("March 13th 2015", "Cud albo Krakowiaki i Górale", "Warsaw", "Teatr Wielki – Polish National Opera", "W.&nbsp;Bogusławski", "part: Bartłomiej", "Władysław Kłosiewicz - conductor", "https://teatrwielki.pl/repertuar/kalendarium/2014-2015/cud-albo-krakowiaki-i-gorale/");
pastEvents.push(singleEvent);
var singleEvent = new SingleEvent("November 21st 2015", "The Cantatas 84, 156, 166, 185", "Warsaw", "The Church of Siostry Wizytki", "J.S.&nbsp;Bach", null, "Krzysztof Garstka - music director", "http://www.kulturalna.warszawa.pl/wydarzenia,1,148956.html?locale=pl_PL");
pastEvents.push(singleEvent);
var singleEvent = new SingleEvent("October 23rd 2015", "Rodelinda", "Warsaw", "Teatr Collegium Nobilium", "G.F.&nbsp;Handel", "part: Garibaldo", "Krzysztof Garstka - music director", "https://tcn.at.edu.pl/spektakl/rodelinda/");
pastEvents.push(singleEvent);
var singleEvent = new SingleEvent("June 2nd 2017", "Great Mass in <br>C minor", "Warsaw", "II Festiwal Wiosna Chórów", "W.A.&nbsp;Mozart", null, "Irina Bogdanovich - conductor", "http://www.chor.uw.edu.pl/wch2-o-festiwalu");
pastEvents.push(singleEvent);
var singleEvent = new SingleEvent("July 2nd 2017", "Requiem", "Gołdap", "Barok na Mazurach", "W.A.&nbsp;Mozart", null, "Dariusz Zimnicki – conductor", "http://www.fundacja-namazurach.pl/barok-na-mazurach/");
pastEvents.push(singleEvent);
var singleEvent = new SingleEvent("March 24th 2018", "I Capuleti e i Montecchi", "Wrocław", "The Wrocław Opera", "V.&nbsp;Bellini", "part: Cappelio", "Marcin Nałęcz-Niesiołowski - conductor", "http://www.opera.wroclaw.pl/1/spektakl.php?_id=4235");
pastEvents.push(singleEvent);
console.log(pastEvents);
// --------------Creating new single event-------------
for (var i = 0; i < pastEvents.length; i++) {
    var toClone = document.querySelector('.past-events_single');
    var newPastEventSingle = toClone.cloneNode(true);
    var container = document.querySelector('.past-events');
    container.insertBefore(newPastEventSingle, toClone);
    console.log("działa");
    function setNewText(text, elText) {
        var el = newPastEventSingle.querySelector(".past-event-" + text);
        if(elText !== null) {
            console.log(elText);
            el.innerHTML = elText;
        } else {
            el.innerHTML = "";
        }
    }
    setNewText('date', pastEvents[i].date);
    setNewText('title', pastEvents[i].title);
    setNewText('city', pastEvents[i].city);
    setNewText('place', pastEvents[i].place);
    setNewText('author', pastEvents[i].author);
    setNewText('part', pastEvents[i].part);
    setNewText('conductor', pastEvents[i].conductor);
    newPastEventSingle.querySelector(".past-event-link").href = pastEvents[i].link;
}
