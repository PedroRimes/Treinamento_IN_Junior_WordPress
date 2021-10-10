const $ = document
let list = $.querySelector('#entrada-dados');
let submit = $.querySelector('#botao');
const url = "https://lobinhos.herokuapp.com/wolves/331"


// GET /////////////////////////////////////


// APARECE O LOBO /////////
const transformaDiv=(name,age,link_image,description) => {
    let entrada_dados = document.querySelector("#entrada-dados");
    let nova_li = $.createElement("li")
    nova_li.innerHTML = `
    <div class="descricao1">
    <div class="imagens-sobrepostas">
    <figure class="quadrado-azul"></figure>
    <img class="imagem-lobo" src="${link_image}" alt="">
    <!-- <figure class="imagem-lobo"></figure> -->
    </div>
    <div class="descricao-lobo">
    <div>
    <p class="nome-lobo">${name}</p>
    <button type="submit" class="caixaadotar">Adotar</button>
    </div>
    <div>
    <h3 class="idade-lobo">Idade: ${age} anos</h3>
    <p class="texto-lobo">${description}</p>
    </div>
    </div>
    </div>`
    entrada_dados.appendChild(nova_li)
    console.log('test')
}

    fetch(url)
    .then(resp => resp.json())
    .then(wolves => {
        for (let i = 0; i <= wolves.wolves.length; i++) {
            transformaDiv(wolves.wolves[i].name, wolves.wolves[i].age, wolves.wolves[i].link_image, wolves.wolves[i].description, wolves.wolves[i].id)
        }
    })    