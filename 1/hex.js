const makeColor = [0, 1 , 2 , 3 , 4 , 5 , 6 , 7, 8 , 9 , 'a' , 'b' , 'c', 'd', 'e', 'f'];

const button = document.querySelector('#btn');
const display = document.querySelector('.display');

button.addEventListener('click',function(){
    let hexColor = '#'
    for(let i= 0 ; i<6 ; i++){
        hexColor += makeColor[getRandom()]
        
    }
    display.textContent = hexColor
    document.body.style.backgroundColor = hexColor;
})

function  getRandom(){
    return Math.floor(Math.random()* makeColor.length);
    
}

