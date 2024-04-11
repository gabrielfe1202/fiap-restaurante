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
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var about = document.querySelector('#sobre');
var contact = document.querySelector('#contato');

var aboutLink = document.querySelector('nav a[href="#sobre"]');
var contactLink = document.querySelector('nav a[href="#contato"]');

if (aboutLink != null) {
  aboutLink.addEventListener('click', function () {
    smoothScroll('#sobre', 1000);
  });
}

if (contactLink != null) {
  contactLink.addEventListener('click', function () {
    smoothScroll('#contato', 1000);
  });
}

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
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

if (cat == 'bebidas') {
  document.getElementById("titulo_cardapio").innerHTML = "Bebidas"
} else if (cat == 'principal') {
  document.getElementById("titulo_cardapio").innerHTML = "Pratos principais"
} else if (cat == "entradas") {
  document.getElementById("titulo_cardapio").innerHTML = "Entradas"
}

var cod = parseInt(searchParams.get('cod'))
console.log(cod);

var cardapio = {
  "pratos": [
    {
      "cod": "1",
      "nome": "Espaguete da Felicidade",
      "descricao": "Ingredientes: Espaguete com almôndegas em forma de sorrisos e molho de tomate. Valor nutricional: Proteínas (carne), carboidratos (macarrão) e gordura (molho). Alergênicos: Glúten (macarrão), carne.",
      "preco": "29,90",
      "imagem": "img/macarrao.jpg",
      "categoria": "principal",
      "avaliacoes": [
        {
          "nome": "Thiago Ventura",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 3.5
        }
      ]
    },
    {
      "cod": "2",
      "nome": "Risoto Risível",
      "descricao": "Ingredientes: Risoto de cogumelos com parmesão em formato de palhaço. Valor nutricional: Proteínas (queijo), carboidratos (arroz) e gordura (queijo). Alergênicos: Laticínios (queijo).",
      "preco": "29,90",
      "imagem": "img/risoto.jpg",
      "categoria": "principal",
      "avaliacoes": [
        {
          "nome": "Fábio Porchat",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 3.5
        }
      ]
    },
    {
      "cod": "3",
      "nome": "Pizzas Engraçadas",
      "descricao": "Ingredientes: Pizzas em formatos divertidos com diversas coberturas e queijo derretido. Valor nutricional: Proteínas (queijo e carnes), carboidratos (massa) e gordura (queijo e carnes).Alergênicos: Glúten (massa), laticínios (queijo",
      "preco": "29,90",
      "imagem": "img/pizza.jpg",
      "categoria": "principal",
      "avaliacoes": [
        {
          "nome": "Bruna louise",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 3.5
        }
      ]
    },
    {
      "cod": "4",
      "nome": "Salada de Risadas",
      "descricao": "Ingredientes: Salada de frutas frescas com molho de iogurte e granola em formato de sorrisos. Valor nutricional: Rica em fibras e vitaminas (frutas e granola), moderada em gordura (iogurte).Alergênicos: Laticínios (iogurte).",
      "preco": "12,90",
      "imagem": "img/salada.jpg",
      "categoria": "entradas",
      "avaliacoes": [
        {
          "nome": "Victor Sarro",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 3.5
        },
        {
          "nome": "Victor Sarro",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 4.5
        }
      ]
    },
    {
      "cod": "5",
      "nome": "Pão do bobo",
      "descricao": "Ingredientes: Pão recheado com queijo derretido e bacon crocante. Valor nutricional: Proteínas (queijo e bacon), carboidratos (pão), gordura (bacon). Alergênicos: Glúten (pão), laticínios (queijo), carne (bacon).",
      "preco": "14,50",
      "imagem": "img/pao.jpg",
      "categoria": "entradas",
      "avaliacoes": [
        {
          "nome": "Fábio Porchat",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 3.5
        }
      ]
    },
    {
      "cod": "6",
      "nome": "Tiras de riso",
      "descricao": "Ingredientes: Tiras de queijo empanadas servidas com molho de pimenta Valor nutricional: Rica em proteínas (queijo), gordura (empanado) e carboidratos (molho de pimenta). Alergênicos: Laticínios (queijo), glúten (empanado).",
      "preco": "14,50",
      "imagem": "img/queijo.jpg",
      "categoria": "entradas",
      "avaliacoes": [
        {
          "nome": "Bruna louise",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 3.5
        }
      ]
    },
    {
      "cod": "7",
      "nome": "Limona",
      "descricao": "Ingredientes: Limonada com gás em garrafas com rótulos divertidos. Valor nutricional: Baixas calorias. Fonte de vitamina C. Alergênicos: Nenhum.",
      "preco": "14,90",
      "imagem": "img/limonada.jpg",
      "categoria": "bebidas",
      "avaliacoes": [
        {
          "nome": "Victor Sarro",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 3.5
        }
      ]
    },
    {
      "cod": "8",
      "nome": "Suco do Sorriso",
      "descricao": "Ingredientes: Suco de laranja e manga servido em copos com canudos engraçados. Valor nutricional: Vitaminas das frutas, baixas calorias. Alergênicos: Nenhum.",
      "preco": "14,90",
      "imagem": "img/suco.jpg",
      "categoria": "bebidas",
      "avaliacoes": [
        {
          "nome": "Bruna louise",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 3.5
        }
      ]
    },
    {
      "cod": "9",
      "nome": "Coquetel do Bobo",
      "descricao": "Ingredientes: Coquetel de frutas com guarda-chuvas coloridos. Valor nutricional: Baixas calorias. Alergênicos: Pode variar de acordo com os ingredientes.",
      "preco": "19,90",
      "imagem": "img/drink.jpg",
      "categoria": "bebidas",
      "avaliacoes": [
        {
          "nome": "Thiago Ventura",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 3.5
        }
      ]
    },
  ]
}

var prato = cardapio["pratos"][cod - 1]
console.log(prato)

if (document.getElementById("titulo_prato") != null) {
  document.getElementById("titulo_prato").innerHTML = prato.nome
  document.getElementById("desc_prato").innerHTML = prato.descricao
  document.getElementById("preco_prato").innerHTML = "R$ " + prato.preco
  document.getElementById("imagem_prato").src = prato.imagem
  var cont_avaliacao = ''
  for (var i = 0; i < prato.avaliacoes.length; i++) {
    cont_avaliacao += `<div class="avaliacao">`
    cont_avaliacao += `<div style="display: flex;flex-flow: wrap">`
    cont_avaliacao += `<p class="nome_avaliacao">${prato.avaliacoes[i].nome}:</p><div class="starFundos"><div class="starAvaliacao" style="width:${prato.avaliacoes[i].nota * 20}%"></div></div>`
    cont_avaliacao += `</div>`
    cont_avaliacao += `<p class="texto_avaliacao">${prato.avaliacoes[i].avaliação}</p>`
    cont_avaliacao += `</div>`
  }
  document.getElementById("avaliacoes").innerHTML = cont_avaliacao
} else {

  var pratos = cardapio["pratos"];
  var container = '';
  for (var i = 0; i < pratos.length; i++) {
    if (pratos[i].categoria == cat || cat == 'all' || cat == null) {
      container += '<div class="col-md-10 row prato">';
      container += '<div class="col-md-4">';
      container += `<img class="imagem" src="${pratos[i].imagem}" style="width: 100%"/>`
      container += '</div>'
      container += '<div class="col-md-8">';
      if (cat == 'all' || cat == null) {
        container += `<p class="nome">${pratos[i].nome}<span style="font-size: 13px;font-weight: normal;">${pratos[i].categoria}</span></p>`
      } else {
        container += `<p class="nome">${pratos[i].nome}</p>`
      }
      container += `<p class="descricao">${pratos[i].descricao}</p>`
      container += `<p class="preco">R$ ${pratos[i].preco}</p>`
      container += `<a class="botao" href="prato.html?cod=${pratos[i].cod}">Ver mais</a>`
      container += '</div>'
      container += '</div>'
    }
  }
  if (document.getElementById("pratos") != null) {
    document.getElementById("pratos").innerHTML = container
  }
}

setTimeout(() => {
  document.getElementById("load").style.display = "none"
}, 700)
