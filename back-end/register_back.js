//import { enviarSMS } from './register_sms';
document.write(unescape("%3Cscript src='./back-end/register_sms.js' type='text/javascript'%3E%3C/script%3E"));
	
		var username;
		var password;
		var personalname;
		var poolData;
		
	  function registerButton() {
		
		personalnamename =  document.getElementById("personalnameRegister").value;	
		username = document.getElementById("emailInputRegister").value;
			
		if (document.getElementById("passwordInputRegister").value != document.getElementById("confirmationpassword").value) {
			//alert("Passwords não são os mesmos!")
			throw "Passwords Do Not Match!"
		} else {
			password =  document.getElementById("passwordInputRegister").value;	
		}
		
		poolData = {
				UserPoolId : _config.cognito.userPoolId, // Your user pool id here
				ClientId : _config.cognito.clientId // Your client id here
			};		
		var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

		var attributeList = [];
		
		var dataEmail = {
			Name : 'email', 
			Value : username, //get from form field
		};
		
		var dataPersonalName = {
			Name : 'name', 
			Value : personalname, //get from form field
		};

		var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
		var attributePersonalName = new AmazonCognitoIdentity.CognitoUserAttribute(dataPersonalName);
		
		
		attributeList.push(attributeEmail);
		attributeList.push(attributePersonalName);

		userPool.signUp(username, password, attributeList, null, async function (err, result){
		
			
			if (err) {	
			//alert(err.message || JSON.stringify(err.message));
			//console.log(err);
			var sucesso = $('.sucesso');
			var erro = $('.alert');
			var campo = $('#campo-erro');
			erro.removeClass('d-none');
			sucesso.addClass('d-none');
			campo.html('Campo(s) vazio(s) ou senha precisa conter letras maiúsculas, minúsculas, números e caractere especial');
			return;

			}
			
			
			cognitoUser = result.user;
			
			console.log('NameUser is ' + cognitoUser.getUsername() + ' PersonalName ' + personalnamename);
			//change elements of page
			var sucesso = $('.sucesso');
			var erro = $('.alert');
			var mensagem = $("#campo-sucesso");
			erro.addClass('d-none');
			sucesso.removeClass('d-none');
			mensagem.html('Cadastrado com sucesso');
			//document.getElementById("campo-sucesso").innerHTML = "Cadastrado com Sucesso";				
			enviarSMS();	
			$(":input").val("");
											
	  });
		
	  }
	  
	 