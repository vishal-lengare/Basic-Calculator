
let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(element =>{
    element.addEventListener('click', (b)=>{
        if (b.target.innerText === '=') {
            string = String(eval(string));
            inputBox.value = string;
        } else if (b.target.innerText === 'AC'){
            string = '';
            inputBox.value = string;
        }else if (b.target.innerText === 'DEL'){
            string = string.substring(0, string.length-1);
            inputBox.value = string;
        }else if (b.target.id === 'plusMinus'){
            string = String(-eval(string));
            inputBox.value = string;
        }
        else{
            string += b.target.innerText;
            inputBox.value = string;
        }
    })
})

// let inputBox = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');

// let string = '';

// buttons.forEach(element => {
//     element.addEventListener('click', (b) => {
//         if (b.target.innerText === '=') {
//             string = evaluateExpression(string);
//             inputBox.value = string;
//         } else if (b.target.innerText === 'AC') {
//             string = '';
//             inputBox.value = string;
//         } else if (b.target.innerText === 'DEL') {
//             string = string.substring(0, string.length - 1);
//             inputBox.value = string;
//         } else if (b.target.id === 'plusMinus') {
//             string = toggleSign(string);
//             inputBox.value = string;
//         } else {
//             string += b.target.innerText;
//             inputBox.value = string;
//         }
//     })
// });

// function evaluateExpression(expression) {
//     try {
//         return Function('"use strict";return (' + expression + ')')();
//     } catch (error) {
//         return 'Error';
//     }
// }

// function toggleSign(value) {
//     if (value.startsWith('-')) {
//         return value.slice(1);
//     } else {
//         return '-' + value;
//     }
// }
