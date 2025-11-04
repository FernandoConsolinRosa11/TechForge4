class Temperatura{
    valor:number;

    constructor(valor:number){
        this.valor = valor;
    }

    paraF():number{
        return this.valor  * 9 / 5 + 32;
    }

    paraK(): number{
        return this.valor + 273.15;
    }
}

const temp = new Temperatura(25);
console.log(`Temperatura em Celsius: ${temp.valor}°C`);
console.log(`Em Fahrenheit: ${temp.paraF().toFixed(2)}°F`);
console.log(`Em Kelvin: ${temp.paraK().toFixed(2)}K`);