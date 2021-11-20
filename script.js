const inquirer = require('inquirer');
const fs = require('fs');

var readline = require('readline');

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

leitor.question("Qual o nome do bucket?\n", function (bucketName) {
  leitor.question("Qual nome do banco de dados?\n", function (db_name) {
    leitor.question("Qual o nome do usuário para o banco de dados?\n", function (user_name) {
      leitor.question("Qual a senha para o banco de dados?\n", function (user_password) {
                    fs.readFile('.template-env', 'utf8', (err, input) => {
                      if (err) {
                        console.log(err);
                      }
                    
                      const data = input
                        .replace(/%BUCKET_NAME%/g, bucketName)
                        .replace(/%DB_NAME%/g, db_name)
                        .replace(/%USER_NAME_DB%/g, user_name)
                        .replace(/%USER_PASSWORD_DB%/g, user_password)
                    
                      fs.writeFile('.env', data, 'utf8', (e) => {
                        if (e) {
                          console.log(e);
                        }
                      });
                    });                         
              
                    leitor.close();
        });               
    });
  });
});



