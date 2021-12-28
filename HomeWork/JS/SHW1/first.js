/*First Task*/
function firstTaskA(n){
    return Math.pow(2, n)
}

function firstTaskB(n){
    let result = 1;

    for (let i = 0; i < (n - 1); i++){
        result = result * (n - i);
    }

    return result;
}

function firstTaskC(n){
    let result = 1;

    for (let i = 1; i <= n; i++){
        result = result * (1 + (1 / Math.pow(i, 2)));
    }

    return result;
}

function firstTaskD(n){
    let result = 0;

    for (let i = 1; i <= n; i++){

        let temp = 0;
        for (let j = 1; j <= n; j++){
            temp += Math.sin(j)
        }
        result += 1 / temp;
    }

    return result;
}

function firstTaskE(n){
    let result = 1;

    for (let i = 0; i < n; i++){
        result = Math.sqrt(2 + taskE);
    }

    return result;
}

function firstTask(n){
    let taskA = firstTaskA(n);
    let taskB = firstTaskB(n);
    let taskC = firstTaskC(n);
    let taskD = firstTaskD(n);
    let taskE = firstTaskE(n);

    alert(`A = ${taskA}, B = ${taskB}, C = ${taskC}, D = ${taskD}, E = ${taskE}`)
}

/*Second Task*/

function secondTaskA(x, y){
    let result = Math.max(x, y);
    return result;
}

function secondTaskB(x, y){
    let result = Math.min(x, y);
    return result;
}

function secontTask(x, y){
    let taskA = secondTaskA(x, y);
    let taskB = secondTaskB(x, y);

    alert(`A = ${taskA}, B = ${taskB}, C = Max: ${taskA}; Min: ${taskB}`);
}

/*Third task*/

function thirdTaskA(x, y, z){
    let result = Math.max(x, y, z);
    return result;
}

function thirdTaskB(x, y, z){
    let result = Math.min(x, y, z);
    return result;
}

function thirdTask(x, y, z){
    let taskA = thirdTaskA(x, y, z);
    let taskB = thirdTaskB(x, y, z);

    alert(`A = ${taskA}, B = Min: ${taskB}; Max: ${taskA}`);
}

/*Fouth Task*/

function fouthTaskA(x, y, z){
    let result = Math.max(x + y + z, x * y * z);
    return result;
}

function fouthTaskB(x, y, z){
    let temp = z / 2;
    let result = Math.min(x + y + temp, x * y* z);
    result = Math.pow(taskB, 2) + 1;

    return result;
}

function fouthTask(x, y, z){
    let taskA = fouthTaskA(x, y, z);
    let taskB = fouthTaskB(x, y, z);

    alert(`A = ${taskA}, B = ${taskB}`);
}

let task = Number(prompt('Enter a number of task (1 - 4)', 1));

switch(task){
    case 1:
        let firstN = Number(prompt('Enter the natural number'));
        firstTask(firstN);
        break;
    
    case 2:
        alert('Enter the 2 real numbers');
        let secondX = Number(prompt('x'));
        let secondY = Number(prompt('y'));
        secontTask(secondX, secondY);
        break;

    case 3:
        alert('Enter the 3 real numbers');
        let thirdX = Number(prompt('x'));
        let thirdY = Number(prompt('y'));
        let thirdZ = Number(prompt('z'));
        thirdTask(thirdX, thirdY, thirdZ);
        break;
    
    case 4:
        alert('Enter the 3 real numbers');
        let fouthX = Number(prompt('x'));
        let fouthY = Number(prompt('y'));
        let fouthZ = Number(prompt('z'));
        fouthTask(fouthX, fouthY, fouthZ);
        break;
    
    default:
        alert('No task with this ' + task + 'number' );
}