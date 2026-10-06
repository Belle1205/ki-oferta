// Dados mockados para Troca de Livros (Requisito E4: mínimo 12 registros, 4 publicadores, todo registro com id e id do publicador)
const listaDeLivros = [
  {
    id: 1,
    titulo: "Física: Os Fundamentos da Física - Vol. 1",
    disciplina: "Física",
    conservacao: "Seminovo",
    ano: 2021,
    distancia: 250,
    publicadorId: 1,
    publicadorNome: "Lucas Silva",
    img: "https://images.unsplash.com/photo-1532012164546-f432f2e3777f?w=300&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    titulo: "Fundamentos de Matemática Elementar - Conjuntos e Funções",
    disciplina: "Matemática",
    conservacao: "Excelente",
    ano: 2023,
    distancia: 400,
    publicadorId: 2,
    publicadorNome: "Mariana Souza",
    img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    titulo: "História Geral e do Brasil - Ensino Médio",
    disciplina: "História",
    conservacao: "Usado",
    ano: 2019,
    distancia: 120,
    publicadorId: 3,
    publicadorNome: "Carlos Eduardo",
    img: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=300&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    titulo: "Química Geral: Matéria e Energia",
    disciplina: "Química",
    conservacao: "Seminovo",
    ano: 2022,
    distancia: 800,
    publicadorId: 4,
    publicadorNome: "Beatriz Lima",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    titulo: "Biologia dos Organismos: Volume 2",
    disciplina: "Biologia",
    conservacao: "Novo",
    ano: 2024,
    distancia: 550,
    publicadorId: 1,
    publicadorNome: "Lucas Silva",
    img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=300&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    titulo: "Literatura Brasileira: Das Origens ao Modernismo",
    disciplina: "Literatura",
    conservacao: "Seminovo",
    ano: 2020,
    distancia: 300,
    publicadorId: 2,
    publicadorNome: "Mariana Souza",
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&auto=format&fit=crop&q=60"
  },
  {
    id: 7,
    titulo: "Cálculo Diferencial e Integral I",
    disciplina: "Matemática",
    conservacao: "Usado",
    ano: 2018,
    distancia: 150,
    publicadorId: 3,
    publicadorNome: "Carlos Eduardo",
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&auto=format&fit=crop&q=60"
  },
  {
    id: 8,
    titulo: "Geometria Analítica e Álgebra Linear",
    disciplina: "Matemática",
    conservacao: "Seminovo",
    ano: 2022,
    distancia: 700,
    publicadorId: 4,
    publicadorNome: "Beatriz Lima",
    img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300&auto=format&fit=crop&q=60"
  },
  {
    id: 9,
    titulo: "Física Clássica: Mecânica e Termodinâmica",
    disciplina: "Física",
    conservacao: "Usado",
    ano: 2017,
    distancia: 950,
    publicadorId: 1,
    publicadorNome: "Lucas Silva",
    img: "https://images.unsplash.com/photo-1532012164546-f432f2e3777f?w=300&auto=format&fit=crop&q=60"
  },
  {
    id: 10,
    titulo: "Química Orgânica: Estrutura e Propriedades",
    disciplina: "Química",
    conservacao: "Excelente",
    ano: 2023,
    distancia: 180,
    publicadorId: 2,
    publicadorNome: "Mariana Souza",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300&auto=format&fit=crop&q=60"
  },
  {
    id: 11,
    titulo: "Ecologia e Meio Ambiente Contemporâneo",
    disciplina: "Biologia",
    conservacao: "Novo",
    ano: 2024,
    distancia: 320,
    publicadorId: 3,
    publicadorNome: "Carlos Eduardo",
    img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=300&auto=format&fit=crop&q=60"
  },
  {
    id: 12,
    titulo: "Antologia Poética e Textos Clássicos",
    disciplina: "Literatura",
    conservacao: "Seminovo",
    ano: 2021,
    distancia: 500,
    publicadorId: 4,
    publicadorNome: "Beatriz Lima",
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&auto=format&fit=crop&q=60"
  }
];

export default listaDeLivros;
export { listaDeLivros };
