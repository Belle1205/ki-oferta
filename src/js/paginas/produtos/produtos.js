import './produtos.css';
import listaDeLivros from '../../dadosMockados/dados.js';
import { createIcons, icons } from 'lucide';

// Estado da ordenação atual (padrão: menor distância)
let ordenacaoAtual = 'distancia';

function obterParametrosURL() {
    const hash = window.location.hash || '';
    const partes = hash.split('?');
    if (partes.length < 2) return { termo: '', categoria: '' };
    
    const params = new URLSearchParams(partes[1]);
    return {
        termo: (params.get('q') || '').trim(),
        categoria: (params.get('cat') || '').trim()
    };
}

function filtrarLivros(termo, categoria) {
    return listaDeLivros.filter((livro) => {
        const termoBusca = termo.toLowerCase();
        const categoriaFiltro = categoria.toLowerCase();

        // Filtro por categoria (se especificada)
        const bateCategoria = !categoria || livro.disciplina.toLowerCase() === categoriaFiltro;

        // Filtro por termo (se especificado) procurando no título, disciplina ou conservação
        const bateTermo = !termo || 
            livro.titulo.toLowerCase().includes(termoBusca) ||
            livro.disciplina.toLowerCase().includes(termoBusca) ||
            livro.conservacao.toLowerCase().includes(termoBusca);

        return bateCategoria && bateTermo;
    });
}

function ordenarLivros(livros, criterio) {
    const copia = [...livros];
    if (criterio === 'ano') {
        // Critério 1: Edição mais recente primeiro
        return copia.sort((a, b) => b.ano - a.ano);
    }
    // Critério 2: Menor distância primeiro
    return copia.sort((a, b) => a.distancia - b.distancia);
}

function produtos(app) {
    const { termo, categoria } = obterParametrosURL();
    const livrosFiltrados = filtrarLivros(termo, categoria);
    const livrosOrdenados = ordenarLivros(livrosFiltrados, ordenacaoAtual);

    const textoFiltroAtivo = termo 
        ? `Busca: "${termo}"` 
        : categoria 
        ? `Disciplina: "${categoria}"` 
        : null;

    app.innerHTML = `
        <div class="container-resultados">
            <header class="cabecalho-resultados">
                <div class="cabecalho-titulo-linha">
                    <h1 class="titulo-resultados">Livros Disponíveis</h1>
                    ${
                        textoFiltroAtivo 
                            ? `<span class="badge-termo">
                                 ${textoFiltroAtivo}
                                 <button class="btn-limpar-termo" id="btn-limpar-busca" title="Limpar busca">
                                     <i data-lucide="x"></i>
                                 </button>
                               </span>`
                            : ''
                    }
                </div>

                <div class="barra-controles">
                    <span class="total-registros">
                        <i data-lucide="book-open"></i>
                        ${livrosFiltrados.length} ${livrosFiltrados.length === 1 ? 'livro encontrado' : 'livros encontrados'}
                    </span>

                    <div class="grupo-ordenacao">
                        <label for="select-ordenacao" class="label-ordenacao">
                            <i data-lucide="arrow-up-down"></i> Ordenar:
                        </label>
                        <select id="select-ordenacao" class="select-ordenacao" aria-label="Critério de ordenação">
                            <option value="distancia" ${ordenacaoAtual === 'distancia' ? 'selected' : ''}>Mais próximos</option>
                            <option value="ano" ${ordenacaoAtual === 'ano' ? 'selected' : ''}>Mais recentes (ano)</option>
                        </select>
                    </div>
                </div>
            </header>

            <main class="lista-livros" id="lista-livros-conteiner">
                ${
                    livrosFiltrados.length === 0
                        ? `
                        <div class="estado-vazio">
                            <div class="estado-vazio-icone">
                                <i data-lucide="search-x"></i>
                            </div>
                            <h2 class="estado-vazio-titulo">Nenhum livro encontrado</h2>
                            <p class="estado-vazio-texto">
                                Não encontramos nenhum exemplar para os filtros selecionados. Tente buscar por outra disciplina ou palavra-chave.
                            </p>
                            <a href="#buscar" class="btn-voltar-inicio">
                                <i data-lucide="arrow-left"></i> Fazer nova busca
                            </a>
                        </div>
                        `
                        : livrosOrdenados.map((livro) => `
                            <a href="#detalhe?id=${livro.id}" class="card-livro" title="Ver detalhes do livro">
                                <div class="card-livro-capa">
                                    <img src="${livro.img}" alt="Capa de ${livro.titulo}" loading="lazy" />
                                </div>
                                <div class="card-livro-conteudo">
                                    <span class="card-livro-disciplina">${livro.disciplina}</span>
                                    <h3 class="card-livro-titulo">${livro.titulo}</h3>
                                    <div class="card-livro-detalhes">
                                        <span class="tag-conservacao">${livro.conservacao}</span>
                                        <span>Ed. ${livro.ano}</span>
                                    </div>
                                    <div class="card-livro-rodape">
                                        <span class="card-livro-distancia">
                                            <i data-lucide="map-pin"></i> ${livro.distancia}m de você
                                        </span>
                                        <span class="card-livro-publicador">Por: ${livro.publicadorNome}</span>
                                    </div>
                                </div>
                            </a>
                        `).join('')
                }
            </main>
        </div>
    `;

    adicionarEventos(app);
    createIcons({ icons });
}

function adicionarEventos(app) {
    const selectOrdenacao = document.getElementById('select-ordenacao');
    if (selectOrdenacao) {
        selectOrdenacao.addEventListener('change', (e) => {
            ordenacaoAtual = e.target.value;
            produtos(app);
        });
    }

    const btnLimpar = document.getElementById('btn-limpar-busca');
    if (btnLimpar) {
        btnLimpar.addEventListener('click', () => {
            window.location.hash = '#produtos';
        });
    }
}

export default { 
    url: "#produtos",
    label: "produtos",
    icon: "shopping-basket",
    pagina: produtos
};