let input = document.querySelector("#input")
let btn_1 = document.querySelector("#btn1")
let btn_2 = document.querySelector("#btn2")
let btn_3 = document.querySelector('#btn3')
let btn_4 = document.querySelector('#btn4')
let btn_5 = document.querySelector('#btn5')
let btn_6 = document.querySelector('#btn6')
let btn_7 = document.querySelector('#btn7')
let btn_8 = document.querySelector('#btn8')
let btn_9 = document.querySelector('#btn9')
let btn_0 = document.querySelector('#btn0')
let btn_00 = document.querySelector('#btn00')
let btn_dot = document.querySelector('#btnDot')
let btn_equal = document.querySelector('#btnEql')
let btn_clear = document.querySelector('#clear')
let btn_add = document.querySelector('#btnAdd')
let btn_min = document.querySelector('#btnMin')
let btn_mul = document.querySelector('#btnMul')
let btn_div = document.querySelector('#btnDiv')
let storage_btn = document.querySelector('#storage')
let btn_read = document.querySelector('#btnRead')

let num_1;
let num_2;
let memory;
let operator;
let index = -1;

btn_clear.addEventListener('click',function(){
    input.value = ''
    num_1 = 0;
    num_2 = 0;
})

btn_1.addEventListener("click",function(){
    let value = input.value;
    value = value + 1;
    input.value = value;
})

btn_2.addEventListener("click",function(){
    let value = input.value;
    value = value + 2;
    input.value = value;
})

btn_3.addEventListener('click',function(){
    // input.value = input.value + 3;
    let value = input.value;
    input.value = value + 3;
})

btn_4.addEventListener('click',function(){
    let value = input.value;
    input.value  = value + 4;
})

btn_5.addEventListener('click',function(){
    let value = input.value;
    input.value = value + 5;
})

btn_6.addEventListener('click',function(){
    let value = input.value;
    input.value = value + 6;
})

btn_7.addEventListener('click',function(){
    let value = input.value;
    input.value = value + 7;
})

btn_8.addEventListener('click',function(){
    let value = input.value;
    input.value = value + 8;
})

btn_9.addEventListener('click',function(){
    let value = input.value;
    input.value = value + 9;
})

btn_0.addEventListener('click',function(){
    let value = input.value;
    input.value = value + 0;
})

btn_00.addEventListener('click',function(){
    let value = input.value;
    input.value = value + '00';
})

btn_add.addEventListener('click',function(){
    operator = '+'
    num_1 = Number.parseInt(input.value);
    input.value = ''

})

btn_min.addEventListener('click',function(){
    operator = '-'
    num_1 = Number.parseInt(input.value);
    input.value = '';
})

btn_mul.addEventListener('click',function(){
    operator = 'x'
    num_1 = Number.parseInt(input.value);
    input.value = '';
})

btn_div.addEventListener('click',function(){
    operator = '/'
    num_1 = Number.parseInt(input.value);
    input.value = '';
})

btn_read.addEventListener('click',function(){
    input.value = memory;
})

storage_btn.addEventListener('click',function(){
    if(index == 0){
        memory = input.value;
        index = -1;
    }
    else if(index == 1){
        memory = input.value;
        index = -1;
    }
    else if(index == 2){
        memory = input.value;
        index = -1;
    }
    else if (index == 3){
        memory = input.value;
        index = -1;
    }
})

btn_equal.addEventListener('click',function(){
    if(operator === '+'){
        num_2 = Number.parseInt(input.value);
        index = 0;
        let addition = num_1 + num_2;
        input.value = addition;
    }

     if(operator === '-'){
         num_2 = Number.parseInt(input.value);
         index = 1;
        let Minus = num_1 - num_2;
        input.value = Minus;
     }

     if(operator === 'x'){
        index = 2;
        num_2 = Number.parseInt(input.value);
        let Multiply = num_1 * num_2;
        input.value = Multiply;
     }

     if(operator === '/'){
        index = 3;
        num_2 = Number.parseInt(input.value);
        let Divide = num_1 / num_2;
        input.value = Divide;
     }
})


