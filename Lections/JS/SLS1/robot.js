const $field = document.querySelector('.field');

for (let i = 0; i < 8; i++) {
    let $row = document.createElement('div');
    $row.classList.add('row');
    for (let j = 0; j < 8; j++) {
        let $col = document.createElement('div');
        $col.classList.add('col');
        $row.appendChild($col);
    }
    $field.appendChild($row);
}

class Robot {
    #color;
    #attack;
    #hp;
    #x;
    #y;

    constructor(color, attack, hp, x = null, y = null) {
        this.#color = color;
        this.#attack = attack;
        this.#hp = hp;
        this.#x = x;
        this.#y = y;
    }

    get color() {
        return this.#color;
    }

    get attack() {
        return this.#attack;
    }

    get hp() {
        return this.#hp;
    }

    set hp(hp) {
        if(hp < 0){
            hp = 0;
        }else{
            this.#hp = hp;
        }
    }

    get x() {
        return this.#x;
    }

    set x(x) {
        this.#x = x;
    }

    get y() {
        return this.#y;
    }

    set y(y) {
        this.#y = y;
    }
}

function moveRobot(robot, x, y) {
    if (robot.x !== null && robot.y !== null) {
        let temp = $field.childNodes[robot.x].childNodes[robot.y];
        temp.querySelector('.' + robot.color).remove();
    }
    let $robot = document.createElement('div');
    $robot.classList.add('robot');
    $robot.classList.add(robot.color);
    $robot.innerHTML = robot.hp + 'hp';
    let target = $field.childNodes[x].childNodes[y];
    target.appendChild($robot);
    robot.x = x;
    robot.y = y;
}

function makeSwap() {
    let i = 0;
    return function (a, b) {
        if (i++ % 2 === 0) {
            return [a, b];
        }
        return [b, a];
    }
}

function fight(robot1, robot2) {
    robot2.hp -= robot1.attack;
}

const swap = makeSwap();

function iteration(){
    fight(...swap(robot1,robot2));
    moveRobot(robot1, 0, 0);
    moveRobot(robot2, 0, 0);
    if(robot1.hp > 0 && robot2.hp > 0){
        setTimeout(iteration, 500);
    }
}

// setTimeout(iteration, 500);


let colors = ['green','magenta','yellow'];

function getNextRobotColor(){
    return colors.pop();
}

let robots = [];
for(let i = 0; i < 3; i++){
    robots.push(
        new Robot(getNextRobotColor(), 25,200)
    )
}
for(let robot of robots){
    moveRobot(robot, rand(), rand());
}

function rand(){
    return Math.round(Math.random() * 7);
}

function shortestPath(robot1,robot2){
    return Math.sqrt(((robot2.x - robot1.x)**2) + ((robot2.y - robot1.y)**2));
}

function makeSwap(x, y) {
    let i = 0;
    return function () {
        if (i++ % 2 === 0) {
            return [x, y]
        } else {
            return [y, x];
        }
    }
}

class Robot {
    constructor(name, attack, hp) {
        this.name = name;
        this.attack = attack;
        this.hp = hp;
    }

    fight(robot) {
        robot.hp -= this.attack;
    }

    toString() {
        return `${this.name}[${this.attack},${this.hp}]`;
    }
}

class Attack {
    fight(robot1, robot2) {
        robot2.hp -= robot1.attack;
    }

    toString() {
        return 'Attack';
    }
}

class DoubleAttack {
    fight(robot1, robot2) {
        robot2.hp -= robot1.attack * 2;
    }

    toString() {
        return 'Double attack';
    }
}

class Kill {
    fight(robot1, robot2) {
        if (Math.round(Math.random() * 5) === 1) {
            robot2.hp = 0;
        } else {
            robot2.hp -= robot1.attack;
        }
    }

    toString() {
        return 'Kill';
    }
}

class Fight {
    run(robot1, robot2) {
        let attackTypes = [new Attack(), new DoubleAttack(), new Kill(),];
        let swap = makeSwap(robot1, robot2);
        do {
            let index = Math.round(Math.random() * (attackTypes.length - 1));
            let attackType = attackTypes[index];
            attackType.fight(...swap());
            console.log(attackType.toString());
        } while (robot1.hp > 0 && robot2.hp > 0);
        if(robot1.hp > 0){
            console.log(robot1.toString(), 'winner');
        }else{
            console.log(robot2.toString(), 'winner');
        }
    }
}


let robot1 = new Robot('Robot 01', 25, 200);
let robot2 = new Robot('Robot 02', 10, 300);

let fight = new Fight();
fight.run(robot1, robot2);