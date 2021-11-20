function signInButton() {

    var authenticationData = {
        Username: document.getElementById("inputUsername").value,
        Password: document.getElementById("inputPassword").value,
    };

    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

    var poolData = {
        UserPoolId: _config.cognito.userPoolId, // Your user pool id here
        ClientId: _config.cognito.clientId, // Your client id here
    };

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var userData = {
        Username: document.getElementById("inputUsername").value,
        Pool: userPool,
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            var accessToken = result.getAccessToken().getJwtToken();
            console.log(accessToken);
            window.location.replace('profile.html');
        },

        onFailure: function (err) {
            if (err.code === "InvalidParameterException") {
                var erro = $('.alert');
                var campo = $('#campo-erro');
                erro.removeClass('d-none');
                campo.html('Preencha o campo email');
                return;
            }
            else {
                var erro = $('.alert');
                var campo = $('#campo-erro');
                erro.removeClass('d-none');
                campo.html('E-mail ou senha incorretos');
                return;
            }
            //console.log(err.message || JSON.stringify(err));
        },
    });
}



function  forgotpasswordbutton() {
        var poolData = {
            UserPoolId: _config.cognito.userPoolId, 
            ClientId: _config.cognito.clientId, 
        };

        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

        var userData = {
            Username: document.getElementById("inputUsername").value,
            Pool: userPool,
        };

        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

        cognitoUser.forgotPassword({

            onSuccess: function (result) {
                    console.log('call result: ' + result);
                    var sucesso = $('.sucesso');
                    var erro = $ ('.alert');
                    var campo = $('#campo-sucesso');
                    erro.addClass('d-none');
                    sucesso.removeClass('d-none');
                    campo.html('Senha atualizada com sucesso');
                    $(":input").val("");
                    
            },
            onFailure: function (err) {
                //alert('Por favor insira seu email no campo');
                    var erro = $('.alert');
                    var campo = $('#campo-erro');
                    var sucesso = $('.sucesso');
                    erro.removeClass('d-none');
                    sucesso.addClass('d-none');
                    campo.html('Por favor insira corretamente seu e-mail');
                    console.log(err);  
                    return;
                              
            },
            inputVerificationCode() {
                var verificationCode = prompt('Por favor insira o código de verificação ','');
                var newPassword = prompt('Entre com novo password ' ,''); 
                cognitoUser.confirmPassword(verificationCode, newPassword, this);
                
              
            }

        });
    }
