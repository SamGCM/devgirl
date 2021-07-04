const hamburguer = document.querySelector('.navbar')
const menu = document.querySelector('#navbar__list')


console.log(menu)

hamburguer.addEventListener('click', () => {

    menu.hasAttribute('class') == false ? menu.setAttribute('class', 'toggle') : menu.removeAttribute('class')  
    menu.hasAttribute('class') == true ? menu.style.display = 'block' : menu.style.display = ''
})

