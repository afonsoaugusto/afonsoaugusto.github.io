---
title: "Migração Jekyll para Hugo: Guia Completo"
date: 2025-10-15 10:00:00 +0000
categories: ["tutorial"]
tags: ["jekyll", "hugo", "migração", "static-site-generator", "github-pages"]
description: "Guia completo para migrar seu site Jekyll para Hugo, incluindo configuração, migração de conteúdo e deploy no GitHub Pages."
draft: false
---


# Migração Jekyll para Hugo: Guia Completo

Se você está pensando em migrar seu site Jekyll para Hugo, este guia completo vai te ajudar a fazer essa transição de forma eficiente e sem perder funcionalidades.

## Por que migrar para Hugo?

### Vantagens do Hugo sobre Jekyll

- **🚀 Performance Superior**: Hugo é extremamente rápido, processando milhares de páginas em segundos
- **📦 Simplicidade**: Configuração mais simples e estrutura de diretórios mais intuitiva
- **🔧 Manutenção**: Menos dependências e problemas de compatibilidade
- **⚡ Build Rápido**: Tempos de build significativamente menores
- **🎯 Foco em Conteúdo**: Melhor para blogs e sites estáticos

### Compatibilidade com GitHub Pages

✅ **Totalmente compatível** - Hugo é suportado nativamente pelo GitHub Pages
✅ **Deploy automático** - Funciona perfeitamente com GitHub Actions
✅ **Custo zero** - Mantém a hospedagem gratuita

## Pré-requisitos

### Instalação do Hugo

```bash
# macOS
brew install hugo

# Ubuntu/Debian
sudo apt-get install hugo

# Windows (Chocolatey)
choco install hugo

# Verificar instalação
hugo version
```

## Fase 1: Preparação e Estrutura Base

### 1.1 Criar Novo Site Hugo

```bash
# Criar novo site
hugo new site meu-blog-hugo
cd meu-blog-hugo

# Inicializar git
git init
```

### 1.2 Estrutura de Diretórios Hugo

```
meu-blog-hugo/
├── archetypes/          # Templates para novos posts
├── assets/             # CSS, JS, imagens (processados)
├── content/            # Conteúdo (posts, páginas)
│   ├── posts/          # Posts do blog
│   └── _index.md       # Página inicial
├── data/               # Dados estruturados
├── layouts/            # Templates HTML
├── static/             # Arquivos estáticos (copiados diretamente)
├── themes/             # Temas
├── config.toml         # Configuração principal
└── public/             # Site gerado (não versionar)
```

## Fase 2: Migração de Configuração

### 2.1 Converter _config.yml → config.toml

```toml
# config.toml
baseURL = "https://afonsorodrigues.com"
languageCode = "pt-br"
title = "Afonso Rodrigues - DevOps & SRE Blog"
theme = "hugo-theme-stack"  # ou outro tema

[params]
  description = "Anotações, Scripts e Dicas de DevOps, SRE, Kubernetes e AWS"
  author = "Afonso Rodrigues"
  email = "afonsoaugustoventura@gmail.com"
  
  [params.social]
    github = "afonsoaugusto"
    twitter = "Afonsoavr"
    linkedin = "in/afonsoavr"
    instagram = "afonsoavr"

[markup]
  [markup.highlight]
    style = "github"
    lineNos = true

[menu]
  [[menu.main]]
    name = "Home"
    url = "/"
    weight = 1
  [[menu.main]]
    name = "Sobre"
    url = "/about"
    weight = 2
  [[menu.main]]
    name = "Utils"
    url = "/utils"
    weight = 3
  [[menu.main]]
    name = "Arquivo"
    url = "/archive"
    weight = 4
  [[menu.main]]
    name = "Tags"
    url = "/tags"
    weight = 5
```

## Fase 3: Migração de Conteúdo

### 3.1 Migrar Posts

```bash
# Copiar posts do Jekyll
cp -r /caminho/jekyll/_posts/* content/posts/

# Renomear arquivos (remover data do nome)
# 2020-01-13-welcome-to-here.markdown → welcome-to-here.md
```

### 3.2 Ajustar Front Matter dos Posts

```markdown
# Antes (Jekyll)
---
layout: post
title: "Welcome to Here!"
date: 2020-01-13 13:15:00 +0000
categories: welcome
---

# Depois (Hugo)
---
title: "Welcome to Here!"
date: 2020-01-13T13:15:00Z
categories: ["welcome"]
draft: false
---
```

### 3.3 Migrar Páginas

```bash
# Criar páginas
mkdir -p content/
cp about.markdown content/about.md
cp pages.markdown content/pages.md
```

## Fase 4: Migração da Página Utils

### 4.1 ✅ FUNCIONALIDADE UTILS É TOTALMENTE COMPATÍVEL

A página `utils.html` pode ser migrada **100%** para Hugo! Aqui está como:

### 4.2 Criar Página Utils em Hugo

```bash
# Criar página utils
hugo new content/utils.md
```

### 4.3 Conteúdo da Página Utils

```markdown
---
title: "Utils"
description: "Ferramentas úteis - Contador de caracteres e conversor de horário UTC/GMT-3"
date: 2024-01-01
layout: "utils"
---

<!-- O HTML da página utils.html pode ser copiado diretamente -->
```

### 4.4 Layout Utils (layouts/utils.html)

```html
{{ define "main" }}
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div class="bg-white rounded-lg shadow-lg p-8">
    <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center">Ferramentas Úteis</h1>
    
    <!-- Contador de Caracteres -->
    <div class="mb-12">
      <!-- ... resto do HTML da utils.html ... -->
    </div>
    
    <!-- Conversor de Horário -->
    <div class="mb-8">
      <!-- ... resto do HTML da utils.html ... -->
    </div>
  </div>
</div>

<script>
// Todo o JavaScript da utils.html pode ser copiado diretamente
// ... código JavaScript existente ...
</script>
{{ end }}
```

### 4.5 Assets JavaScript

```bash
# Copiar JS para assets
mkdir -p assets/js/
cp assets/js/main.js assets/js/main.js
```

## Fase 5: Migração de Layouts e Templates

### 5.1 Layout Base (layouts/_default/baseof.html)

```html
<!DOCTYPE html>
<html lang="{{ .Site.LanguageCode }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ if .Title }}{{ .Title }} | {{ end }}{{ .Site.Title }}</title>
    <link rel="stylesheet" href="{{ "css/main.css" | relURL }}">
</head>
<body>
    {{ partial "header.html" . }}
    <main>
        {{ block "main" . }}{{ end }}
    </main>
    {{ partial "footer.html" . }}
    <script src="{{ "js/main.js" | relURL }}"></script>
</body>
</html>
```

### 5.2 Header (layouts/partials/header.html)

```html
<header>
    <nav>
        <a href="{{ "/" | relURL }}">Home</a>
        <a href="{{ "/about" | relURL }}">Sobre</a>
        <a href="{{ "/utils" | relURL }}">Utils</a>
        <a href="{{ "/archive" | relURL }}">Arquivo</a>
        <a href="{{ "/tags" | relURL }}">Tags</a>
    </nav>
</header>
```

## Fase 6: Migração de Assets

### 6.1 CSS e JavaScript

```bash
# Copiar assets
cp -r assets/css/* static/css/
cp -r assets/js/* static/js/
cp -r assets/images/* static/images/
```

### 6.2 Configurar Processamento de Assets

```toml
# config.toml
[params]
  [params.assets]
    css = ["css/main.css"]
    js = ["js/main.js"]
```

## Fase 7: Configuração do GitHub Actions

### 7.1 Workflow Hugo (.github/workflows/hugo.yml)

```yaml
name: Hugo CI

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
      with:
        submodules: true
        fetch-depth: 0

    - name: Setup Hugo
      uses: peaceiris/actions-hugo@v2
      with:
        hugo-version: '0.111.3'
        extended: true

    - name: Build
      run: hugo --minify

    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/master'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./public
```

## Fase 8: Teste e Deploy

### 8.1 Teste Local

```bash
# Servidor de desenvolvimento
hugo server -D

# Build para produção
hugo --minify
```

### 8.2 Deploy

```bash
# Commit e push
git add .
git commit -m "Migração Jekyll → Hugo"
git push origin master
```

## ✅ Compatibilidade da Página Utils

### Funcionalidades que FUNCIONAM 100%:

- ✅ **Contador de caracteres** (JavaScript puro)
- ✅ **Conversor UTC ↔ GMT-3** (JavaScript puro)
- ✅ **Horário atual em tempo real** (JavaScript puro)
- ✅ **Interface responsiva** (CSS/Tailwind)
- ✅ **Todas as interações JavaScript**

### Vantagens no Hugo:

- 🚀 **Performance superior** (build mais rápido)
- 📱 **Melhor SEO** nativo
- 🔧 **Configuração mais simples**
- 📊 **Melhor organização** de assets

## ⏱️ Tempo Estimado Total:

- **Preparação**: 30 min
- **Migração de conteúdo**: 1-2 horas
- **Configuração de layouts**: 1-2 horas
- **Teste e ajustes**: 1 hora
- **Deploy**: 30 min

**Total: 4-6 horas**

## Alternativas ao Hugo

### 1. **Eleventy (11ty)**
- **Linguagem**: JavaScript/Node.js
- **Vantagens**: Máxima flexibilidade, migração quase automática
- **Dificuldade**: Média

### 2. **Astro**
- **Linguagem**: JavaScript/TypeScript
- **Vantagens**: Performance excepcional, foco em conteúdo
- **Dificuldade**: Média-Alta

### 3. **GitBook**
- **Vantagens**: Editor visual, migração automática
- **Dificuldade**: Baixa

## Conclusão

A migração do Jekyll para Hugo é **simples** e oferece **benefícios significativos**:

- 🚀 **Performance superior**
- 🔧 **Manutenção mais fácil**
- 📱 **Melhor experiência de desenvolvimento**
- ✅ **Compatibilidade total** com GitHub Pages
- 🎯 **Funcionalidades preservadas** (incluindo página Utils)

A página Utils funcionará **perfeitamente** no Hugo, mantendo todas as funcionalidades JavaScript e a interface responsiva.

**Recomendação**: Hugo é a melhor escolha para migração do Jekyll, oferecendo o melhor custo-benefício entre simplicidade, performance e compatibilidade.

---

*Este guia foi criado para ajudar na migração de sites Jekyll para Hugo, mantendo todas as funcionalidades e melhorando a performance.*
