const bonusItem = document.querySelectorAll('.bonus__item');
bonusItem.forEach(item => {
    let btnItemShow = item.querySelector('.bonus__item-description-btn');
    let textItemInfo = item.querySelector('.bonus__item-description-text');
    btnItemShow.addEventListener('click', ()=> {
        textItemInfo.classList.toggle('_show');
        btnItemShow.classList.toggle('_active')
    })
})