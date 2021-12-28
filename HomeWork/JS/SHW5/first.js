function counter() {
	let i = 1;
	return function() {
        return i++
    };
}

let func = counter();

func();
func();
func();
console.log(func());