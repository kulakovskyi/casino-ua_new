
const slotItems = document.querySelectorAll('.slot__item')
slotItems.forEach(item => {
    let textItem = item.querySelector('.slot__item-text')
    let btnShowItem = item.querySelector('.slot__item-showMore')

    btnShowItem.addEventListener('click', () => {

        textItem.classList.toggle('_show')
        btnShowItem.textContent = 'Приховати'
    })
})