class MyString{
    reverse(str){
        return str.split("").reverse().join("");
    }

    ucFirst(str){
        return str[0].toUpperCase() + str.slice(1)
    }

    ucWords(str){
        return str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    }
}

let test = new MyString();

console.log(test.reverse('ABC'));
console.log(test.ucFirst('abc'));
console.log(test.ucWords('abc asd asd asd asd'));