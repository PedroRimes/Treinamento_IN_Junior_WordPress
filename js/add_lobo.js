let list = document.querySelector('#entrada-dados');
let submit = document.querySelector('#botao');
const url = "https://lobinhos.herokuapp.com/wolves"


const transformaDiv=(name,age,link_image,description) => {
    const entrada_dados = document.getElementById("entrada-dados");
    let nova_li = document.createElement("li")
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
    console.dir(entrada_dados)
    console.dir(nova_li)
    entrada_dados.append(nova_li)
}
fetch("https://lobinhos.herokuapp.com/wolves")
.then(resp => resp.json())
.then(wolves => {
    for (let i = 0; i <= wolves.wolves.lenght; i++) {
        transformaDiv(wolves.wolves[i].name, wolves.wolves[i].age, wolves.wolves[i].link_image, wolves.wolves[i].description, wolves.wolves[i].id)
    }
})    

let botao = document.querySelector("#botao_enviar")
botao.addEventListener("click", (e) => {
    e.preventDefault()
    let name = document.querySelector("#name").value
    console.log(name)
    let age = document.querySelector("#age").value
    console.log(age)
    let link_image = document.querySelector("#link_image").value
    console.log(link_image)
    let description = document.querySelector("#description").value
    console.log(description)
    if (name != "" && age != "" && link_image != "" && description != ""){
        let fetchBody = {
            "wolf":{
                "name": name,
                "age": parseInt(age),
                "link_image": link_image,
                "description": description
            }
        }
        let fetchConfig = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(fetchBody)
        }
        fetch("https://lobinhos.herokuapp.com/wolves", fetchConfig)
        .then(resp => resp.json())
        .then(element => transformaDiv(element.name, element.age, element.link_image, element.description))
        .catch(error => console.warn(error)) 
    }
    window.open("./listaDeLobos.html")
})
