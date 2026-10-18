function escaparHTML(valor) {
  return String(valor).replace(/[&<>"']/g, caractere => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[caractere]);
}

function mapa(app, livro) {
  if (!livro) { app.innerHTML = "<p>Escolha um livro para ver as informações da troca.</p>"; return }
  app.innerHTML = `
    <h1>${escaparHTML(livro.titulo)}</h1>
    <p>${escaparHTML(livro.conservacao)} · edição ${escaparHTML(livro.ano)} · ${escaparHTML(livro.distancia)} m</p>
    <section class="mapa-provisorio">
      Local para combinar a troca: ${escaparHTML(livro.bairro || 'converse com o publicador')}
    </section>`

    location.hash = "#mapa"
}
export default { 
  url: '#mapa',
   label: 'mapa',
   icon: "map",
    pagina: mapa 
  };
