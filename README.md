# Repositório de arquivos PDFs Serverless com AWS
Este é um aplicativo que demonstra como utilizar as tecnologias da AWS para construir uma aplicação de **repositório de arquivos PDFS sem servidor**.
O aplicativo mostra como criar um projeto sem servidor com Amazon cognito, Amazon SNS, Amazon Lambda, Amazon RDS e Amazon S3.

## Tabela de conteúdos

* [Recursos](#recursos)
* [Apresentação serviços AWS](#apresentação-serviços-aws)
* [Arquitetura](#arquitetura)
* [Instalação](#instalação)

## Recursos
- Registrar usuário
- Login / Logout
- Envio SMS para o usuário
- Upload de arquivo bucket S3
- Envio de dados do S3 para o RDS
- Download de arquivo do bucket

## Apresentação serviços AWS

- Funções sem servidor com [AWS Lambda](https://aws.amazon.com/pt/lambda/)
- Acesso e controle das API com [AWS API Gateway](https://aws.amazon.com/pt/api-gateway/)
- Autenticação com [Amazon Cognito](https://aws.amazon.com/pt/cognito/) e grupo de usuários [Pool usuários Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html)
- Envio de SMS com [Amazon SNS](https://aws.amazon.com/pt/sns/)
- Armazenamento de arquivos com [Amazon S3](https://aws.amazon.com/pt/s3/)
- Armazenamento de metadados com [Amazon RDS](https://aws.amazon.com/pt/rds/)

## Arquitetura
![img](./IMG/TCC2_arquitetura-1.png)

## Instalação

**Pré-requisitos:**

- Instalação e configuração da [AWS Command Line Interface](https://github.com/HelterL/Reposit-rio-de-arquivos-Serverless-AWS/tree/master/AWS%20CLI)
- Instalação da linguagem NodeJS e do framework *Serverless* [Nodejs&Serverless](https://github.com/HelterL/Reposit-rio-de-arquivos-Serverless-AWS/tree/master/Nodejs/README.md)
- Instalação do banco de dados Mysql Workbench [Mysql Workbench](https://dev.mysql.com/downloads/workbench/)

1. Clone o repositório do github.

```
git clone https://github.com/HelterL/Reposit-rio-de-arquivos-Serverless-AWS.git

```

2. Execute o comando abaixo e digite os dados que se perdem, para o nome do bucket, nome do banco de dados, usuário e senha para o banco de dados.
```
node script.js

```

Exemplo de preenchimento, utilize apenas letras minúsculas e/ou números.

```

Qual o nome do bucket?
exemplobucketname
Qual nome do banco de dados?
serverlessexemploaplicacao
Qual o nome do usuário para o banco de dados?
teste321
Qual a senha para o banco de dados?
1234teste321

```

3. Dentro do arquivo **gerador-arquivoupload.js**, na linha abaixo altere para o nome que foi dado ao bucket na execução do script.

```
 const bucketName = 'Nome do seu bucket';

```

4. Depois execute o seguinte comando abaixo.

```

node gerador-arquivoupload.js

```



