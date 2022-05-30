const limitedColors = ['#000000','#AA14F0', '#6300000','#1E5128','#FF0000', '#F0A500','#D4ECDD','#1F6F8B','#686D76','#519872'];

const botton = document.querySelector('#btn');
const display = document.querySelector('.display');



botton.addEventListener('click', ()=>{
    const randomNumber = Math.floor(Math.random()*limitedColors.length);
    document.body.style.backgroundColor = limitedColors[randomNumber];
    display.textContent = limitedColors[randomNumber];

});


