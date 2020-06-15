/*
   FIRST METHOD
*/
// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B','C','D','E','F']
// const board = document.querySelector('.main-board');
// const colorName = document.getElementById('current-color')
// const btn = document.getElementById('btn')

// btn.addEventListener('click', function(){
//     let randomColor = '#';
//     for(let i = 0;i < 6;i++){
//         randomColor += hex[getRandomColor()];
//     }
//     board.style.backgroundColor = randomColor;
//     colorName.textContent = randomColor;
// })

// function getRandomColor(){
//     return Math.floor(Math.random() * hex.length)
// }
/*
      SECOND METHOD
*/

const board = document.querySelector('.main-board');
const colorName = document.getElementById('current-color')
const btn = document.getElementById('btn')

btn.addEventListener('click',function(){
    board.style.backgroundColor = getRandomColor();
    colorName.textContent = getRandomColor();
  
})

function getRandomColor(){
    return '#' + Math.random().toString(16).substring(2,8).toUpperCase();
}

