const AWS = require("aws-sdk");
const s3 = new AWS.S3();
var SNS = new AWS.SNS();

module.exports.objetocriado = (event) => {
  var S3FS = require('s3fs');
  var s3Fs = new S3FS(process.env.Bucket);
  const pdf = require('pdf-parse');
  var mysql = require('mysql');
  //var config = require('./back-end/configbanco.json');
  var pool  = mysql.createPool({
    host     : process.env.RDSEndpoint,
    user     : process.env.DatabaseUser,
    password : process.env.DatabasePassword,
    database : process.env.DatabaseName
  });
  event.Records.forEach((record) => {
    //Conexão com o Banco de dados
    const filename = record.s3.object.key;
    
    s3Fs.readFile(filename, (err,dados) => {
      
      if(err){
          throw err;
       }else{
          pdf(dados).then(function(data) {
   
              // number of pag
                  var objfile = JSON.parse(JSON.stringify(data.metadata._metadata).replace(/dc:/g,""));
                  var titulo = objfile.title;
                  var author = objfile.creator;
                  var numpages = data.numpages;     
                  var dados = [[titulo,author,numpages]];
                    let sucesso = 'Adicionado com Sucesso';
                        pool.getConnection(function(err, connection) {
                          // Use the connection
                          connection.query('INSERT INTO livro (Titulo,Author,Numpages) VALUES ?',[dados], function (error, results, fields) {
                            // And done with the connection.
                            connection.destroy();
                            // Handle error after the release.
                            if (error) console.log(error);
                            else console.log(sucesso);
                          });
                        });
                    
            });
            
        }
    });  

  });

};


module.exports.consultardb = (event, context, callback) => {
  var mysql = require('mysql');
  //var config = require('./back-end/configbanco.json');
  var con = mysql.createConnection({
    host     : process.env.RDSEndpoint,
    user     : process.env.DatabaseUser,
    password : process.env.DatabasePassword,
    database : process.env.DatabaseName
   });
    
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM livro", function (err, result, fields) {
        if (err) throw err;
        callback(null,JSON.parse(JSON.stringify(result)));
        con.end();
      });
    });
};



module.exports.listar =  (event, context, callback) => {
  var list = require('lambduh-list-s3-objects')

  list({
    Bucket: process.env.Bucket, //S3 Bucket
    Prefix: 'Artigos', //Key Prefix
    pattern: /\.pdf/ // Optional Regex for filtering returned keys
  }).then(function(keys) {
    callback(null,keys) // Keys from that bucket/prefix/pattern
  }, function(err) {
    callback(null,err) // some err
  });    
  
  };  

exports.enviarsms = async (event) => {
 
  var telefone = event.phone;
  var personalname = event.personalname;

  let params = {
    Message: `Olá ${personalname}, Verifique seu endereço de e-mail, para concluir o cadastro.`, 
    Subject: 'Aplicação Serverless',
    PhoneNumber: telefone
  };
  
  return new Promise(function(resolve, reject) {
      SNS.publish(params, function(err, data) {
          if (err) {
              console.log(err)
              reject(err)
          } else {
              console.log(data)
              resolve(data)
          }
      })
  })
}