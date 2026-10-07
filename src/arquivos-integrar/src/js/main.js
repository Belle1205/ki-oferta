import { createIcons, icons } from 'lucide';
import { mapaderotas, naoEncontrada } from './rotas/rotas.js'
import { navbar } from './navbar/navbar.js'

const app = document.getElementById('app')
navbar(mapaderotas)

function renderizarPagina() {
    const hash = window.location.hash || '#buscar'
    const rota = mapaderotas.find(tela => tela.url === hash)

    if (rota) {
        rota.pagina(app)
    } else {
        naoEncontrada.pagina(app)
    }

    createIcons({ icons })
}

window.addEventListener('hashchange', renderizarPagina)
renderizarPagina()
