#!/bin/bash
# Comando para automatizar o deploy do portfólio

# Obter o diretório do script para garantir que os comandos rodem no local correto
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

echo "🚀 Iniciando deploy do portfólio..."

# Rodar o build
echo "📦 Rodando build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build finalizado com sucesso. Enviando arquivos para o servidor..."
    # Sincronizar os arquivos via SCP
    scp -r dist/* root@167.99.237.151:/var/www/portfolio/
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deploy concluído com sucesso!"
    else
        echo "❌ Erro ao enviar arquivos via SCP."
        exit 1
    fi
else
    echo "❌ Erro durante o build. O deploy foi cancelado."
    exit 1
fi
