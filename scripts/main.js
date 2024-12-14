const inputEl = document.getElementById('input');
const btn = document.getElementById('btn');
const invalidDNI = document.querySelector('.invalidDNI');
const validDNI = document.querySelector('.validDNI');

function checkDNI() {
    let inputValue = inputEl.value.trim();
    const patron = /^\d{3}-\d{7}-\d$/;

    if(patron.test(inputValue) && inputValue != '') {
        invalidDNI.classList.remove('active');
        validDNI.classList.add('active');

        setTimeout(function() {
            validDNI.classList.remove('active');
        }, 1400);
    }
    
    else if(!patron.test(inputValue) || inputValue.length > patron.length) {
        validDNI.classList.remove('active');
        invalidDNI.classList.add('active');

        setTimeout(function() {
            invalidDNI.classList.remove('active');
        }, 1400);
    }
}

btn.addEventListener('click', checkDNI);