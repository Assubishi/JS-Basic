'use strict';



class AddingNumber {
    constructor(number) {
        this.units = number % 10;
        this.tens =  Math.floor((number % 100) / 10);
        this.hundereds =  Math.floor(number / 100);
    }

    show () {
        console.log(this);
    }
}

let qwerty = Number(prompt("Enter a number"));
if (qwerty>=0 && qwerty<=999 && Number.isInteger(qwerty)) {
let number1 = new  AddingNumber(qwerty);
number1.show();
} else if (qwerty<0 || qwerty>999) {
    console.log ("Ваше число за пределами диапазона"); 
} else if (isNaN(qwerty)) {
    console.log ("Вы не написали  число");
} else if(!Number.isInteger(qwerty)) {
    console.log ("Вы написали не целое цисло");
} 
