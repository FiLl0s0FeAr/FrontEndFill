class Validator{
    #mailFormat = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    #domainFormat = (/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/);
    #dateFormat = (/^(0?[1-9]|[12][0-9]|3[01])[\/\.](0?[1-9]|1[012])[\/\.]\d{4}$/);
    #phoneFormat = (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/); // XXX-XXX-XXXX   XXX.XXX.XXXX   XXX XXX XXXX

    isEmail(email){
        return (email.match(this.#mailFormat)) ? true : false;
    }

    isDomain(domain){
        return (domain.match(this.#domainFormat)) ? true : false;
    }

    isDate(date){
        return (date.match(this.#dateFormat)) ? true : false;
    }

    isPhone(phone){
        return (phone.match(this.#phoneFormat)) ? true : false;
    }
}

let val = new Validator();  
console.log(val.isEmail('phphtml@mail.ru'));
console.log(val.isDomain('phphtml.net'));
console.log(val.isDate('09.12.2021'));
console.log(val.isPhone('123 456 7890'));


