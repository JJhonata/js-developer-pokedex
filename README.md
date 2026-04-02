# Trilha JS Developer - Pokédex

Uma aplicação interativa de Pokédex construída com **HTML, CSS e JavaScript puro**, consumindo dados da **PokéAPI** para exibir informações detalhadas sobre Pokémons.

## 🎯 Objetivo

Este projeto é um desafio da trilha **JavaScript Developer** da **DIO (Digital Innovation One)**. O objetivo é criar uma Pokédex funcional que permite aos usuários explorar informações sobre os primeiros 151 Pokémons de forma intuitiva e visual.

## ✨ Funcionalidades

- 📱 **Interface Responsiva**: Design adaptável para desktop, tablet e mobile
- 🎴 **Listagem de Pokémons**: Exibição em grid dos 151 Pokémons originais
- 🖱️ **Modal Interativo**: Clique em qualquer card para ver detalhes completos
- 🎬 **Imagens Animadas**: Sprites animados em GIF quando disponíveis na API
- 📊 **Informações Detalhadas**: 
  - Número da Pokédex
  - Tipo(s)
  - Altura e Peso
  - Habilidades
  - Primeiros 5 Ataques
  - Stats (HP, Ataque, Defesa, Ataque Especial, Defesa Especial, Velocidade)
- 📂 **Paginação**: Botão "Load More" para carregar 10 Pokémons por vez
- 🎨 **Cores por Tipo**: Cards com cores características do tipo de cada Pokémon

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos responsivos e grid layout
- **JavaScript ES6+** - Lógica da aplicação
- **Fetch API** - Requisições HTTP
- **Promises** - Tratamento de operações assíncronas
- **PokéAPI** - API REST com dados de Pokémons

## 📋 Requisitos

- Navegador moderno com suporte a:
  - ES6+
  - Fetch API
  - CSS Grid e Flexbox
  - Aplicações de cache

## 🚀 Como Usar

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/js-developer-pokedex.git
cd js-developer-pokedex
```

### 2. Abrir no navegador
```bash
# Simplesmente abra o arquivo index.html no seu navegador
# Ou use um servidor local:
python -m http.server 8000
# Depois acesse: http://localhost:8000
```

### 3. Navegar pela Pokédex
- Scroll pela listagem ou clique em "Load More" para carregar mais Pokémons
- Clique em qualquer card para abrir o modal com detalhes
- Clique no X ou fora da janela para fechar o modal

## 📁 Estrutura do Projeto

```
js-developer-pokedex/
├── index.html              # Página principal
├── README.md              # Documentação
├── assets/
│   ├── css/
│   │   ├── global.css     # Estilos globais
│   │   └── pokedex.css    # Estilos específicos (incluindo modal)
│   └── js/
│       ├── main.js        # Lógica principal e DOM
│       ├── poke-api.js    # Integração com a API
│       └── pokemon-model.js # Classe do modelo Pokémon
```

## 🔧 Detalhes Técnicos

### Classe Pokemon
```javascript
class Pokemon {
    number;        // ID do Pokémon
    name;          // Nome
    type;          // Tipo principal
    types;         // Array de tipos
    photo;         // URL da imagem (animada quando possível)
    height;        // Altura em metros
    weight;        // Peso em kg
    abilities;     // Array de habilidades
    moves;         // Array de ataques (primeiros 5)
    stats;         // Array com stats do Pokémon
}
```

### Fluxo de Dados
1. **Requisição Inicial**: Fetch na PokéAPI com paginação (10 por página)
2. **Detalhes**: Para cada Pokémon, busca informações detalhadas
3. **Conversão**: Transforms os dados em objetos `Pokemon`
4. **Renderização**: HTML dinâmico com template strings
5. **Interatividade**: Event listeners para cliques nos cards

### Sistema de Fallback de Imagens
A aplicação tenta carregar imagens nesta ordem:
1. Sprite animado (GIF) - Black/White animated
2. Artwork oficial
3. Dream World
4. Sprite padrão
5. Placeholder caso falhem todas

## 🎨 Paleta de Cores por Tipo

Os cards utilizam cores características:
- 🔴 Fire (Fogo)
- 💧 Water (Água)
- 🌿 Grass (Grama)
- ⚡ Electric (Elétrico)
- E muitos outros tipos...

## 📱 Responsividade

- **Mobile**: 1 coluna
- **Tablet** (380px+): 2 colunas
- **Desktop** (576px+): 3 colunas
- **Ultra Wide** (992px+): 4 colunas

## 🔌 API Utilizada

[PokéAPI - The Free Pokémon API](https://pokeapi.co/)

Endpoints principais:
```
https://pokeapi.co/api/v2/pokemon?offset=0&limit=10
https://pokeapi.co/api/v2/pokemon/{id}
```

## 💡 Diferenciais Implementados

✅ Modal centralizado com informações completas
✅ Imagens animadas quando disponíveis
✅ Stats visuais dos Pokémons
✅ Hover effects nos cards
✅ Fechamento de modal por múltiplas formas
✅ Design moderno e atrativo
✅ Código bem estruturado e comentado

## 🚦 Status do Projeto

- ✅ Implementação base completa
- ✅ Modal de detalhes
- ✅ Imagens animadas
- ✅ Responsividade
- ⏳ Possíveis melhorias futuras:
  - Filtro por tipo
  - Busca por nome
  - Sistema de favoritos
  - Persistência local (localStorage)

## 📝 Licença

Este projeto é um desafio educacional da DIO.

## 👨‍💻 Autor

Desenvolvido como parte do desafio **Trilha JS Developer** da **DIO**.

---