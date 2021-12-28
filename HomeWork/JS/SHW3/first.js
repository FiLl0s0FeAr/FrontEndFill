const str = 'я учу javascript!';
const strJS = 'JS';
const strjs = 'js';
const abc = 'aaa bbb ccc';
const longStr = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fugiat laudantium provident odio. Aliquid rerum ullam et ipsam iste! Repellat culpa voluptate quos, quo voluptatem labore repudiandae cum possimus earum.';

function firstTask(){
    alert(str.length);
}

function secondTask(){
    alert('substr ' + str.substr(2, 3) + ' ' + str.substr(6, 10));
    alert('substring ' + str.substring(2, 5) + ' ' + str.substring(6, 16));
    alert('slice ' + str.slice(2, 5) + ' ' + str.slice(6, 16));
}

function thirdTask(){
    alert(str.indexOf('учу'));
}

function fouthTask(n){
    let result = '';

    if (longStr.length > n){
        result = longStr.slice(0, n);
        result += '...';
    }
    else
    {
        result = longStr;
    }

    alert(result);
}

function fifthTask(){
    alert(strjs.toUpperCase());
    alert(strJS.toLocaleLowerCase());
}

function sixthTask(){
    alert('substr ' + abc.substr(4, 3));
    alert('substring ' + abc.substring(4, 7));
    alert('slice ' + abc.slice(4, 7));
}

let choise = Number(prompt('Enter a number of task: [1-6] or 0 - All'));

switch(choise){
    case(0):
        firstTask();
        secondTask();
        thirdTask();
        fouthTask();
        fifthTask();
        sixthTask();
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
    
    default:
        alert('IDK')
        break;
}
