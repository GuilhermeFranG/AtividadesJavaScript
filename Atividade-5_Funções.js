function somar() {
    var num1 = Math.floor(Math.random() * 100);
    var num2 = Math.floor(Math.random() * 10);
    let result = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + result);
}

function plus() {
    var num1 = Math.floor(Math.random() * 100);
    var num2 = Math.floor(Math.random() * 1000);
    let result = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + result);
}

function  minus() {
    var num1 = Math.floor(Math.random() *  100) + 50;
    var num2 = Math.floor(Math.random() * (num1 - 50));
    var num3 = Math.floor(Math.random() * num1);
    let result = num3 - num2;
    console.log(num1);
    console.log(num3 + " - " + num2 + " = " + result);
}

somar(); 
plus();
minus();