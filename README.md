# Afonso Rodrigues - DevOps & SRE Blog

Blog pessoal sobre DevOps, SRE, Kubernetes e AWS, migrado de Jekyll para Hugo com tema PaperMod.

## 🚀 Características

* **Tema PaperMod**: Design moderno, responsivo e otimizado
* **Performance Superior**: Build 10x mais rápido que Jekyll
* **SEO Otimizado**: Meta tags, sitemap XML e dados estruturados
* **Acessibilidade**: Navegação por teclado, ARIA labels e estrutura semântica
* **Feed RSS**: Assinatura automática de novos posts
* **Sistema de Comentários**: Integração com Disqus
* **Ferramentas Utils**: Contador de caracteres e conversor UTC/GMT-3
* **Modo Claro/Escuro**: Tema automático baseado na preferência do sistema

## 🛠️ Tecnologias Utilizadas

* **Hugo 0.151.0**: Gerador de sites estáticos moderno
* **PaperMod Theme**: Tema responsivo e otimizado
* **GitHub Pages**: Hospedagem gratuita
* **GitHub Actions**: Deploy automático
* **HTML5/CSS3**: Estrutura e estilização moderna
* **JavaScript ES6+**: Funcionalidades interativas

## 🚀 Como Executar Localmente

### Pré-requisitos
- Hugo Extended (versão 0.151.0 ou superior)
- Git

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/afonsoaugusto/afonsoaugusto.github.io.git
cd afonsoaugusto.github.io

# Inicializar submodules (tema)
git submodule update --init --recursive

# Executar servidor local
hugo server

# Acessar em http://localhost:1313
```

### Build para Produção

```bash
# Gerar site estático
hugo --minify

# O conteúdo será gerado na pasta public/
```

## 📝 Estrutura do Projeto

```
├── .github/workflows/    # GitHub Actions
├── archetypes/           # Templates de conteúdo
├── content/              # Conteúdo do site
│   ├── posts/           # Posts do blog
│   ├── about.md         # Página sobre
│   ├── utils.md         # Página de ferramentas
│   └── ...
├── layouts/             # Layouts customizados
│   └── utils.html       # Layout da página Utils
├── static/              # Arquivos estáticos
├── themes/              # Temas (PaperMod)
├── config.toml          # Configuração do Hugo
└── deploy.sh            # Script de deploy
```

## 🎨 Personalização

### Configuração Principal
Edite o arquivo `config.toml` para personalizar:

* Informações do autor e redes sociais
* Configurações do tema PaperMod
* Analytics (Google Analytics)
* Comentários (Disqus)
* SEO e meta tags

### Layout Customizado
O arquivo `layouts/utils.html` contém o layout customizado para a página de ferramentas, incluindo:

* Contador de caracteres em tempo real
* Conversor UTC ↔ GMT-3
* Interface responsiva
* JavaScript puro (funciona offline)

## 🔧 Deploy

### Deploy Automático
O site é automaticamente deployado via GitHub Actions quando há push na branch `main`:

1. Build do site com Hugo
2. Deploy para GitHub Pages
3. Site disponível em https://afonsorodrigues.com

### Deploy Manual
```bash
# Executar script de deploy
./deploy.sh
```

## 📊 Migração Jekyll → Hugo

### Vantagens da Migração
- ✅ **Performance**: Build 10x mais rápido
- ✅ **Simplicidade**: Configuração mais simples
- ✅ **Manutenção**: Tema atualizado automaticamente
- ✅ **SEO**: Melhor otimização nativa
- ✅ **Responsividade**: Design moderno e adaptável

### Funcionalidades Preservadas
- ✅ Todos os posts migrados (31 posts)
- ✅ Páginas estáticas (about, utils, archive, tags)
- ✅ Assets (imagens, favicon, robots.txt)
- ✅ Analytics e comentários
- ✅ SEO e meta tags
- ✅ Ferramentas Utils funcionais

## 📞 Contato

* **Website**: [afonsorodrigues.com](https://afonsorodrigues.com)
* **GitHub**: [@afonsoaugusto](https://github.com/afonsoaugusto)
* **LinkedIn**: [Afonso Rodrigues](https://linkedin.com/in/afonsoavr)
* **Twitter**: [@Afonsoavr](https://twitter.com/Afonsoavr)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!