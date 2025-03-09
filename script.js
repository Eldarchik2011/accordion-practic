let accordion = document.querySelector('.accordion')
let accordItems = document.querySelectorAll('.accordion-item')

accordion.addEventListener('click', (event)=>{
    let elemTarget = event.target;
    for(let item of accordItems) {
        item.classList.remove('active')
    }
    elemTarget.closest('.accordion-item').classList.add('active')
})