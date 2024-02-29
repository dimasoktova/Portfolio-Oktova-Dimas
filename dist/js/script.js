//navbar fixed
window.onscroll= function() {
    const header =document.querySelector('header');
    const fixednav=header.offsetTop;

    if(window.pageYOffset > fixednav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// hamberger
const hamberger=document.querySelector('#hamberger');
const navmenu=document.querySelector('#nav-menu');

hamberger.addEventListener('click',function() {
hamberger.classList.toggle('hamberger-active');
navmenu.classList.toggle('hidden');
});