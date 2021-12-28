//Task 1

// class Worker {
//     constructor(name, surname, rate, days) {
//       this.name = name;
//       this.surname = surname;
//       this.rate = rate;
//       this.days = days;
//     }

//     getSalary() {
//       console.log(this.rate * this.days);
//     }
// }

// let worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.name);
// console.log(worker.surname); 
// console.log(worker.rate); 
// console.log(worker.days); 
// worker.getSalary(); 

//Task 2
//Task 3
class Worker {
    #name
    #surname
    #rate
    #days

    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }

    getName() {
        return console.log(`${this.#name} ${this.#surname}`)
    }

    getRate() {
        return console.log(`${this.#rate}`)
    }

    setRate(rate) {
        return this.#rate = rate
    }

    getDays() {
        return console.log(`${this.#days}`)
    }

    setDays(days) {
        return this.#days = days
    }

    getSalary() {
        return console.log(this.#rate * this.#days)
    }

    setSalary() {
        return console.log(this.#rate * this.#days)
    }
}

let worker = new Worker('Иван', 'Иванов', 10, 31);
worker.getName()
worker.getRate()
worker.getDays()
worker.getSalary()
console.log(worker.setRate(20))
console.log(worker.setDays(10))
worker.setSalary()
