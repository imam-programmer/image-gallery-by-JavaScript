let container=document.querySelector('.container')
let img=document.querySelectorAll('img')
let big_div=document.querySelector('.big-div img')
let big=document.querySelector('.big-div')
let btn=document.createElement('button');
let body=document.querySelector('body')
btn.innerHTML='<i class="fa-solid fa-angle-left"></i>'
big.prepend(btn)
big.style.textAlign='center'

btn.addEventListener('click',()=>{
   big.classList.remove('imag')
})
img.forEach((i)=>{
i.addEventListener('click',()=>{
big_div.src=i.src
big.classList.add('imag')
})
})