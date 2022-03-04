const burger = document.querySelector('#toolbar-icon')
const navMenu = document.querySelector('.navMenu')

burger.addEventListener("click",()=>{
    navMenu.classList.toggle("active")
    console.log(navMenu)
})


document.querySelectorAll('.navMenu-link').forEach(
        item =>
            item.addEventListener("click",()=>{
                navMenu.classList.toggle("active")
            })
        
    )
