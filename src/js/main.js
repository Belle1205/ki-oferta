import { createIcons, icons } from 'lucide';
import { mapaderotas } from './rotas/rotas.js'
import { navbar } from './navbar/navbar.js'

const app = document.getElementById("app")
navbar(mapaderotas)

function renderizarPagina() {
    const hashCompleto = window.location.hash || '#buscar'
    const rotaBase = hashCompleto.split('?')[0]
    const rota  = mapaderotas.find(tela => tela.url === rotaBase)
    console.log(rota)
    if (rota) {
        rota.pagina(app)
        createIcons({ icons });
    }
}
window.addEventListener("hashchange", ()=>{
    renderizarPagina()
})
renderizarPagina()
createIcons({ icons });
