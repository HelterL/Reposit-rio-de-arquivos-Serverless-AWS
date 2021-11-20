let btn = document.querySelector('.showolho');
var mostrar = $('.bi1');
btn.addEventListener('click', function() {
    let input = document.querySelector('#passwordInputRegister');
    
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        mostrar.removeClass('bi-eye');
        mostrar.addClass('bi-eye-slash');

    } else {
        input.setAttribute('type', 'password');
        mostrar.removeClass('bi-eye-slash');
        mostrar.addClass('bi-eye');
    }
});

var mostrar1 = $('.bi2');
let button = document.querySelector('.showolho1');
button.addEventListener('click', function() {
    let input = document.querySelector('#confirmationpassword');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        mostrar1.removeClass('bi-eye');
        mostrar1.addClass('bi-eye-slash');

    } else {
        input.setAttribute('type', 'password');
        mostrar1.removeClass('bi-eye-slash');
        mostrar1.addClass('bi-eye');
    }
});


