# PADRONIZANDO MENSAGENS DE COMMIT

## Introdução

Veremos como estruturar as mensagens de commit do repositório, criando um padrão a ser seguido por todos os desenvolvedores do time, fazendo uso de ferramentas que auxiliam a escrita dessas mensagens além de validar e garantir que as regras definidas sejam seguidas.
Utilizaremos as ferramentas, Commitlint, Husky e Cz-customizable. Todas elas possuem como pré requisito o node.js e se integram com o gerenciamento de versão Git.
Apesar da sua linguagem de desenvolvimento, javascript, e o uso do Node.js, repositórios que armazenam código em qualquer linguagem podem ser utilizados.

## Ferramentas que serão utilizadas 
-[commitlint](https://github.com/conventional-changelog/commitlint) O commitlint é uma ferramenta responsável por ajudar a manter os commits padronizados, que através de um conjunto de regras, verifica se a mensagem está adequada.

-[cz-customizable](https://github.com/leoforfree/cz-customizable) O cz-customizable é uma ferramenta responsável por auxiliar o desenvolvedor durante a escrita da mensagem.

-[husky](https://github.com/typicode/husky) O Husky é uma ferramenta capaz de adicionar scripts (hooks) disparados antes (pre-commit) ou após (post-commit) o commit. Ele será responsável por acionar o commitlint antes que o código seja “comitado”, que verificará se a mensagem está no padrão correto.

## Pré-requisitos
As ferramenta utilizadas têm como pré-requisito o Nodejs. A seguir, veremos como elas podem ser instaladas em computadores Linux e macOS.

## Instalação

Antes de executar a instalação propriamente dita, é necessário criar  o arquivo package.json que é responsável por armazenar as dependências e as configurações de todas as ferramentas que vamos utilizar. No terminal, execute o comando a seguir, para criar um arquivo package.json, na pasta do projeto, caso ele ainda não exista.
```sh
npm init -y
```
Instale o commitlint cli e conventional config executando o comando abaixo, na pasta do projeto.
```sh
npm install --save-dev @commitlint/{config-conventional,cli}
```
Execute o comando abaixo para instalar o Husky.
```sh
npm install husky -D
```
Agora é necessário configurar o Husky para que ele chame o commitlint, que verificará a mensagem de commit. Essa etapa pode ser feita adicionado o trecho abaixo no arquivo package.json.
```sh
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"   
    }
  }
```
O próximo passo é instalar o cz-customizable através do seguinte comando:
```sh
npm install cz-customizable --save-dev
```
Em seguida adicione o script abaixo no arquivo package.json.
```sh
"scripts" : {
  ...
  "commit": "./node_modules/cz-customizable/standalone.js"
}
```
Agora, substitua os arquivos de configuração das ferramentas na pasta do projeto, para que os commits sigam o padrão definido pela empresa. Além disso, no diretório "node_modules", substitua a pasta cz-customizable.

-

Por fim, adicione os trechos abaixo no arquivo .ignore.

```sh
.cz-config.js
```
```sh
commitlint.config.js 
```

## Realizando o commit e testando as ferramentas

Com as ferramentas instaladas, adicione as mudanças realizadas ao gerenciamento de versão e dispare o commit com os comandos abaixo:
```sh
git add .
```
```sh
npm run commit
```

## Links de referência

https://github.com/typicode/husky

https://github.com/leoforfree/cz-customizable

https://github.com/conventional-changelog/commitlint

https://www.dextra.com.br/blog/3-ferramentas-para-tornar-os-commits-do-seu-repositorio-mais-profissionais/


