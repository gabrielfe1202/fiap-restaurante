function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = easing(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easing(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 *t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var about = document.querySelector('#sobre');
var contact = document.querySelector('#contato');

var aboutLink = document.querySelector('nav a[href="#sobre"]');
var contactLink = document.querySelector('nav a[href="#contato"]');

aboutLink.addEventListener('click', function() {
    smoothScroll('#sobre', 1000);
});

contactLink.addEventListener('click', function() {
    smoothScroll('#contato', 1000);
});

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams.get('categoria')); 

var requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
  var superHeroes = request.response;
  console.log(superHeroes)
  var heroes = superHeroes["members"];

  var container = '';
  for (var i = 0; i < heroes.length; i++) {
    container += '<div class="col-md-10 row prato" style="padding-top: 20px" >';
      container += '<div class="col-md-3">';
        container += `<img src="img/macarao.jpg" style="width: 100%"/>`          
      container += '</div>'
      container += '<div class="col-md-8">';  
        container += `<p>${heroes[i].name}</p>`    
        container += `<p>${heroes[i].secretIdentity}</p>`    
      container += '</div>'
    container += '</div>'
  }
  document.getElementById("pratos").innerHTML = container
  //populateHeader(superHeroes);
  //showHeroes(superHeroes);
};
