const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.wrapper')

btn.addEventListener('click', ()=>{
    modal.classList.add('modal--open')
})

modal.addEventListener('click', event =>{
    const target  =  event.target 
    if (target && target.classList.contains('wrapper')|| target.classList.contains('modal__close-btn')){
        modal.classList.remove('modal--open')
    }
})
document.addEventListener('keydown', event => {
    if(event.code==='Escape'&& modal.classList.contains('modal--open')){
        modal.classList.remove('modal--open')
    }
})

const reg = document.querySelector('.reg')
const register = document.querySelector('.register__modal')

reg.addEventListener('click', ()=>{
    register.classList.add('register__modal-open')
})

register.addEventListener('click', event =>{
    const target  =  event.target 
    if (target && target.classList.contains('register__modal')|| target.classList.contains('close-reg')){
        register.classList.remove('register__modal-open')
    }
})
document.addEventListener('keydown', event => {
    if(event.code==='Escape'&& modal.classList.contains('register__modal-open')){
        register.classList.remove('register__modal-open')
    }
})