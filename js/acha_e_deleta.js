const $ = document
let show = $.querySelector('#show-lobinho');
let del = $.querySelector('#delete');
const url = "https://lobinhos.herokuapp.com/wolves/";
const id = window.location.search.split("=")[1];
console.log (id);

fetch(url + id)
.then(resp => resp.json())
.then(wolves => {transformaDiv(wolves.wolf.name, wolves.wolf.link_image, wolves.wolf.description, wolves.wolf.id)
})


//APARECE O LOBO SELECIONADO//
const transformaDiv=(name,link_image,description) => {
    let show_lobinho = document.getElementById("show-lobinho");
    let nova_li = $.createElement("li")
    nova_li.innerHTML = `
    <h2 class="titulos-amarelos">${name}</h2>
        <div class="descricao1">
            <div class="imagens-sobrepostas">
                <figure class="quadrado-azul"></figure>
                <img class="lobo_image" src="${link_image}"></img>
                <div class="botoes">
                    <button class="adotar">Adotar</a>
                    <button class="excluir">Excluir</button>
                </div>
            </div>
            <div class="descricao-lobo">
                    <p class="texto-lobo">${description}</p>
                    <p class="texto-lobo">${description}</p>
            </div>
        </div>`
    console.dir(show_lobinho)
    show_lobinho.appendChild(nova_li)

    const excluir = document.querySelector(".excluir");
    const adotar = document.querySelector(".adotar");
    
    excluir.addEventListener("click", function() {
        let fetchConfig = {
            method:"DELETE"
        }
        fetch(url+id, fetchConfig)
        .then(() => {
            let trash = $.querySelector(`#div-group-${id}`)
            trash.remove()
        })
        .catch(error => console.warn(error))
        window.open("listaDeLobos.html")
    });
    
    adotar.addEventListener("click", function() {
        window.open("adote_lobinho.html")
    });
}

const destroyMessage = (id) => {
    
}