$('#form-cadastro').submit(function(){
    var nome = $('#personalnameRegister');
    var email = $('#emailInputRegister');
    var senha = $('#passwordInputRegister');
    var confirmesenha = $('#confirmationpassword');  
    var phone = $('#phone'); 
    var erro = $('.alert');
    var sucesso = $('.sucesso');
    var campo = $('#campo-erro');
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');

    
    //Valida Nome
    if(nome.val() == ''){
        erro.removeClass('d-none');
        sucesso.addClass('d-none');
        campo.html('Preencha o campo nome'); //Nome do campo que não foi preenchido
        nome.focus();
        return false;
    }
    //Valida Email
    if(email.val() == ''){
        erro.removeClass('d-none');
        sucesso.addClass('d-none');
        campo.html('Preencha o campo email'); //Nome do campo que não foi preenchido
        email.focus();
        return false;
    }
   
    //Valida Senha
    
    if(senha.val() == '' | senha.val().length < 8 ){
        erro.removeClass('d-none');
        sucesso.addClass('d-none');
        campo.html('A senha deve ter entre 8 e 72 caracteres'); //Nome do campo que não foi preenchido
        senha.focus();
        return false;
    }
     //Valida confirma senha
     if(confirmesenha.val() == '' | senha.val().length < 8){
        erro.removeClass('d-none');
        sucesso.addClass('d-none');
        campo.html('A senha deve ter entre 8 e 72 caracteres'); //Nome do campo que não foi preenchido
        confirmesenha.focus();
        return false;
    }
   
    if(senha.val() != confirmesenha.val() | confirmesenha.val() != senha.val()){
        erro.removeClass('d-none');
        sucesso.addClass('d-none');
        campo.html('Senhas Incompatíveis'); //Nome do campo que não foi preenchido
        senha.focus();
        confirmesenha.focus();
        return false;
    }
   
    //Valida Phone
    if(phone.val() == ''){
        erro.removeClass('d-none');
        sucesso.addClass('d-none');
        campo.html('Preencha o Fone'); //Nome do campo que não foi preenchido
        phone.focus();
        return false;
    }
    
    if(!regex.exec(senha) | !regex.exec(confirmesenha)){
        var sucesso = $('.sucesso');
        var erro = $('.alert');
        var campo = $('#campo-erro');
        erro.removeClass('d-none');
        sucesso.addClass('d-none');
        campo.html('Senha deve conter letras maiúsculas, minúsculas, números e caractere especial');
        return false;
    }
    
    
    return true;
});