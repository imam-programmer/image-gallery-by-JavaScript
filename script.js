let container=document.querySelector('.container')
let img=document.querySelectorAll('img')
let big_div=document.querySelector('.big-div img')
let big=document.querySelector('.big-div')

img.forEach((i)=>{
i.addEventListener('click',()=>{
big_div.src=i.src

big.classList.toggle('imag')

   
})
})