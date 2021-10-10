const $ = document
let list = $.querySelector('#entrada-dados');
let submit = $.querySelector('#botao');
const url = "https://lobinhos.herokuapp.com/wolves/"
let ladoPag = 0
fetch(url)
    .then(resp => resp.json())
    .then(wolves => {
        for (let i = 1; i < 3; i++) {
            if (ladoPag < 3) {
                ladoPag++
            } else {
                ladoPag = 1
            }
            let lobo = Math.ceil(Math.random() * (wolves.wolves.length - 1))
            console.log(ladoPag)
            transformaDiv(wolves.wolves[lobo].name, wolves.wolves[lobo].age,
                wolves.wolves[lobo].link_image, wolves.wolves[lobo].description,
                wolves.wolves[lobo].id, ladoPag)
        }
    })



const transformaDiv = (name, age, link_image, description, id, ladoPag) => {

let entrada_dados = document.querySelector(".exemplo-lobos");
let nova_div = $.createElement("section")
nova_div.setAttribute("class","descricao" + ladoPag )
nova_div.innerHTML = 
`<section class="exemplo-lobos">
<div class="descricao${ladoPag}">
    <div class="imagens-sobrepostas">
        <figure class="quadrado-azul"></figure>
        <img class="imagem-lobo" src="${link_image}"></img>
    </div>
    <div class="descricao-lobo">
        <div>
            <h2 class="nome-lobo">${name}</h2>
        </div>
        <div>
            <h3 class="idade-lobo">Idade: ${age} anos</h3>
            <p class="texto-lobo">${description}</p>
        </div>
    </div>
</div> `    
entrada_dados.appendChild(nova_div)

}