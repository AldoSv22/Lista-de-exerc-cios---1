# Tecnologias e Ferramentas Utilizadas

## Tecnologias

- **JavaScript**: linguagem que utilizei para desenvolver o código. É uma linguagem de programação bastante usada tanto para aplicações web quanto para scripts executados no terminal.
- **Node.js**: ambiente de execução que permite rodar código JavaScript fora do navegador. Usei o Node para conseguir rodar o script diretamente pelo terminal.

## Ferramentas

- **prompt-sync**: biblioteca que permite capturar dados digitados no terminal. Com ela, dá pra interagir com o usuário de forma simples durante a execução do programa.

---

## Como acessar e executar

Abaixo está o passo a passo completo para clonar o projeto, instalar tudo que for necessário e executar os scripts localmente.

### 1. Instalar o Node.js e o Git

Para rodar esse projeto, é preciso ter o **Node.js** e o **Git** instalados na sua máquina.

- Baixar o Node.js: [https://nodejs.org](https://nodejs.org)
- Baixar o Git: [https://git-scm.com](https://git-scm.com)

Depois de instalar, abra o terminal e execute os comandos abaixo para verificar se está tudo funcionando:

```bash
node -v
npm -v
git --version
```

Se os comandos acima retornarem as versões instaladas, então está tudo pronto para seguir.

---

### 2. Clonar o repositório

Com o Git instalado, abra o terminal na pasta onde deseja salvar o projeto e execute:

```bash
git clone https://github.com/seu-usuario/seu-repo
cd seu-repo
```

> Substitua pelo link real do seu repositório, se for usar esse markdown publicamente.

---

### 3. Instalar a dependência `prompt-sync`

Dentro da pasta do projeto (após o `cd` acima), é necessário instalar a biblioteca `prompt-sync`, que é usada no código para ler entradas do usuário via terminal. Execute o seguinte comando:

```bash
npm install prompt-sync
```

Esse comando vai criar a pasta `node_modules` e os arquivos necessários para que o projeto funcione corretamente.

---

### 4. Executar o script

Depois que tudo estiver instalado, você já pode rodar qualquer um dos scripts do projeto. Por exemplo:

```bash
node 02-segundoex.js
```

Se houver outros arquivos `.js` no projeto, é só substituir o nome no comando acima pelo nome do script que quiser rodar.

---

Seguindo esses passos, o projeto já estará funcionando normalmente na sua máquina.
