import { usuarios } from '../dadosMockados/usuarios.js'

let usuarioLogado = null

function entrar(email, senha) {
  const usuarioEncontrado = usuarios.find(
    usuario => usuario.email === email && usuario.senha === senha
  )

  if (!usuarioEncontrado) return null

  usuarioLogado = usuarioEncontrado
  return usuarioLogado
}

function sair() {
  usuarioLogado = null
}

function usuarioAtual() {
  return usuarioLogado
}

export { entrar, sair, usuarioAtual }
