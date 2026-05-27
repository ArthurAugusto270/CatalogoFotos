const produtos = [

{
    id: 1,
    nome: "Camisa da Copa - Brasil",
    descricao: "Camisa com qualidade excelente, confortável, macia e representando bem seu time do coração.",
    preco: 215.90,
    categoria: "Camisas",
    tamanhos: ["P","M","G","GG"],
    cores: ["Única"],
    imagens: [
    "img/brasil_frente.PNG",
    "img/brasil_costa.PNG"
]
},

{
    id: 2,
    nome: "Camisa da Copa - Argentina",
    descricao: "Camisa com qualidade excelente, confortável, macia e representando bem seu time do coração.",
    preco: 215.90,
    categoria: "Camisas",
    tamanhos: ["P","M","G","GG"],
    cores: ["Única"],
    imagens: [
    "img/argentina_frente.png",
    "img/argentina_costa.png"
]
},

{
    id: 3,
    nome: "Camisa da Copa - Alemanha",
    descricao: "Camisa com qualidade excelente, confortável, macia e representando bem seu time do coração.",
    preco: 215.90,
    categoria: "Camisas",
    tamanhos: ["P","M","G","GG"],
    cores: ["Única"],
    imagens: [
    "img/alemanha_frente.png",
    "img/alemanha_costa.png"
]
},

{
    id: 4,
    nome: "Camisa da Copa - Espanha",
    descricao: "Camisa com qualidade excelente, confortável, macia e representando bem seu time do coração.",
    preco: 215.90,
    categoria: "Camisas",
    tamanhos: ["P","M","G","GG"],
    cores: ["Única"],
    imagens: [
    "img/espanha_frente.png",
    "img/espanha_costa.png"
]
},

{
    id: 5,
    nome: "Camisa da Copa - França",
    descricao: "Camisa com qualidade excelente, confortável, macia e representando bem seu time do coração.",
    preco: 215.90,
    categoria: "Camisas",
    tamanhos: ["P","M","G","GG"],
    cores: ["Única"],
    imagens: [
    "img/franca_frente.png",
    "img/franca_costa.png"
]
},

{
    id: 6,
    nome: "Camisa da Copa - Inglaterra",
    descricao: "Camisa com qualidade excelente, confortável, macia e representando bem seu time do coração.",
    preco: 215.90,
    categoria: "Camisas",
    tamanhos: ["P","M","G","GG"],
    cores: ["Única"],
    imagens: [
    "img/inglaterra_frente.png",
    "img/inglaterra_costa.png"
]
},

{
    id: 7,
    nome: "Camisa da Copa - Japão",
    descricao: "Camisa com qualidade excelente, confortável, macia e representando bem seu time do coração.",
    preco: 215.90,
    categoria: "Camisas",
    tamanhos: ["P","M","G","GG"],
    cores: ["Única"],
    imagens: [
    "img/japao_frente.png",
    "img/japao_costa.png"
]
},

{
    id: 8,
    nome: "Camisa da Copa - Portugal",
    descricao: "Camisa com qualidade excelente, confortável, macia e representando bem seu time do coração.",
    preco: 215.90,
    categoria: "Camisas",
    tamanhos: ["P","M","G","GG"],
    cores: ["Única"],
    imagens: [
    "img/portugal_frente.png",
    "img/portugal_costa.png"
]
},

{
    id: 9,
    nome: "Boné Copa - Brasil 2026",
    descricao: "Boné oficial da Copa do Mundo.",
    preco: 89.90,
    categoria: "Bonés",
    tamanhos: ["Único"],
    cores: ["Verde","Azul"],
    imagens: [
        "img/brasil_verde.png",
        "img/brasil_azul.png"
    ]
},

{
    id: 10,
    nome: "Boné Copa - Argentina 2026",
    descricao: "Boné oficial da Copa do Mundo.",
    preco: 89.90,
    categoria: "Bonés",
    tamanhos: ["Único"],
    cores: ["Branco","Azul"],
    imagens: [
        "img/argentina_azul.png",
        "img/argentina_branca.png"
    ]
},

{
    id: 11,
    nome: "Colar Copa 2026 - Bandeira do Brasil",
    descricao: "Colar exclusivo para torcedores.",
    preco: 49.90,
    categoria: "Acessórios",
    tamanhos: ["Único"],
    cores: ["Única"],

    imagens: [
        "img/brasil_colar_bandeira.png"
    ]
},

{
    id: 12,
    nome: "Colar Copa 2026 - Escudo do Brasil",
    descricao: "Colar exclusivo para torcedores.",
    preco: 49.90,
    categoria: "Acessórios",
    tamanhos: ["Único"],
    cores: ["Única"],

    imagens: [
        "img/brasil_escudo.png"
    ]
},

{
    id: 13,
    nome: "Copa 2026 - Bandeira do Brasil",
    descricao: "Bandeira tamanho grande para festejar com os amigos os jogos ou decorar sua casa",
    preco: 79.90,
    categoria: "Acessórios",
    tamanhos: ["Único"],
    cores: ["Única"],

    imagens: [
        "img/bandeira_brasil.png"
    ]
},

{
    id: 14,
    nome: "Chuteira Copa 2026 - Brasil",
    descricao: "Chuteira profissional para futebol.",
    preco: 399.90,
    categoria: "Chuteiras",
    tamanhos: ["38","39","40","41","42","43"],
    cores: ["Única"],

    imagens: [
        "img/chuteira_brasil.png"
    ]
},

{
    id: 15,
    nome: "Chuteira Copa 2026 - Argentina",
    descricao: "Chuteira profissional para futebol.",
    preco: 399.90,
    categoria: "Chuteiras",
    tamanhos: ["38","39","40","41","42","43"],
    cores: ["Única"],

    imagens: [
        "img/chuteira_argentina.png"
    ]
}

];

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function mostrarProdutos(lista){

    const produtosDiv = document.getElementById("produtos");

    produtosDiv.innerHTML = "";

    lista.forEach(produto => {

        let opcoesTamanho = "";

        produto.tamanhos.forEach(tamanho => {
            opcoesTamanho += `<option>${tamanho}</option>`;
        });

        let opcoesCor = "";

        produto.cores.forEach(cor => {
            opcoesCor += `<option>${cor}</option>`;
        });

        let carousel = `
        <div id="carousel${produto.id}"
             class="carousel slide"
             data-bs-ride="carousel"
             data-bs-interval="3000">

            <div class="carousel-inner">
        `;

        produto.imagens.forEach((img, index) => {

            carousel += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${img}"
                     class="d-block w-100"
                     style="height:300px; object-fit:cover;">
            </div>
            `;
        });

        carousel += `
            </div>

            <button class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel${produto.id}"
                    data-bs-slide="prev">

                <span class="carousel-control-prev-icon"></span>

            </button>

            <button class="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel${produto.id}"
                    data-bs-slide="next">

                <span class="carousel-control-next-icon"></span>

            </button>

        </div>
        `;

        produtosDiv.innerHTML += `

        <div class="col-md-4 mb-4">

            <div class="card h-100 shadow">

                ${carousel}

                <div class="card-body">

                    <h5>${produto.nome}</h5>

                    <p>${produto.descricao}</p>

                    <h5>R$ ${produto.preco.toFixed(2)}</h5>

                    <label>Tamanho</label>

                    <select class="form-select mb-2"
                            id="tamanho-${produto.id}">
                        ${opcoesTamanho}
                    </select>

                    <label>Cor</label>

                    <select class="form-select mb-2"
                            id="cor-${produto.id}">
                        ${opcoesCor}
                    </select>

                    <label>Quantidade</label>

                    <input type="number"
                           min="1"
                           value="1"
                           class="form-control mb-3"
                           id="quantidade-${produto.id}">

                    <button class="btn btn-success w-100"
                            onclick="adicionarCarrinho(${produto.id})">

                        Adicionar ao Carrinho

                    </button>

                </div>

            </div>

        </div>

        `;
    });
}
function adicionarCarrinho(id){

    const produto = produtos.find(p => p.id === id);

    const tamanho =
        document.getElementById(`tamanho-${id}`).value;

    const cor =
        document.getElementById(`cor-${id}`).value;

    const quantidade =
        parseInt(document.getElementById(`quantidade-${id}`).value);

    carrinho.push({

        nome: produto.nome,

        preco: produto.preco,

        tamanho: tamanho,

        cor: cor,

        quantidade: quantidade

    });

    salvarCarrinho();

    atualizarCarrinho();
}

function atualizarCarrinho(){

    const lista =
        document.getElementById("lista-carrinho");

    const totalSpan =
        document.getElementById("total");

    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach((produto, index) => {

        let subtotal =
            produto.preco * produto.quantidade;

        total += subtotal;

        lista.innerHTML += `

        <li class="list-group-item">

            <strong>${produto.nome}</strong>

            <br>

            Tamanho: ${produto.tamanho}

            <br>

            Cor: ${produto.cor}

            <br>

            Quantidade: ${produto.quantidade}

            <br>

            Subtotal: R$ ${subtotal.toFixed(2)}

            <br><br>

            <button class="btn btn-danger btn-sm"
                    onclick="removerCarrinho(${index})">

                Remover

            </button>

        </li>

        `;
    });

    totalSpan.innerText = total.toFixed(2);
}

function removerCarrinho(index){

    carrinho.splice(index, 1);

    salvarCarrinho();

    atualizarCarrinho();
}

function salvarCarrinho(){

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }

function pesquisarProduto(){

    const valor = document.getElementById("pesquisa").value.toLowerCase();

    const filtrados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(valor)
    );

    mostrarProdutos(filtrados);
}

function filtrarCategoria(categoria){

    if(categoria === "Todos"){
        mostrarProdutos(produtos);
        return;
    }

    const filtrados = produtos.filter(produto =>
        produto.categoria === categoria
    );

    mostrarProdutos(filtrados);
}

paypal.Buttons({

    createOrder: function(data, actions){

        let total = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade),0);

        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: total.toFixed(2)
                }
            }]
        });
    },

    onApprove: function(data, actions){

        return actions.order.capture().then(function(details){

            alert(`Pagamento realizado com sucesso por ${details.payer.name.given_name}`);

            carrinho = [];

            salvarCarrinho();

            atualizarCarrinho();
        });
    },

    onError: function(err){

        console.error(err);

        alert("Erro no pagamento");
    }

}).render('#paypal-button-container');

console.log(produtos);
console.log("Script carregado!");

mostrarProdutos(produtos);

atualizarCarrinho();

