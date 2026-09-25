import './produtos.css'
import listaDeProdutos from '../paginas/produtos/produto.js'

function produtos(app) {
    app.innerHTML = `
    <div>
    <h1>Página produtos</h1>
    ${
        listaDeProdutos.map((produto)=>{
            // div pai
            return `<div class="produto"> 
            
                        <div class="produto-imagem">
                            <img src="${produto.img}" alt = "A imagem de um produto class="image-produto">
                            <h3>${produto.nome}</h3>
                        
                        </div>

                        <div class="preco-distancia">
                            <p class="preco-especial">R$ ${produto.preco}</p>
                            <p>${produto.distancia} mt</p>
                        
                        </div>


                    </div>`

        } )
    }
    </div>`
    window.location.hash = "#produtos"
}

export default { 
    url: "#produtos",
    label: "",
    icon: "shopping-basket",
    pagina: produtos
 };