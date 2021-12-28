const Week = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
}

function firstTask(n){
    if(n < 0){
        n *= -1;
    }
    return n * n;
}

function secondTask(a, b){
    return a + b;
}

function thirdTask(a, b, c){
    return (a + b) / c;
}

function fouthTask(n){
    if (Week[n]){
        return Week[n];
    }
    else{
        return 'IDK';
    }
}

let choise = Number(prompt('Enter a number of task: [1-4]'));

switch(choise){
    case(1):
        let n = Number(prompt('Enter a Number'));
        n = firstTask(n);
        console.log(n);
        break;
    
    case(2):
        let a = Number(prompt('Enter a first Number'));
        let b = Number(prompt('Enter a second Number'));
        let sum = 0;
        sum = secondTask(a, b);
        console.log(sum);
        break;

    case(3):
        let x = Number(prompt('Enter a first Number'));
        let y = Number(prompt('Enter a second Number'));
        let z = Number(prompt('Enter a third Number'));
        let result = 0;
        result = thirdTask(x, y, z);
        console.log(result);
        break;

    case(4):
        let week = Number(prompt('Enter a Number'));
        let str = '';
        str = fouthTask(week);
        console.log(str);
        break;

    default:
        alert('IDK')
        break;
}
