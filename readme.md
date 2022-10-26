# Ignite trilha nodejs Chapter 02 - Criando a API com NodejS

## Iniciando o projeto

```bash

yarn init -y

```

## Instalando as dependências

```bash

yarn add express
yarn add -D eslint@latest
yarn add -D @typescript-eslint/eslint-plugin@latest
yarn add -D eslint-config-airbnb-base@latest 
yarn add -D eslint-plugin-import@latest
yarn add -D @typescript-eslint/parser@latest 
yarn add -D eslint-plugin-import-helpers
yarn add -D eslint-import-resolver-typescript
yarn add -D prettier eslint-config-prettier 
yarn add -D eslint-plugin-prettier
yarn add -D @types/express
yarn add -D typescript
yarn add ts-node
yarn add ts-node-dev

```

Packages insalados

| Package | Description |
| --- | --- |
| express | Framework para criação de API |
| eslint | Ferramenta para padronização de código |
| @typescript-eslint/eslint-plugin | Plugin para o eslint |
| eslint-config-airbnb-base | Plugin para o eslint |
| eslint-plugin-import | Plugin para o eslint |
| @typescript-eslint/parser | Plugin para o eslint |
| eslint-plugin-import-helpers | Plugin para o eslint |
| eslint-import-resolver-typescript | Plugin para o eslint |
| prettier | Plugin para o eslint |
| eslint-config-prettier | Plugin para o eslint |
| eslint-plugin-prettier | Plugin para o eslint |
| @types/express | Tipagem para o express |
| typescript | Linguagem para o node |
| ts-node | Plugin para o typescript |
| ts-node-dev | Plugin para o typescript |

### Configurando o script de start em desenvolvimento

```json

"scripts": {
    "dev": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"
 },

```

Exmplicação dos comandos enviados no Script de start

| parâmetro | descrição |
| --- | --- |
| --transpile-only | Não verifica se o código está correto, apenas transpila |
| --ignore-watch node_modules | Ignora a pasta node_modules |
| --respawn | Reinicia o servidor sempre que houver alteração |

## Configurando o debugger

Crie a pasta .vscode

Adicione o seguinte arquivo com o nome launch.json

```json

{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Debugger",
            "type": "node",
            "request": "attach",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "outFiles": [
                "${workspaceFolder}/**/*.js"
            ]
        }
    ]
}
    
```

Ajuste o script de start para adicionando o `--inspect` para que o debugger consiga se conectar ao servidor

```json

"scripts": {
    "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules --respawn src/server.ts"
 },

```
