# Afonso Rodrigues – Blog (Hugo + PaperMod)

Blog pessoal com Hugo e tema [PaperMod](https://github.com/adityatelange/hugo-PaperMod), publicado em [afonsorodrigues.com](https://afonsorodrigues.com).

## Pré-requisitos

- [Hugo Extended](https://gohugo.io/installation/) (recomendado 0.115+)

## Build local

O tema é referenciado como **submodule Git**. Antes do primeiro build, inicialize o submodule:

```bash
git submodule update --init --recursive
```

Depois, rode o servidor de desenvolvimento:

```bash
hugo server -D
```

Acesse `http://localhost:1313`.

## Build para produção

```bash
hugo --minify
```

A pasta `public/` conterá o site estático (usado pelo GitHub Pages na branch `gh-pages` ou na pasta de deploy configurada no workflow).

## Estrutura

- `config.toml` – configuração do Hugo e do PaperMod
- `content/` – posts e páginas em Markdown
- `layouts/` – overrides (ex.: página Utils, render hook de imagens)
- `static/` – imagens, JS, favicon, CNAME, robots.txt
- `themes/PaperMod` – tema (submodule)
- `.github/workflows/hugo.yml` – CI: build e deploy no GitHub Pages

## Documentação de melhorias

Ver [docs/ANALISE-E-MELHORIAS.md](docs/ANALISE-E-MELHORIAS.md) para o relatório de análise e checklist de melhorias aplicadas.
