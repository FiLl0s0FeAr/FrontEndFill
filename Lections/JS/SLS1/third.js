let parent = {
    property1: 'value1',
    property2: 'value2',
    method1(){
        console.log(this.property1)
    },
    method2(){
        console.log(this.property2);
    }
};

let child = {
    __proto__: parent
};

child.property1 = 'child.value1';
child.method1();

/*
function Car(){
}

Car.prototype.run = function(){
    console.log(123);
}

let car1 = new Car();
let car2 = new Car();

car1.run();
car2.run();
*/