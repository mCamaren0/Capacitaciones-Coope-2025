class Cuadrado {
    lado = 0;
    constructor(lado) {
        this.lado = lado;
    }

    getArea() {
        return this.lado * this.lado;
    }

    getPerimetro() {
        return this.lado * 4;
    }

    getAreaPerimetro() {
        return `Area: ${this.getArea()} Perimetro: ${this.getPerimetro()}`;
    }
}

console.log("\n********************** Cuadrado1 **********************");
c1 = new Cuadrado(5);
console.log('Area: '+c1.getArea());
console.log('Perimetro: '+c1.getPerimetro());
console.log('Area y perimetro: '+c1.getAreaPerimetro());

console.log("\n********************** Cuadrado2 **********************");
c2 = new Cuadrado(10);
console.log('Area: '+c2.getArea());
console.log('Perimetro: '+c2.getPerimetro());
console.log('Area y perimetro: '+c2.getAreaPerimetro());