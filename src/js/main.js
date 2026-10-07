import { createIcons, icons } from 'lucide';
import { mapaderotas, naoEncontrada } from './rotas/rotas.js'
import { navbar } from './navbar/navbar.js'

const app = document.getElementById("app")
navbar(mapaderotas)

function renderizarPagina() {
    const hashCompleto = window.location.hash || '#buscar'
    const rotaBase = hashCompleto.split('?')[0]
    // A versão recebida comparava o hash completo; a rota-base é necessária
    // para que endereços como #detalhe?id=1 continuem funcionando.
    // const rota = mapaderotas.find(tela => tela.url === hashCompleto)
    const rota = mapaderotas.find(tela => tela.url === rotaBase)
    console.log(rota)
    if (rota) {
        rota.pagina(app)
    } else {
        naoEncontrada.pagina(app)
    }
}
window.addEventListener("hashchange", ()=>{
    renderizarPagina()
})
renderizarPagina()
createIcons({ icons });
