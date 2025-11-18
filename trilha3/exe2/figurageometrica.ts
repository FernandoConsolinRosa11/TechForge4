// 1. Classe Abstrata (Define o Contrato)
abstract class FiguraGeometrica {

    constructor() {
        console.log(`Figura geométrica do tipo ${this.constructor.name} criada.`);
    }
    

  
    abstract calcularArea(): number;
    
    apresentar(): void {
        console.log(`Esta é uma figura do tipo: ${this.constructor.name}`);
    }
}


class Circulo extends FiguraGeometrica {
    private raio: number;

    constructor(raio: number) {
        super(); 
        this.raio = raio;
    }


    calcularArea(): number {
    
        return Math.PI * this.raio ** 2;
    }
}


class Quadrado extends FiguraGeometrica {
    private lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }


    calcularArea(): number {

        return this.lado * this.lado;
    }
}


class Triangulo extends FiguraGeometrica {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura;
    }

  
    calcularArea(): number {
   
        return (this.base * this.altura) / 2;
    }
}


function imprimirAreas(figuras: FiguraGeometrica[]): void {
    console.log("\n--- Calculando as Áreas ---");
    figuras.forEach((figura) => {
        
        const area = figura.calcularArea();
        console.log(`${figura.constructor.name}: Área = ${area.toFixed(2)}`);
    });
}


console.log("\n--- Instanciando as figuras ---");


const circulo1 = new Circulo(5);
const quadrado1 = new Quadrado(8);
const triangulo1 = new Triangulo(10, 4);

const minhasFiguras: FiguraGeometrica[] = [
    circulo1,
    quadrado1,
    triangulo1
];


imprimirAreas(minhasFiguras);