const toggleBall =document.querySelector('.toggle-ball');
const items = document.querySelectorAll('.container, .moive-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.toggle-ball');
 
toggleBall.addEventListener('click',()=>{
    items.forEach(item=>{
        item.classList.toggle('active')

    })
    toggleBall.classList.toggle('active')
})