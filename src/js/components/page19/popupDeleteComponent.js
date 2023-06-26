const popupBtnOpen = document.querySelector('.delete__btn')
const popupBtnClose = document.querySelector('.popup-delete__info-btn-close')
const popUpSubscribe = document.querySelector('.popup-delete')
const body = document.querySelector('body')

popupBtnOpen.addEventListener('click', () => {
    body.classList.add('_lock')
    popUpSubscribe.classList.remove('_hidden')
})

popupBtnClose.addEventListener('click', () => {
    body.classList.remove('_lock')
    popUpSubscribe.classList.add('_hidden')
})