# Projeto de Testes de API com Cypress
Este projeto contém testes automatizados de API utilizando o Cypress, com foco na validação de status e comportamento dos endpoints.

## Objetivo
Garantir a qualidade dos serviços de API através de testes automatizados, validando:

- Status HTTP das requisições
- Estrutura dos dados retornados
- Regras de negócio (quando aplicável)
- Tratamento de erros

## Tecnologias utilizadas
- Node.js
- Cypress
- JavaScript

## Estrutura do projeto
cypress/
├── e2e/
│ ├── api/
│ │ ├── agi_api.cy.js # Testes de API
├── support/
│ ├── e2e.js # Configurações globais
cypress.config.js
package.json

## Pré-requisitos
Antes de executar o projeto, certifique-se de ter instalado:

- Node.js (versão LTS recomendada)
- npm ou yarn

Verifique com:

```bash
node -v
npm -v

## Instalação
git clone https://github.com/diegodiasgit/agi_api.git
cd agi_api

npm install

## Execução dos teste
npx cypress open
