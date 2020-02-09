let buttons = document.querySelector('.buttons');

let result = document.getElementById('result')

let input = document.getElementById('input')

let numStorage = [];
let stringStorage = [];

let sum = 0;

let validChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']

let validOpChar = ['+']

buttons.addEventListener('click', function (e) {
    // console.log(e.target)
    // e.target is not an equal sign or a clear sign then append a str to
    // the input
    // when is equal sign we going to split the string by the plus symbol
    //add all content and remove the reduce method
    //display result on our screen
    //if c reset all of our arrays and values

    if (validChar.includes(e.target.innerText)) {
        // console.log('found');
        input.textContent = input.textContent + e.target.textContent
    }
    else if (validOpChar.includes(e.target.textContent)) {
        input.textContent = input.textContent + e.target.textContent
    }
    else if (e.target.textContent == "=") {
        console.log(input.textContent)
    }


})


