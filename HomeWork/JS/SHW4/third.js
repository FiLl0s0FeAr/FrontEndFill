function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function firstTask(n){
    let mas = [];
    let result = 0;

    for (let i = 0; i < n; i++){
        mas[i] = getRandomArbitrary(-n, n);
        if (mas[i] < 0){
            result += 1;
        }
    }

    return result;
}

function secondTask(n){
    let mas = [];
    let result = 1;

    for (let i = 0; i < n; i++){
        mas[i] = getRandomArbitrary(-n, n);
        //or instead of Math.abs we can use another: if (mas[i] < 0) mas[i] * -1 
        if (Math.abs(mas[i]) < 7){
            result = result * mas[i];
        }
    }

    return result;
}

function thirdTask(n){
    let mas = [];
    let result = 0;

    for (let i = 0; i < n; i++){
        mas[i] = getRandomArbitrary(-n, n);
        if (mas[i] % 3 === 0){
            result += mas[i];
        }
    }

    return result;
}

function fouthTask(n){
    let mas = [];
    let max = 0;
    let index = 0;

    for (let i = 0; i < n; i++){
        mas[i] = getRandomArbitrary(-n, n);
        if (max < mas[i]){
            max = mas[i];
            index = i;
        }
    }

    return index;
}

function sumTwoNumbers(num){
    const secondDigit = num % 10;     // Остаток от деления на 10? → 7
    const firstDigit = (num - secondDigit) / 10;     // (57 - 7) / 10 → 5

    return secondDigit + firstDigit;
}

function fifthTask(n){
    let mas = [];
    let firstDigit = 0;
    let secondDigit = 0;
    let x = 0;
    let u = 0;

    for (let i = 0; i < n; i++){
        mas[i] = getRandomArbitrary(1000, n);
        x = mas[i];
        y = mas[i];
        if (x > 9){
            while (x > 99) {
                x = (x / 10) | 0; 
            }
            firstDigit = x % 100;
        }
        if (y > 999) {
            while (y > 9999) {
                y = (y / 10) | 0; 
            }
            secondDigit = y % 100;
        }
        if (sumTwoNumbers(firstDigit) === sumTwoNumbers(secondDigit)){
            console.log(`Lucky number ${mas[i]}`);
        }
    }

}

let choise = Number(prompt('Enter a number of task: [1-5]'));

switch(choise){
    case(1):
        let a = Number(prompt('Enter a Number'));
        a = firstTask(a);
        console.log(a);
        break;
    
    case(2):
        let b = Number(prompt('Enter a Number'));
        b = secondTask(b);
        console.log(b);
        break;

    case(3):
        let c = Number(prompt('Enter a Number'));
        c = thirdTask(c);
        console.log(c);
        break;

    case(4):
        let d = Number(prompt('Enter a Number'));
        d = fouthTask(d);
        console.log(d);
        break;

    case(5):
        let e = Number(prompt('Enter a Number'));
        fifthTask(e);
        break;

    default:
        alert('IDK')
        break;
}
