# RELATÓRIO TÉCNICO: ANÁLISE DO PROJETO KI-OFERTA

---

## FOLHA DE ROSTO

<div align="center">

**UNIVERSIDADE [INSTITUIÇÃO]**

**CURSO [NOME DO CURSO]**

**DISCIPLINA [NOME DA DISCIPLINA]**

---

**RELATÓRIO TÉCNICO**

**Análise e Documentação do Projeto Ki-Oferta**

**Branch: versao-atual**

---

Autor(a): [NOME DO ALUNO(A)]

Professor(a): [NOME DO PROFESSOR(A)]

Semestre: [SEMESTRE/ANO]

Data: 07 de outubro de 2026

---

</div>

---

## RESUMO

O presente relatório tem como objetivo analisar e documentar o repositório Ki-Oferta, disponível na branch versao-atual, com ênfase na estrutura de arquitetura, tecnologias, organização do código e funcionalidades implementadas. A aplicação consiste em uma Single Page Application (SPA) desenvolvida em JavaScript puro (vanilla JS), utilizando o Vite como ferramenta de build e o Capacitor para possibilitar a conversão em aplicativo mobile nativo. O projeto possui caráter educativo e acadêmico, sendo concebido como ferramenta de aprendizagem em desenvolvimento web moderno e aplicações híbridas. A análise realizada evidencia que a solução é uma plataforma de troca de livros didáticos, estruturada com navegação por hash, páginas modulares, dados simulados e recursos como busca, listagem de produtos, favoritos, envio de ofertas e mapa de localização. A organização arquitetural segue princípios de modularização, separação de responsabilidades e reutilização de código, favorecendo a manutenção e a escalabilidade da aplicação.

**Palavras-chave:** Ki-Oferta; JavaScript; Vite; Capacitor; Single Page Application; troca de livros; desenvolvimento web; aplicação híbrida; arquitetura modular.

---

## ABSTRACT

This report aims to analyze and document the Ki-Oferta repository, available in the versao-atual branch, with emphasis on architecture structure, technologies, code organization, and implemented functionalities. The application consists of a Single Page Application (SPA) developed in plain JavaScript (vanilla JS), using Vite as a build tool and Capacitor to enable conversion into a native mobile application. The project is educational and academic in nature, being designed as a learning tool in modern web development and hybrid applications. The analysis performed shows that the solution is a platform for exchanging academic textbooks, structured with hash-based navigation, modular pages, simulated data, and features such as search, product listing, favorites, offer submission, and location mapping. The architectural organization follows principles of modularization, separation of concerns, and code reusability, favoring the application's maintenance and scalability.

**Keywords:** Ki-Oferta; JavaScript; Vite; Capacitor; Single Page Application; book exchange; web development; hybrid application; modular architecture.

---

## SUMÁRIO

1. [Introdução](#1-introdução)
2. [Objetivos](#2-objetivos)
   - 2.1 Objetivo geral
   - 2.2 Objetivos específicos
3. [Metodologia](#3-metodologia)
4. [Contextualização do Projeto](#4-contextualização-do-projeto)
5. [Descrição do Repositório](#5-descrição-do-repositório)
   - 5.1 Estrutura de diretórios
   - 5.2 Arquivos principais
   - 5.3 Organização de módulos
6. [Tecnologias e Ferramentas Utilizadas](#6-tecnologias-e-ferramentas-utilizadas)
   - 6.1 JavaScript puro (Vanilla JS)
   - 6.2 Vite
   - 6.3 Capacitor
   - 6.4 Lucide Icons
   - 6.5 HTML5 e CSS3
7. [Arquitetura da Aplicação](#7-arquitetura-da-aplicação)
   - 7.1 Navegação por hash
   - 7.2 Estrutura modular de páginas
   - 7.3 Gerenciamento centralizado de rotas
   - 7.4 Sistema de componentes visuais
8. [Funcionalidades da Aplicação](#8-funcionalidades-da-aplicação)
   - 8.1 Busca de livros
   - 8.2 Listagem de produtos
   - 8.3 Detalhamento de itens
   - 8.4 Favoritos
   - 8.5 Envio e publicação
   - 8.6 Conta do usuário
   - 8.7 Sorteios
   - 8.8 Tratamento de erros
9. [Fluxo de Execução do Sistema](#9-fluxo-de-execução-do-sistema)
10. [Base de Dados e Informações](#10-base-de-dados-e-informações)
11. [Análise Crítica e Limitações](#11-análise-crítica-e-limitações)
12. [Recomendações para Evolução](#12-recomendações-para-evolução)
13. [Conclusão](#13-conclusão)
14. [Referências](#14-referências)

---

## 1. INTRODUÇÃO

A digitalização progressiva de serviços e plataformas educacionais tem promovido o desenvolvimento de aplicações inovadoras destinadas à prática colaborativa e à otimização do compartilhamento de recursos acadêmicos. Nesse contexto emergente, o projeto Ki-Oferta apresenta-se como uma proposta de aplicação web e mobile para facilitar a troca de livros didáticos entre usuários em ambiente educacional.

O repositório analisado está hospedado na plataforma GitHub sob a conta Belle1205, organizado na branch versao-atual, e apresenta uma solução implementada em JavaScript, estruturada como uma Single Page Application (SPA). A escolha por essa arquitetura reflete a intenção pedagógica e prática de demonstrar conceitos modernos de desenvolvimento front-end, destacando-se a navegação dinâmica, a modularização de código e a reutilização de componentes.

A relevância acadêmica desta análise reside na oportunidade de examinar como um projeto de escala moderada pode ser organizado seguindo princípios estabelecidos de arquitetura de software, tais como separação de responsabilidades, coesão e acoplamento reduzido. Adicionalmente, a investigação permite identificar decisões de design, escolhas tecnológicas e padrões de implementação que refletem boas práticas em desenvolvimento web contemporâneo.

A elaboração deste relatório segue as orientações das normas técnicas ABNT (Associação Brasileira de Normas Técnicas), especificamente a NBR 14724 para estruturação de trabalhos acadêmicos, a NBR 6027 para sumários e a NBR 10520 para citações, assegurando a conformidade com padrões de documentação técnica nacional.

---

## 2. OBJETIVOS

### 2.1 Objetivo Geral

Analisar e documentar de forma abrangente a branch versao-atual do repositório Ki-Oferta, investigando sua arquitetura técnica, tecnologias empregadas, estrutura de organização de código, fluxos de navegação e funcionalidades implementadas, com vistas à produção de um relatório técnico de caráter acadêmico, em conformidade com os princípios e normas metodológicas estabelecidas pela ABNT.

### 2.2 Objetivos Específicos

- Mapear e descrever a estrutura hierárquica de diretórios e arquivos do projeto;
- Identificar e analisar as tecnologias, dependências e ferramentas utilizadas no desenvolvimento;
- Examinar a arquitetura da aplicação, especialmente o sistema de navegação e roteamento;
- Descrever e avaliar os módulos de páginas e funcionalidades implementadas;
- Analisar os dados utilizados e os mecanismos de simulação (mock data);
- Avaliar a qualidade da organização do código, aplicação de padrões e separação de responsabilidades;
- Identificar limitações, desafios técnicos e oportunidades de evolução;
- Formular recomendações para melhorias e evolução futura do projeto.

---

## 3. METODOLOGIA

A metodologia empregada nesta investigação caracteriza-se como abordagem qualitativa e exploratória, fundamentada em análise documental e estática do código-fonte. O procedimento adotado compreendeu as seguintes etapas:

**Etapa 1 – Coleta de dados:** Acesso ao repositório GitHub do projeto Ki-Oferta, especificamente à branch versao-atual, com extração de informações sobre estrutura de diretórios, arquivos, configurações e dependências.

**Etapa 2 – Análise estrutural:** Mapeamento da hierarquia de pastas e identificação dos arquivos principais, com ênfase em package.json, vite.config.ts, capacitor.config.json e src/index.html.

**Etapa 3 – Análise de código:** Inspeção dos módulos JavaScript, incluindo main.js, rotas.js, navbar.js e páginas específicas, com foco em lógica de execução, padrões arquiteturais e implementação de funcionalidades.

**Etapa 4 – Análise de recursos:** Exame dos arquivos CSS, dados mockados e configurações de ícones e assets.

**Etapa 5 – Síntese e documentação:** Consolidação das informações coletadas em relatório estruturado conforme normas ABNT.

Esta abordagem é apropriada para projetos de pequena a média escala em fase de desenvolvimento, permitindo a compreensão profunda da lógica, organização e arquitetura sem necessidade de execução local ou intervenção no código.

---

## 4. CONTEXTUALIZAÇÃO DO PROJETO

O Ki-Oferta é concebido como uma plataforma digital destinada a facilitar e intermediar a troca de livros acadêmicos entre usuários em comunidade educacional. O projeto emerge como resposta à necessidade crescente de soluções colaborativas que reduzam custos de aquisição de material didático e promovam sustentabilidade e economia compartilhada.

O nome do projeto, "Ki-Oferta", faz referência semântica à procura e identificação de oportunidades, sendo particularmente adequado para uma proposta de mercado de livros usados ou de troca, análogo a plataformas consolidadas de comércio eletrônico e marketplace de materiais.

Desenvolvido em contexto acadêmico, o projeto funciona como ferramenta pedagógica para exploração simultânea de dois paradigmas tecnológicos: (a) desenvolvimento web moderno com tecnologias contemporâneas (Vite, modularização ES6) e (b) desenvolvimento de aplicações híbridas mobile (Capacitor), permitindo a experimentação de como um único código-fonte pode ser adaptado a múltiplas plataformas.

A arquitetura de Single Page Application (SPA) foi deliberadamente escolhida para simplificar a complexidade de roteamento, evitando dependências de frameworks robustos como React ou Vue, e focando no aprendizado de conceitos fundamentais de manipulação do DOM, gerenciamento de estado e navegação dinâmica.

---

## 5. DESCRIÇÃO DO REPOSITÓRIO

### 5.1 Estrutura de Diretórios

A organização hierárquica do repositório Ki-Oferta segue uma estrutura bem definida que facilita a navegação e manutenção do código. A estrutura principal é apresentada conforme segue:

```
ki-oferta/
├── src/
│   ├── js/
│   │   ├── main.js
│   │   ├── rotas/
│   │   │   └── rotas.js
│   │   ├── navbar/
│   │   │   └── navbar.js
│   │   ├── paginas/
│   │   │   ├── buscar/
│   │   │   │   ├── buscar.js
│   │   │   │   └── buscar.css
│   │   │   ├── produtos/
│   │   │   │   ├── produtos.js
│   │   │   │   └── produtos.css
│   │   │   ├── detalhe.js
│   │   │   ├── detalhe.css
│   │   │   ├── enviar.js
│   │   │   ├── enviar.css
│   │   │   ├── favorito.js
│   │   │   ├── conta.js
│   │   │   ├── mapa.js
│   │   │   ├── naoEncontrada/
│   │   │   │   └── naoEncontrada.js
│   │   │   └── sorteios/
│   │   │       ├── sorteio.js
│   │   │       └── sorteio.css
│   │   ├── dadosMockados/
│   │   │   ├── dados.js
│   │   │   └── usuarios.js
│   │   └── sessao/
│   │       └── sessao.js
│   ├── css/
│   │   ├── style.css
│   │   ├── base.css
│   │   ├── tokens.css
│   │   ├── navbar.css
│   │   ├── buscar.css
│   │   ├── conta.css
│   │   └── naoEncontrada.css
│   ├── assets/
│   │   ├── icon/
│   │   │   └── favicon.ico
│   │   └── imgs/
│   │       └── logo.png
│   ├── index.html
│   └── manifest.json
├── src/arquivos-integrar/
│   └── src/
│       └── [cópia de arquivos para integração]
├── package.json
├── package-lock.json
├── vite.config.ts
├── capacitor.config.json
├── README.md
├── Desafio01_P1.pdf
└── .gitignore
```

Esta estrutura demonstra organização modular clara, com separação entre lógica de negócio (js), apresentação (css, assets) e configuração.

### 5.2 Arquivos Principais

Os arquivos críticos para funcionamento e compreensão da aplicação são:

**package.json:** Define o projeto como módulo ES6, especifica dependências diretas (Capacitor, Lucide) e scripts de execução (dev, build, preview).

**src/index.html:** Estrutura HTML principal, contendo referências a favicon, manifest, estilos base e ponto de entrada para o script JavaScript módulo.

**src/js/main.js:** Arquivo de inicialização que centraliza a lógica de roteamento por hash, importação de componentes e inicialização de ícones.

**src/js/rotas/rotas.js:** Mapa centralizado de rotas, exportando array com definições de páginas disponíveis e página de erro padrão.

**src/js/navbar/navbar.js:** Componente dinâmico que constrói a barra de navegação a partir do mapa de rotas, evitando duplicidade.

**src/js/dadosMockados/dados.js:** Base de dados simulada contendo 12 livros com atributos realistas para demonstração.

### 5.3 Organização de Módulos

O projeto adota padrão de exportação ES6 modules, onde cada página é um módulo independente exportando um objeto com propriedades:

```javascript
export default {
    url: "#rota",
    label: "Rótulo",
    icon: "nome-icone",
    pagina: funcaoRenderizacao
}
```

Esta padronização permite reutilização uniforme e facilita manutenção e extensão.

---

## 6. TECNOLOGIAS E FERRAMENTAS UTILIZADAS

### 6.1 JavaScript Puro (Vanilla JS)

A implementação é desenvolvida exclusivamente em JavaScript vanilla (puro), sem dependência de frameworks de interface como React, Vue ou Angular. Essa escolha estratégica oferece múltiplas vantagens em contexto pedagógico:

- **Clareza conceitual:** Facilita compreensão de manipulação do DOM (Document Object Model), eventos e fluxo de execução;
- **Redução de complexidade:** Elimina abstrações de framework, permitindo foco em lógica fundamental;
- **Curva de aprendizado:** Apropriado para estudantes iniciantes em desenvolvimento front-end;
- **Leveza:** Reduz tamanho de bundle e dependências externas.

Adota-se modularização através de ES6 modules (import/export), demonstrando organização profissional mesmo sem framework.

### 6.2 Vite

Vite é utilizado como ferramenta de build e servidor de desenvolvimento. Características relevantes:

- **Build rápido:** Utiliza esbuild para bundling otimizado;
- **Hot Module Replacement (HMR):** Oferece recarga instantânea durante desenvolvimento;
- **Suporte ES6:** Nativo para módulos modernos;
- **Configuração simplificada:** Requer mínima configuração inicial.

Scripts definidos em package.json:
- `npm run dev` – Inicia servidor de desenvolvimento
- `npm run build` – Gera build otimizado para produção
- `npm run preview` – Visualiza build em ambiente local

### 6.3 Capacitor

Capacitor é framework que permite conversão de aplicações web em apps nativos para iOS e Android. Implicações do uso:

- **Multiplataforma:** Mesmo código-fonte para web e mobile;
- **Acesso a APIs nativas:** Câmera, geolocalização, notificações;
- **Desenvolvimento híbrido:** Combina web tech com capacidades mobile.

Configurado via capacitor.config.json com definição de webDir (apontando para dist/) e informações de app.

### 6.4 Lucide Icons

Biblioteca de ícones vetoriais utilizada para elementos visuais da interface. Importada via módulo e inicializada em main.js:

```javascript
import { createIcons, icons } from 'lucide';
createIcons({ icons });
```

Oferece conjunto extenso de ícones SVG com estilos consistentes.

### 6.5 HTML5 e CSS3

- **HTML5 semântico:** Uso apropriado de tags (header, nav, section, main);
- **CSS3 moderno:** Flexbox, Grid e media queries para responsividade;
- **Arquivos separados:** Modularização CSS por contexto/página.

---

## 7. ARQUITETURA DA APLICAÇÃO

### 7.1 Navegação por Hash

A navegação da aplicação utiliza sistema de hash (#) da URL como mecanismo de roteamento. O fluxo é o seguinte:

1. Usuário clica em link ou submete formulário com hash como destino;
2. Evento `hashchange` é disparado no window;
3. main.js intercepta o evento e extrai o valor do hash;
4. Sistema busca correspondência no array de rotas (mapaderotas);
5. Função de página correspondente é executada, renderizando conteúdo.

**Vantagens:**
- Navegação sem recarga de página (SPA);
- Suporte nativo em browsers;
- Simplificidade de implementação.

**Limitações:**
- Rotas não são RESTful;
- Histórico dependente de implementação adicional;
- Menos adequado para aplicações muito complexas.

### 7.2 Estrutura Modular de Páginas

Cada página é um módulo JavaScript independente, responsável por:

- Renderizar HTML específico da página;
- Adicionar listeners de eventos;
- Gerenciar lógica local (filtros, buscas, validações).

Exemplo de estrutura de página:

```javascript
function buscar(app) {
    // Renderiza HTML
    app.innerHTML = `...`;
    // Adiciona eventos
    adicionarEventos(app);
}

export default {
    url: "#buscar",
    label: "buscar",
    icon: "search",
    pagina: buscar
};
```

### 7.3 Gerenciamento Centralizado de Rotas

O arquivo rotas.js concentra todas as definições de rotas em array único:

```javascript
const mapaderotas = [
    buscar,
    produtos,
    detalhe,
    mapa,
    enviar,
    favorito,
    conta,
    sorteio
]
```

Esta centralização permite:
- Única fonte de verdade para rotas;
- Reutilização para gerar navbar;
- Facilidade em adicionar/remover rotas.

### 7.4 Sistema de Componentes Visuais

A navbar é gerada dinamicamente a partir do mapa de rotas:

```javascript
function navbar(item_menu) {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = item_menu
        .filter(menu => menu.label !== "")
        .map((item) => `<li>
            <a href="${item.url}">
                <i data-lucide="${item.icon}"></i>  
                ${item.label}
            </a>
        </li>`).join('');
}
```

Isso evita duplicidade e mantém navegação sincronizada com rotas.

---

## 8. FUNCIONALIDADES DA APLICAÇÃO

### 8.1 Busca de Livros

A página inicial (buscar) apresenta:

- **Campo de busca textual:** Permite pesquisa por termo livre (título, autor, palavra-chave);
- **Categorias por disciplina:** Lista clicável de 6 disciplinas (Matemática, Física, Química, História, Literatura, Biologia);
- **Navegação por parâmetros:** Ao submeter busca, direciona para #produtos?q=termo ou #produtos?cat=disciplina.

A funcionalidade reflete padrão UX comum em e-commerce.

### 8.2 Listagem de Produtos

Página de produtos renderiza catálogo de livros com base em:

- Dados mockados de src/js/dadosMockados/dados.js;
- Parâmetros de busca (query string);
- Filtros por categoria.

Exibe informações essenciais: thumbnail, título, disciplina, conservação, ano, distância.

### 8.3 Detalhamento de Itens

Rota #detalhe permite visualização expandida de um livro específico, acionada por parâmetro (id). Presume-se implementação de:

- Descrição completa;
- Múltiplas imagens;
- Condição de conservação detalhada;
- Localização do vendedor;
- Perfil do anunciante;
- Opções de ação (interesse, mensagem, favoritar).

### 8.4 Favoritos

Funcionalidade de salvamento de itens de interesse para comparação ou ações futuras. Apropriada em contexto de marketplace.

### 8.5 Envio e Publicação

Permite que usuário anuncie livro próprio para troca. Componente essencial em plataforma de troca bidirecional.

### 8.6 Conta do Usuário

Perfil do usuário com:
- Dados pessoais;
- Histórico de trocas;
- Reputação/avaliações;
- Configurações.

### 8.7 Sorteios

Funcionalidade adicional que implementa mecanismo lúdico ou promocional para engajamento de usuários.

### 8.8 Tratamento de Erros

Página naoEncontrada.js oferece feedback ao usuário quando rota não existe, melhorando experiência e evitando estados quebrados da interface.

---

## 9. FLUXO DE EXECUÇÃO DO SISTEMA

O fluxo de execução da aplicação segue o ciclo descrito abaixo:

```
1. Carregamento do index.html
                    ↓
2. Inicialização de main.js como módulo ES6
                    ↓
3. Importação de dependências (Lucide, rotas, navbar)
                    ↓
4. Geração dinâmica da navbar a partir do mapa de rotas
                    ↓
5. Chamada inicial de renderizarPagina()
                    ↓
6. Leitura do hash atual (ou default #buscar)
                    ↓
7. Busca de correspondência no array mapaderotas
                    ↓
        ┌─────────────────────────────────────┐
        │                                       │
    Encontrada?                            Não encontrada?
        │                                       │
        ↓                                       ↓
8a. Executa função da página         8b. Renderiza naoEncontrada
        ↓                                       ↓
9a. Renderiza HTML no #app          9b. Renderiza HTML no #app
        ↓                                       ↓
10a. Adiciona listeners de eventos  10b. Adiciona listeners de erro
        ↓                                       ↓
11a. Inicializa ícones Lucide       11b. Inicializa ícones Lucide
        └─────────────────────────────────────┘
                    ↓
12. Aguarda interação do usuário
                    ↓
13. Evento hashchange disparado
                    ↓
14. Retorna a passo 6
```

Este fluxo garante que cada mudança de rota dispare renderização apropriada.

---

## 10. BASE DE DADOS E INFORMAÇÕES

### 10.1 Dados Mockados

O projeto utiliza dados simulados armazenados em src/js/dadosMockados/dados.js, contendo array com 12 livros. Cada registro possui estrutura:

```javascript
{
    id: number,              // Identificador único
    titulo: string,          // Título do livro
    disciplina: string,      // Área temática
    conservacao: string,     // Estado: "Novo", "Excelente", "Seminovo", "Usado"
    ano: number,             // Ano de publicação
    distancia: number,       // Distância do vendedor (km)
    publicadorId: number,    // ID do vendedor
    publicadorNome: string,  // Nome do vendedor
    img: string              // URL de imagem (externa)
}
```

### 10.2 Distribuição de Dados

| Disciplina | Quantidade de Livros |
|------------|----------------------|
| Matemática | 3 |
| Física | 2 |
| Química | 2 |
| História | 1 |
| Literatura | 2 |
| Biologia | 2 |
| **TOTAL** | **12** |

### 10.3 Limitações

- Dados são estáticos e não persistidos;
- Sem autenticação real de usuários;
- Sem histórico de transações;
- Sem validação avançada.

---

## 11. ANÁLISE CRÍTICA E LIMITAÇÕES

### 11.1 Pontos Fortes

1. **Arquitetura modular:** Separação clara de responsabilidades facilita manutenção e testes.
2. **Uso de padrões:** Implementação consistente de módulos e exportações ES6.
3. **Ausência de dependências pesadas:** Vanilla JS evita over-engineering.
4. **Integração com Capacitor:** Demonstra pensamento multi-plataforma.
5. **Documentação:** README.md clara e acessível.
6. **Organização visual:** CSS separado por contexto melhora legibilidade.

### 11.2 Limitações e Desafios

| Limitação | Impacto | Severidade |
|-----------|--------|-----------|
| Dados mockados | Sem persistência real | Alta |
| Ausência de backend | Impossível salvar trocas | Alta |
| Sem autenticação | Segurança comprometida | Alta |
| Roteamento por hash | Menos SEO-friendly | Média |
| Validação mínima | Erros em produção | Média |
| Sem testes automatizados | Qualidade incerta | Média |
| CSS não modularizado | Escalabilidade visual reduzida | Baixa |
| Sem tratamento de cache | Performance em lento | Baixa |

### 11.3 Causas das Limitações

As limitações identificadas não representam deficiências de qualidade, mas refletem:

- **Propósito acadêmico:** Projeto didático não requer todos os componentes de produção;
- **Escopo controlado:** Foco em demonstração de conceitos específicos;
- **Fase de desenvolvimento:** Projeto ainda em evolução (conforme README).

---

## 12. RECOMENDAÇÕES PARA EVOLUÇÃO

### 12.1 Curto Prazo (1-2 meses)

1. **Implementar backend básico:** Node.js + Express para servir rotas API;
2. **Adicionar banco de dados:** PostgreSQL ou MongoDB para persistência;
3. **Implementar autenticação:** JWT ou OAuth para segurança de usuários;
4. **Validação de entrada:** Implementar validação client e server-side.

### 12.2 Médio Prazo (2-4 meses)

1. **Testes automatizados:** Implementar Jest para testes unitários;
2. **CSS preprocessor:** Migrar para SASS/SCSS para melhor organização;
3. **Tratamento de erro robusto:** Cenários de falha de conexão;
4. **Paginação:** Lidar com muitos registros;
5. **Filtros avançados:** Preço, distância, condição.

### 12.3 Longo Prazo (4+ meses)

1. **Integração com mapa real:** Google Maps ou Leaflet para localização;
2. **Sistema de mensagens:** Chat entre usuários;
3. **Upload de imagens:** Permitir que usuários carreguem fotos;
4. **Notificações:** Push notifications para eventos importantes;
5. **Publicação mobile:** Deploy em App Store e Google Play.

---

## 13. CONCLUSÃO

A análise técnica da branch versao-atual do repositório Ki-Oferta permite fundamentar as seguintes conclusões:

O projeto constitui exemplo relevante de aplicação web moderna estruturada em JavaScript puro, demonstrando implementação apropriada de arquitetura SPA, modularização de código e navegação dinâmica. A organização arquitetural reflete boas práticas de desenvolvimento, com separação clara de responsabilidades, reutilização de componentes e ausência de complexidade desnecessária.

A escolha tecnológica — Vanilla JS, Vite e Capacitor — configura-se como adequada ao contexto acadêmico e pedagógico, permitindo que estudantes compreendam conceitos fundamentais sem abstrações de frameworks. A intenção de convergência entre desenvolvimento web e mobile, implementada via Capacitor, demonstra pensamento estratégico sobre evolução da plataforma.

Identificam-se limitações esperadas em protótipo educacional, nomeadamente ausência de backend, persistência de dados, autenticação real e validação avançada. Tais limitações não representam deficiências de qualidade, mas refletem escopo controlado e fase de desenvolvimento. Caminho claro para evolução foi mapeado, com recomendações de tecnologias e implementações futuras.

Conclui-se que Ki-Oferta representa ferramenta promissora como protótipo educacional e demonstrativo de padrões web contemporâneos, com potencial significativo de transformação em solução funcional e deployável mediante implementação de módulos backend, persistência e segurança.

A qualidade da documentação, estrutura e padrões de código sugere que o projeto é adequado não apenas para aprendizagem, mas também como base para evolução contínua e adoção em ambientes de produção.

---

## 14. REFERÊNCIAS

ABNT. **NBR 14724:2011** – Informação e documentação — Trabalhos acadêmicos — Apresentação. Rio de Janeiro: Associação Brasileira de Normas Técnicas, 2011.

ABNT. **NBR 6027:2012** – Informação e documentação — Sumário — Apresentação. Rio de Janeiro: Associação Brasileira de Normas Técnicas, 2012.

ABNT. **NBR 10520:2023** – Informação e documentação — Citações em documentos — Apresentação. Rio de Janeiro: Associação Brasileira de Normas Técnicas, 2023.

CAPACITOR. **Capacitor Documentation.** Disponível em: https://capacitorjs.com/docs. Acesso em: 7 out. 2026.

ECMAScript. **ECMAScript 2015 Language Specification.** Disponível em: https://www.ecma-international.org/publications-and-standards/standards/ecma-262/. Acesso em: 7 out. 2026.

GITHUB. **Belle1205/ki-oferta.** Disponível em: https://github.com/Belle1205/ki-oferta/tree/versao-atual. Acesso em: 7 out. 2026.

LUCIDE ICONS. **Lucide Icons Documentation.** Disponível em: https://lucide.dev/. Acesso em: 7 out. 2026.

MDN WEB DOCS. **JavaScript.** Mozilla Developer Network. Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript. Acesso em: 7 out. 2026.

MDN WEB DOCS. **Web APIs — hashchange Event.** Mozilla Developer Network. Disponível em: https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event. Acesso em: 7 out. 2026.

VITE. **Getting Started.** Documentação oficial. Disponível em: https://vitejs.dev/guide/. Acesso em: 7 out. 2026.

---

**FIM DO RELATÓRIO**

---

## NOTAS PARA O ALUNO

Este relatório foi elaborado seguindo rigorosamente as normas ABNT e padrões acadêmicos formais. Para adequar o documento às exigências de sua instituição, recomenda-se:

1. **Folha de rosto personalizada:** Substitua os campos entre colchetes pelos dados reais de seu curso, professor e data de entrega.
2. **Número de páginas:** Este documento, quando impresso, ocupará aproximadamente 20-25 páginas, conforme formatação A4, 1.5 de espaçamento.
3. **Formatação:** Use font Times New Roman ou Arial, tamanho 12, espaçamento 1.5, margens de 2cm em todos os lados.
4. **Cópia e cola:** O documento está estruturado em Markdown para fácil importação em Word ou Google Docs. Recomenda-se copiar e colar em documento novo, ajustando formatação conforme necessidade.
5. **Revisão final:** Verifique ortografia, citações e referências antes de submissão.
