
//creating toggle varibles
const menu = document.querySelector('#mobile-menu'); //targets mobile menu
const menuLinks = document.querySelector('.navbar__menu'); //this the class for the navbar
const navLogo = document.querySelector('#navbar__logo');



//display mobile menu

const mobileMenu = () => { //arrow function that adds class that is active or is-active
  menu.classList.toggle('is-active');  //true or false -> toggles class is-active
  menuLinks.classList.toggle('active'); //toggle class is-active
};   

menu.addEventListener('click', mobileMenu); //toggles the mobile menu function when its clicked

//shows active menu when scrolling
const highLighMenu = () =>{

//targets all of the menus
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const newMenu = document.querySelector('#new-page');
  const clothingMenu = document.querySelector('#clothing-page');
  const aboutMenu = document.querySelector('#about-page');
  let scrollPos = window.scrollY;
  console.log(scrollPos)


//switches highlight in nav bar when at a certain hight
  if(window.innerWidth > 960 && scrollPos < 600){ //scroll posoitons 
    homeMenu.classList.add('highlight')
    newMenu.classList.remove('highlight')
    return
  }else if(window.innerWidth > 960 && scrollPos < 1400){

    newMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    clothingMenu.classList.remove('highlight')
    return

  }else if(window.innerWidth > 960 && scrollPos < 2345){
    clothingMenu.classList.add('highlight')
    newMenu.classList.remove('highlight')
    return
  }

  if((elem && window.innerWidth < 960 && scrollPos < 600)|| elem){
    elem.classList.remove('highlight')
  }

}

window.addEventListener('scroll', highLighMenu);
window.addEventListener('click', highLighMenu);

//close mobile menu when clicking on a menu item

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};


menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)
