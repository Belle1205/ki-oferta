import { createIcons, icons } from 'lucide';

function buscar(app) {
    app.innerHTML = `
        <div class="container-buscar">
            <h2 class="titulo-buscar">Troca de Livros</h2>
            <p class="subtitulo-buscar">Tem um livro parado ou precisa de um novo?</p>
            
            <form id="form-busca" class="grupo-input">
                <label for="input-busca" class="icone-busca-label">
                    <i data-lucide="search" id="icone-busca"></i>
                </label>
                <input 
                    type="text" 
                    id="input-busca" 
                    placeholder="Livro, disciplina ou palavra-chave..."
                    aria-label="campo busca de livro"
                    autocomplete="off"
                />
                <button type="submit" id="btn-busca" title="Buscar livros"> 
                    <i data-lucide="arrow-right"></i>
                </button>
            </form>

            <p class="busca-atencao">Livros disponíveis do ensino fundamental, médio e superior</p>

            <div class="categorias-busca">
                <p class="titulo-categorias">Disciplinas e Categorias</p>
                <ul class="categoria-lista">
                    <li class="lista-categoria" data-categoria="Matemática">Matemática</li>
                    <li class="lista-categoria" data-categoria="Física">Física</li>
                    <li class="lista-categoria" data-categoria="Química">Química</li>
                    <li class="lista-categoria" data-categoria="História">História</li>
                    <li class="lista-categoria" data-categoria="Literatura">Literatura</li>
                    <li class="lista-categoria" data-categoria="Biologia">Biologia</li>
                </ul>
            </div>
        </div>
    `;

    adicionarEventos(app);
    createIcons({ icons });
}

function adicionarEventos(app) {
    const formBusca = document.getElementById("form-busca");
    const inputBusca = document.getElementById("input-busca");
    const listaCategoria = document.querySelectorAll(".lista-categoria");

    if (formBusca && inputBusca) {
        formBusca.addEventListener("submit", (e) => {
            e.preventDefault();
            const termo = inputBusca.value.trim();
            if (termo) {
                window.location.hash = `#produtos?q=${encodeURIComponent(termo)}`;
            } else {
                window.location.hash = "#produtos";
            }
        });
    }

    listaCategoria.forEach((item) => {
        item.addEventListener("click", () => {
            const categoria = item.getAttribute("data-categoria") || item.textContent.trim();
            window.location.hash = `#produtos?cat=${encodeURIComponent(categoria)}`;
        });
    });
}

export default {
    url: "#buscar",
    label: "buscar",
    icon: "search",
    pagina: buscar
};