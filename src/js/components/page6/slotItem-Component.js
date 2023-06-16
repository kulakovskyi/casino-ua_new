
const slotItems = document.querySelectorAll('.best__item')
slotItems.forEach(item => {
    let textItem = item.querySelector('.best__item-text')
    let btnShowItem = item.querySelector('.best__item-showMore')

    btnShowItem.addEventListener('click', () => {

        textItem.classList.toggle('_show')
        btnShowItem.textContent = 'Приховати'
    })
})