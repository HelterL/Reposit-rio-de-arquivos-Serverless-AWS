# AWS CLI
![img](./IMG/awscli.png)

## Pré-requisitos

- Uma versão de 64 bits do Windows XP ou posterior.
- Direitos de administrador para instalar o software 

## Instalação do AWS CLI no Windows

As etapas a seguir permitem que você instale a versão 2 do AWS CLI no Windows.

1. Fazer download e executar o instalador MSI da AWS CLI para Windows (64 bits)
    - Obter a versão mais recente do AWS CLI: (https://awscli.amazonaws.com/AWSCLIV2.msi)

Como alternativa, você pode executar o comando msiexec para executar o instalador MSI.
```
C:\> msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi

```
2. Para confirmar a instalação, abra o menu Início, procure cmd para abrir uma janela do prompt de comando e, no prompt de comando, use o comando ``` aws --version ```.

```
C:\> aws --version
aws-cli/1.19.110 Python/3.6.0 Windows/10 botocore/1.20.110
```

## Criar um usuário no IAM(Identity and Access Management) no console AWS.

No painel de navegação, escolha *Usuários* e depois *Adicionar usuário*.

Siga os seguintes passos abaixo:

1. Criar nome do seu usuário e selecionar a caixa *Acesso Programático.*
![img](./IMG/add_iam.png)

2. Criar um grupo e adicionar o usuário criado no grupo e atribuir políticas de acesso.
![img](./IMG/create_group_iam.png)

Digite o nome do seu grupo e selecione a permissão *AdministratorAccess* para ter acessos aos recursos e serviços através da AWS-CLI. 
![img](./IMG/create_group_iam2.png

Selecione o grupo que criou.
![img](./IMG/create_group_iam3.png)

3. Revise as escolhas para ter certeza que não esqueceu nada e clique em *Criar Usuário*.
![img](./IMG/create_user_iam.png)

4. Faça download da suas crendenciais, esta é a única oportunidade de visualizar ou fazer download das chaves de acesso secretas.
![img](./IMG/iam_keys_acess.png)

## Entrar com as credenciais do usuário IAM através do comando:
`aws configure`<br>
No campo *Default region name* vamos utilizar a região **us-east-1** Leste dos EUA (Norte da Virgínia)
![img](./IMG/aws_configure.png)







