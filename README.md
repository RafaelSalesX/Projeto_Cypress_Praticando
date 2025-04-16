# Projeto Cypress Praticando

Este projeto tem como objetivo praticar testes automatizados utilizando o **Cypress**, com a inclusão de relatórios de execução e a preparação para integrar uma pipeline no futuro. O foco é reforçar os conceitos do Cypress e aprender a gerar relatórios de testes que podem ser usados para analisar o desempenho e a qualidade dos testes automatizados.

## Pré-requisitos

Antes de rodar os testes, você precisa ter o **Node.js** instalado. Caso não tenha, você pode instalar a versão mais recente no [site oficial do Node.js](https://nodejs.org/).

## Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/RafaelSalesX/Projeto_Cypress_Praticando.git

2. Navegue até o diretório do projeto:

    cd Projeto_Cypress_Praticando

3. Instale as dependências do projeto:

    npm install


## Rodando os Testes

1. Para rodar os testes utilizando o Cypress, use o seguinte comando:
    npx cypress open

    Esse comando abrirá o Cypress Test Runner em uma interface gráfica onde você pode selecionar os testes que deseja executar manualmente.
    
2. Rodando os Testes em Modo Headless (Sem Interface Gráfica)
    Se você deseja rodar os testes de forma automática (modo headless), utilize o comando:

    npx cypress run

    Isso executará os testes em modo headless, e o Cypress irá gerar um relatório no formato de saída padrão (ou em outros formatos dependendo da sua configuração).


## Gerando Relatórios

1. Para gerar relatórios detalhados de execução dos testes, você pode configurar o Cypress com plugins como o mochawesome ou cypress-mochawesome-reporter. Esses relatórios serão gerados após a execução dos testes e poderão ser visualizados em HTML ou JSON.

    Exemplo de comando para rodar com relatório:

    npx cypress run --reporter mochawesome

    Isso gerará um arquivo de relatório mochawesome-report na pasta cypress/reports/ com detalhes sobre a execução dos testes.

2. Caso o mochawesome não esteja instalado:

    Se, por algum motivo, o mochawesome não for instalado automaticamente, você pode instalá-lo manualmente com o comando:

    npm install mochawesome --save-dev


## Pipeline de Testes Automatizados com Cypress

    Este projeto conta com uma pipeline CI/CD configurada no GitHub Actions para executar testes automatizados com Cypress sempre que um Pull Request é aberto na branch main.

1. Como funciona a pipeline:
    Disparo automático via Pull Request:
    A pipeline é executada automaticamente sempre que um Pull Request é aberto ou atualizado direcionado para a branch main.

2. Ambiente de execução:
    Os testes rodam em um ambiente Ubuntu na nuvem via GitHub Actions.

3. Etapas da execução:

3.1 Checkout do código: O repositório é clonado usando actions/checkout@v4.

3.2 Instalação de dependências: É executado npm install para instalar os pacotes do projeto.

3.3 Execução dos testes Cypress:
    Utiliza a action oficial cypress-io/github-action@v6, com suporte à gravação de execuções no Dashboard do Cypress (usando a CYPRESS_RECORD_KEY).

3.4 Upload do relatório de testes:
    O relatório HTML gerado pelos testes é enviado como artefato (artifact) para o GitHub, podendo ser baixado após a execução da pipeline.