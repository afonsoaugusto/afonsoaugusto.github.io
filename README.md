# Afonso Rodrigues - DevOps & SRE Blog

Blog pessoal sobre DevOps, SRE, Kubernetes e AWS, construído com Jekyll e hospedado no GitHub Pages.

## 🚀 Características

- **Design Responsivo**: Interface moderna e adaptável para todos os dispositivos
- **SEO Otimizado**: Meta tags, sitemap XML, dados estruturados e otimizações para mecanismos de busca
- **Performance**: CSS/JS minificado, compressão de imagens e cache otimizado
- **Acessibilidade**: Navegação por teclado, ARIA labels e estrutura semântica
- **Feed RSS**: Assinatura automática de novos posts
- **Sistema de Comentários**: Integração com Disqus
- **Navegação Intuitiva**: Menu responsivo, busca e categorização
- **Tema Moderno**: Interface limpa e profissional

## 🛠️ Tecnologias Utilizadas

- **Jekyll 4.x**: Gerador de sites estáticos
- **GitHub Pages**: Hospedagem gratuita
- **HTML5/CSS3**: Estrutura e estilização moderna
- **JavaScript ES6+**: Funcionalidades interativas
- **Liquid**: Sistema de templates do Jekyll
- **Rouge**: Syntax highlighting para código
- **Kramdown**: Processador Markdown

## 🚀 Como Executar Localmente

### Método 1: Com Docker (Recomendado)

```bash
docker run --rm -it --volume="$PWD:/srv/jekyll" -p 4000:4000 jekyll/jekyll /bin/bash -c "chmod a+wx . && jekyll build -V && jekyll s --force_polling --incremental --watch --trace"
```

### Método 2: Com Ruby Local

```bash
# Instalar dependências
bundle install

# Executar servidor local
bundle exec jekyll serve

# Acessar em http://localhost:4000
```

## 📝 Escrevendo Posts

### Estrutura do Front Matter

```yaml
---
layout: post
title: "Título do Post"
date: 2024-01-01 12:00:00 +0000
categories: [devops, kubernetes]
tags: [docker, containers, orchestration]
description: "Descrição do post para SEO"
image: /assets/images/post-image.jpg
toc: true
---
```

## 🎨 Personalização

Edite o arquivo `_config.yml` para personalizar:
- Informações do autor
- Redes sociais
- Plugins
- Configurações de SEO
- Analytics

## 📞 Contato

- **Website**: [afonsorodrigues.com](https://afonsorodrigues.com)
- **GitHub**: [@afonsoaugusto](https://github.com/afonsoaugusto)
- **LinkedIn**: [Afonso Rodrigues](https://linkedin.com/in/afonsoavr)
- **Twitter**: [@Afonsoavr](https://twitter.com/Afonsoavr)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!
