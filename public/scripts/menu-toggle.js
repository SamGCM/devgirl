const hamburguer = document.querySelector('.menu-toggle')
const menu = document.querySelector('#navbar__list')
const navbar = document.querySelector('.navbar')


hamburguer.addEventListener('click', () => {

    menu.hasAttribute('class') == false ? menu.setAttribute('class', 'toggle') : menu.removeAttribute('class')  
    menu.hasAttribute('class') == true ? menu.style.display = 'block' : menu.style.display = ''
})










