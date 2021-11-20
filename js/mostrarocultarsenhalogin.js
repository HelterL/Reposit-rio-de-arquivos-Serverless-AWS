let btn = document.querySelector('.showolhologin');
var mostrar = $('.bi3');
btn.addEventListener('click', function() {
    let input = document.querySelector('#inputPassword');
    
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