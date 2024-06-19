# Formiga Verde

**Formiga-Verde** é um projeto de teste com o objetivo:

Construir uma aplicação backend em Node.js que exponha um endpoint REST capaz de
retornar agregações em diferentes resoluções para um determinado dispositivo. O foco será
na manipulação de dados de séries temporais, particularmente dados de consumo de
energia elétrica.

<hr>

## Set-up

Requirimentos: TypesCript, NodeJS e YARN

Caso nao tenha YARN instalado:

https://classic.yarnpkg.com/lang/en/docs/install

Para rodar basta utilizar os commandos

Para instalar
```
yarn
```

Para rodar o ambiente
```
yarn dev
```

Para rodar os testes

```
yarn test
```

<hr>

Caso haja algum problema pode se utilizar o NPM normalmente

```
npm i
```

Para rodar o ambiente
```
npm run dev
```

Para rodar os testes

```
npm run test
```

## Exemplo de Requisição

![image](https://github.com/viniciuspx/formiga-verde/assets/22032075/9b262ee1-bc1a-4f88-94f6-b2699dbb7aea)

## Observações

Sobre os tipos de resolution:

```
resolution: Pode assumir os seguintes valores:
a. hour: agregação dos dados de forma horária.
b. day: agregação dos dados de forma diária (default).
c. raw: nenhuma agregação.
```

Caso resolution esteja vazio na query do path, utilizamos day como default.

## Base de Dados

A base de dados padrao é o arquivo [test.csv](https://github.com/viniciuspx/formiga-verde/blob/main/test.csv)
