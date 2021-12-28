let array = [1, 2, 3, 4];

function filter(array, callback){
    let result = [];

    for (let item of array){
        if (callback(item)){
            result.push(item);
        }
    }

    return result;
}

function is(item){
    return item['isDone'] === false;
}

let result = filter(array, is);

let task = [
    {text: '1', isDone: true},
    {text: '2', isDone: false},
    {text: '3', isDone: true},
    {text: '4', isDone: false},
    {text: '5', isDone: false},
    {text: '6', isDone: true}
]

console.log(filter(task, is))

console.log(task.filter(word => word.isDone === false))