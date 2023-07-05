const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".header__bottom");
const body = document.querySelector("body");


if(body.classList.contains('in-cabinet')){
  const headerDropMenuCabinet = document.querySelector('.header__cabinet-save');
  const headerCabinetBtnMob = document.querySelector('.header__cabinet-mob-user');
  function burgerMain() {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  }
  function burgerMainRemove() {
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
  }
  iconMenu.addEventListener("click", function (e) {
    if (headerDropMenuCabinet.classList.contains('_open')) headerDropMenuCabinet.classList.remove('_open');
    burgerMain();
    let examinationOpenMenu = headerDropMenuCabinet.classList.contains('_open')
    let examinationOpenMenuMain = menuBody.classList.contains('_active')
    if(examinationOpenMenuMain || examinationOpenMenu){
      body.classList.add('_lock')
    } else {
      body.classList.remove('_lock')
    }
  });

  headerCabinetBtnMob.addEventListener('mouseenter', mouseEnterElem);
  headerCabinetBtnMob.addEventListener('mouseleave', mouseLeave);
  headerDropMenuCabinet.addEventListener('mouseleave', mouseLeave);
  headerDropMenuCabinet.addEventListener('mouseenter', mouseEnterElem);
  function mouseLeave(e) {
    headerDropMenuCabinet.classList.remove('_open');
  }
  function mouseEnterElem (){
    headerDropMenuCabinet.classList.add('_open');
  }

  if (window.screen.width <= 1024) {
    headerCabinetBtnMob.removeEventListener('mouseenter', mouseEnterElem);
    headerCabinetBtnMob.removeEventListener('mouseleave', mouseLeave);
    headerDropMenuCabinet.removeEventListener('mouseleave', mouseLeave);
    headerDropMenuCabinet.removeEventListener('mouseenter', mouseEnterElem);


    headerCabinetBtnMob.addEventListener('click', () => {

      headerDropMenuCabinet.classList.toggle('_open');
      if (menuBody.classList.contains('_active')) {
        headerDropMenuCabinet.classList.add('_open');
        burgerMainRemove();
      }
      let examinationOpenMenu = headerDropMenuCabinet.classList.contains('_open')
      let examinationOpenMenuMain = menuBody.classList.contains('_active')
      if(examinationOpenMenuMain || examinationOpenMenu){
        body.classList.add('_lock')
      } else {
        body.classList.remove('_lock')
      }

    });
  }


} else {
  const headerBtnsCabinet = document.querySelector('.header__btns-wrap');
  const headerBtnsCabinetClose = document.querySelector('.header__btns-close');
  const headerOutBtns = document.querySelector('.header__cabinet-mob')
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    body.classList.toggle("_lock");
  });
  headerBtnsCabinetClose.addEventListener('click', ()=>{
    headerBtnsCabinet.classList.remove('_open')
    if(!menuBody.classList.contains('_active')){
      body.classList.remove("_lock");
    }
  })
  headerBtnsCabinet.addEventListener('click', e => {
    if(e.target === headerBtnsCabinet){
      if(!menuBody.classList.contains('_active')){
        body.classList.remove("_lock");
      }
      headerBtnsCabinet.classList.remove('_open')
    }

  })
  headerOutBtns.addEventListener('click', ()=>{
  headerBtnsCabinet.classList.toggle('_open')
    if(!menuBody.classList.contains('_active')){
      body.classList.toggle("_lock");
    }
});
}


const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function (menuItem) {
  const submenu = menuItem.querySelector('.sub-menu');
  const submenu2 = menuItem.querySelector('.sub-menu-2');
  const submenu3 = menuItem.querySelector('.sub-menu-3');
  const link = menuItem.querySelector('a');

  menuItem.addEventListener('mouseenter', function () {
    if (window.innerWidth > 1024) {
      if(submenu) submenu.style.display = 'block';

    }
  });

  menuItem.addEventListener('mouseleave', function () {
    if (window.innerWidth > 1024) {
      if(submenu) submenu.style.display = 'none';
    }
  });

  link.addEventListener('click', function (event) {

    if (window.innerWidth <= 1024) {
      menuItem.classList.toggle('mobile-active');
      let nextElement = link.nextElementSibling
      if(nextElement !== null){
        event.preventDefault();
      }

      if(nextElement !== null && nextElement.classList.contains('sub-menu-2')){
        submenu2.classList.toggle('_open')

      }
      if(nextElement !== null && nextElement.classList.contains('sub-menu-3') ){
        submenu3.classList.toggle('_open')

      }

    }
  });
});
