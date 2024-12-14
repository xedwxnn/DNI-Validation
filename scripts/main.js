const inputEl = document.getElementById('input');
const btn = document.getElementById('btn');
const invalidDNI = document.querySelector('.invalidDNI');
const validDNI = document.querySelector('.validDNI');

function checkDNI() {
    let inputValue = inputEl.value.trim();
    const patron = /^\d{3}-\d{7}-\d$/;

    if(patron.test(inputValue) && inputValue != '') {
        validDNI.classList.remove('blur-out');
        invalidDNI.classList.remove('active');
        validDNI.classList.add('active');
        validDNI.classList.add('blur-in');

        setTimeout(function() {
            validDNI.classList.add('blur-out');
        }, 2000);

        setTimeout(function() {
            validDNI.classList.remove('active');
        }, 2500);
    }
    
    else if(!patron.test(inputValue) || inputValue.length > patron.length) {
        invalidDNI.classList.remove('blur-out');
        validDNI.classList.remove('active');
        invalidDNI.classList.add('active');
        invalidDNI.classList.add('blur-in');

        setTimeout(function() {
            invalidDNI.classList.add('blur-out');
        }, 2000);

        setTimeout(function() {
            invalidDNI.classList.remove('active');
        }, 2500);
    }
}

btn.addEventListener('click', checkDNI);