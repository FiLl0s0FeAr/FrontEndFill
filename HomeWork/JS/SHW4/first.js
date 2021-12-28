const mas1 = [2, 5, 9, 15, 0, 4];
const mas3 = [1, 2, 5, 9, 4, 13, 4, 10];
const mas5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const masWeek = ['M', 'T', 'W', 'Th', 'F', 'St', 'S'];

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function firstTask(){
    for(let i = 0; i < mas1.length; i++){
        if ((mas1[i] > 3) && (mas1[i] < 10)){
            console.log(mas1[i]);
        }
    }
}


function secondTask(min = -10, max = 10){
    let mas2 = [];
    let sum = 0;

    for(let i = 0; i< max; i++){
        mas2[i] = getRandomArbitrary(min, max);

        if(mas2[i] > 0){
            sum += mas2[i];
        }
    }

    console.log(`Sum= ${sum}`)
}

function thirdTask(){
    for(let i = 0; i < mas3.length; i++){
        if (mas3[i] === 4){
            console.log('Есть!');
            break;
        }
    }
}


function fouthTask(min = 0, max = 1000){
    let mas4 = [];
    let x = 0;

    for(let i = 0; i< max; i++){
        mas4[i] = getRandomArbitrary(min, max);
        x = mas4[i];
        if (x > 9) {
            while (x > 9) {
                x = (x / 10) | 0;
            }
            if(x === 1 || x === 2 || x === 5){
                console.log(mas4[i]);
            }
        }
    }
}

function fifthTask(){
    let result = '';
    for(let i = 0; i < mas5.length; i++){
        result = result + mas5[i] + '-';
    }
    console.log(result);
}

function sixthTask(){
    for(let i = 0; i < masWeek.length; i++){
        if(masWeek[i] !== 'St' && masWeek[i] !== 'S'){
            console.log(masWeek[i]);
        }
        else{
            //console.log(`${masWeek[i]}.bold`);
            console.log(masWeek[i].bold());
        }
    }
}

function seventhTask(){

}

function eighthTask(){
    const startNumber = 1000;
    let num = 0;
    let n = startNumber;

    while(n > 50){
        n /= 2;
        num += 1;
    }
    console.log(`n = ${n}, num = ${num}`);
}

function allFunctions(){
    firstTask();
    secondTask();
    thirdTask();
    fouthTask();
    fifthTask();
    sixthTask();
    seventhTask();
    eighthTask();
}

let choise = Number(prompt('Enter a number of task: [1-8] or 0 - All'));

switch(choise){
    case(0):
        allFunctions();
        break;

    case(1):
        firstTask();
        break;
    
    case(2):
        secondTask();
        break;

    case(3):
        thirdTask();
        break;

    case(4):
        fouthTask();
        break;

    case(5):
        fifthTask();
        break;

    case(6):
        sixthTask();
        break;
    
    case(7):
        seventhTask();
        break;

    case(8):
        eighthTask();
        break;

    default:
        alert('IDK')
        break;
}
