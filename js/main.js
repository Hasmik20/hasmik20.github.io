const homeBtn = document.querySelector('#homeBtn');
const mainPage = document.querySelector('.main-page');
const menu = document.querySelector('.menu');


homeBtn.addEventListener('click', homePage);

function homePage(){
        menu.classList.add('hide'); 
        mainPage.classList.add('show'); 
}

