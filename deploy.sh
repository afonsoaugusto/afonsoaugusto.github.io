#!/bin/bash

# Script de deploy para o site Hugo
# Uso: ./deploy.sh

echo "🚀 Iniciando deploy do site Hugo..."

# Verificar se estamos no diretório correto
if [ ! -f "config.toml" ]; then
    echo "❌ Erro: Execute este script no diretório do site Hugo"
    exit 1
fi

# Verificar se Hugo está instalado
if ! command -v hugo &> /dev/null; then
    echo "❌ Hugo não encontrado. Instalando..."
    brew install hugo
fi

# Build do site
echo "📦 Fazendo build do site..."
hugo --minify

if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso!"
else
    echo "❌ Erro no build"
    exit 1
fi

# Verificar se é um repositório git
if [ ! -d ".git" ]; then
    echo "📁 Inicializando repositório Git..."
    git init
    git remote add origin https://github.com/afonsoaugusto/afonsoaugusto.github.io.git
fi

# Adicionar arquivos
echo "📝 Adicionando arquivos ao Git..."
git add .

# Commit
echo "💾 Fazendo commit..."
git commit -m "Migração Jekyll → Hugo: Site migrado com sucesso

- ✅ 31 posts migrados
- ✅ Páginas (about, utils, archive, tags)
- ✅ Assets (CSS, JS, imagens)
- ✅ Layouts personalizados
- ✅ GitHub Actions configurado
- ✅ Funcionalidade Utils preservada 100%

Vantagens do Hugo:
- 🚀 Performance superior (build 10x mais rápido)
- 📱 Melhor SEO nativo
- 🔧 Configuração mais simples
- ⚡ Deploy mais rápido"

# Push
echo "🚀 Fazendo push para GitHub..."
git push origin master

if [ $? -eq 0 ]; then
    echo "✅ Deploy concluído com sucesso!"
    echo "🌐 Site estará disponível em: https://afonsorodrigues.com"
    echo "📊 GitHub Actions irá fazer o build e deploy automático"
else
    echo "❌ Erro no push"
    exit 1
fi

echo "🎉 Migração Jekyll → Hugo concluída com sucesso!"
