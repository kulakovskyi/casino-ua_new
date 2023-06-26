
const iconPasswordShow = document.querySelector('.icon-pass')
const passwordInput = document.querySelector('.password__form-pass')

iconPasswordShow.addEventListener('click', () => {
    if(passwordInput.getAttribute('type') === 'password'){
        passwordInput.removeAttribute('type');
        passwordInput.setAttribute('type', 'text');
    } else {
        passwordInput.removeAttribute('type');
        passwordInput.setAttribute('type', 'password');
    }
})