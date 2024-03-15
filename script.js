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

if(aboutLink != null){
  aboutLink.addEventListener('click', function() {
      smoothScroll('#sobre', 1000);
  });
}

if(contactLink != null){
  contactLink.addEventListener('click', function() {
      smoothScroll('#contato', 1000);
  });
}

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
var cat = searchParams.get('categoria')
console.log(cat);

var cardapio = {    
    "pratos": [      
        {
            "cod": "1",
            "nome": "Macarão",
            "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta vel tellus quis rhoncus. Pellentesque aliquam fringilla arcu vel pharetra.",
            "preco": "29,90",
            "imagem": "img/macarao.jpg",
            "categoria": "principal",
            "avaliacoes": [
              {
                "nome": "teste",
                "avaliação": "teste teste teste"
              }
            ]
        },
        {
          "cod": "1",
          "nome": "Batata frita",
          "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta vel tellus quis rhoncus. Pellentesque aliquam fringilla arcu vel pharetra.",
          "preco": "12,90",
          "imagem": "img/batata-frita.jpg",
          "categoria": "entradas",
          "avaliacoes": [
            {
              "nome": "teste",
              "avaliação": "teste teste teste"
            }
          ]
      },
      {
        "cod": "1",
        "nome": "Bolinho de bacalhau",
        "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta vel tellus quis rhoncus. Pellentesque aliquam fringilla arcu vel pharetra.",
        "preco": "14,50",
        "imagem": "img/bolinho.jpg",
        "categoria": "entradas",
        "avaliacoes": [
          {
            "nome": "teste",
            "avaliação": "teste teste teste"
          }
        ]
    }
    ]
}


var pratos = cardapio["pratos"];
var container = '';
for (var i = 0; i < pratos.length; i++) {
  if(pratos[i].categoria == cat || cat == 'all' || cat == null){
    container += '<div class="col-md-10 row prato">';
      container += '<div class="col-md-4">';
        container += `<img class="imagem" src="${pratos[i].imagem}" style="width: 100%"/>`          
      container += '</div>'
      container += '<div class="col-md-8">'; 
        if(cat == 'all' || cat == null) {
          container += `<p class="nome">${pratos[i].nome}<span style="font-size: 13px;font-weight: normal;">${pratos[i].categoria}</span></p>`    
        }else{
          container += `<p class="nome">${pratos[i].nome}</p>`    
        }
        container += `<p class="descricao">${pratos[i].descricao}</p>`   
        container += `<p class="preco">R$ ${pratos[i].preco}</p>`   
        container += `<a class="botao" href=""#">Ver mais</a>` 
      container += '</div>'
    container += '</div>'
  }
}
document.getElementById("pratos").innerHTML = container
  

