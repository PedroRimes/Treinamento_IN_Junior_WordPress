let list = document.querySelector('#adote');
let submit = document.querySelector('#botao');
const url = "https://lobinhos.herokuapp.com/wolves/adoption";


fetch(url + id)
.then(resp => resp.json())
.then(wolves => {transformaDiv(wolves.adoption.name, wolves.adoption.age, wolves.adoption.email, wolves.adoption.wolf_id)
})


// cadastro adoção//////
const transformaDiv = (name,age,email,wolf_id) => {
    let show_lobinho = document.getElementById("adote-um-lobinho");
    let nova_li = $.createElement("li")
    nova_li.innerHTML = `
    <div class="imagem_nome">
            <figure class="imagem-lobo"></figure>
            <div class="Nome_id">
                <h1 class="titulos-amarelos">Adote o(a) ${name}</h1>
                <p class="num_id">ID: ${id}</p>
            </div>
        </div>
        <form action="">
            <div id="myForm2">
                <div class="nome-idade">
                    <div class="form">
                        <label for="name">Seu Nome:</label>
                        <input type="text" id="name" name="name"><br><br>
                    </div>
                    <div class="form">
                        <label for="age">Idade:</label>
                        <input type="text" id="age" name="age"><br><br>
                    </div>
                </div>
                <div class="form">
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email"><br><br>
                </div>
                <div class="botao">
                    <button>Adotar</button>
                </div>
            </div>
        </form>`
        console.dir(show_lobinho)
        show_lobinho.appendChild(nova_li)
}
