function createFunctions(n) {
    let callbacks = [];

    for (let i=0; i<n; i++) {
      callbacks.push(makeCallback(i));
    }

    return callbacks;
}

function makeCallback(index) {
    return function() {
      return index;
    };
}

let callbackFunc = createFunctions(5);
console.log(callbackFunc[4]()); 


/*
function createFunctions(n){
    let result = [];
    for(let i = 0; i < n; i++){
        result.push(function(){
            let array = [];
            for(let j = 0; j < i; j++){
                array.push(j);
            }
            console.log(array);
        });
    }
    return result;
}
 */