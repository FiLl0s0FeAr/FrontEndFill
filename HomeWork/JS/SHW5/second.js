let randomNumberOneToOneHundred = function() {
	let random_numbers_list = [];
	return function() {
		let new_random_number = Math.floor(Math.random() * 100 + 1);
		for (let i = 0; i < random_numbers_list.length; i++) {
			if (random_numbers_list[i] === new_random_number) {
                return
            }
		};

		parag.innerHTML += new_random_number+', ';
		random_numbers_list.push(new_random_number);
	}
}

let but = document.getElementById('randomButton').addEventListener('click', randomNumberOneToOneHundred());
let parag = document.getElementById('listOfUsedRandomNumbers')


/*
function makeGenerator(min, max) {
    let n = max-min;
    let used = [];
    return function () {
        let number;
        let isExists;
        let isFull = false;
        do {
            number = Math.round(Math.random() * (max - min) + min);
            isExists = false;
            for (let i = 0; i < used.length; i++) {
                if (used[i] === number) {
                    isExists = true;
                    break;
                }
            }
            isFull = used.length === n + 1;
        } while (!isFull && isExists);
        if (!isFull) {
            used.push(number);
            return number;
        }
        return null;
    }
}

let generator = makeGenerator(1,4);
*/