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