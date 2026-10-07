const livros = [
    { titulo: "Fundamentos de Matemática Elementar", disciplina: "Matemática", conservacao: "Seminovo" },
    { titulo: "Dom Casmurro", disciplina: "Literatura", conservacao: "Novo" },
    { titulo: "Os Fundamentos da Física", disciplina: "Física", conservacao: "Usado" }
]

const livrosSelecionados = livros.filter(livro => livro.conservacao === "Novo")
console.log(livrosSelecionados)