class Person {
    name = '';
    lastName = '';
    age = 0;
    #cedula = '0';
    _birthDate = '0';

    constructor(name, lastName, age, cedula, birthDate) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.#cedula = cedula;
        this._birthDate = birthDate;
    }

    getFullName() {
        return `${this.name} ${this.lastName}`;
    }

    getCedula() {
        return this.#cedula;
    }

    #getBirthDate() { // Error
        return this._birthDate;
    }

    getPublicDate() {
        return this.#getBirthDate();
    }
}

p1 = new Person('John', 'Doe', 30, '123456789', '01/01/1990');
console.log(p1);
console.log(p1.name);
console.log(p1.lastName);
console.log(p1.age);
console.log(p1.getFullName);
console.log(p1.getCedula()); // Error
//console.log(p1.getBirthDate()); // Error
console.log(p1.getPublicDate());


class animal {
    name = '';
    age = 0;
    #type = '';

    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.#type = type;
    }

    hacerSonido() {
        return 'Sonido';
    }

    bailar() {
        return 'is dancing';
    }
}

animal1 = new animal('Dog', 5, 'Mammal');
animal2 = new animal('Cat', 3, 'Mammal');

console.log(animal1);
console.log(animal1.name);

class Dog extends animal {
    constructor(name, age, type) {
        super(name, age, type);
    }

    hacerSonido() {
        return 'Woof';
    }
}

perro = new Dog('Dog', 5, 'Mammal');
console.log(perro.hacerSonido());