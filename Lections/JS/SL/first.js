let collection = [
    {
        name: 'John',
        age: 12,
        salary: 750
    },
    {
        name: 'Anna',
        age: 13,
        salary: 750
    },
    {
        name: 'Zeus',
        age: 14,
        salary: 750
    },
];

let collection1 = [
    {
        name: 'Max',
        age: 17,
        salary: 550
    },
];

function compare(a, b, property) {
    if (a[property] < b[property]) {
        return -1;
    } else if (a[property] > b[property]) {
        return 1;
    }
    return 0;
}
function makeCondition(propertyName, direction) {
    return function (a, b) {
        if (direction === 'desc') {
            let c;
            c = a;
            a = b;
            b = c;
        }

        return compare(a, b, propertyName);
    }
}

function applyConditions(conditions) {
    return function (a,b) {
        let result = 0;
        let i = 0;
        do {
            result = conditions[i++](a,b);
        } while (result === 0 && i < conditions.length);
        return result;
    }
}

function sort(...collections) {

    let collection = [].concat(...collections);

    let conditions = [];

    function part(propertyName, direction = 'asc') {
        if(!propertyName || !direction){
            return collection.sort(applyConditions(conditions));

        }
        conditions.push(makeCondition(propertyName, direction));
        return part;
    }

    return part;
}

let result = sort(collection,collection1)('salary','desc')('name','desc')('age')();

console.log(result);
