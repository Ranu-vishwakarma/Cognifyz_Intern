alert("hello");
const btn = document.querySelector('.btn');

btn.addEventListener('click' , ()=>{
    btn.style.backgroundColor = '#0d0d9de0';
    btn.style.boxShadow  = ' 0 0 40px #0d0d9de0';
    btn.style.transition = '1s ease';

})