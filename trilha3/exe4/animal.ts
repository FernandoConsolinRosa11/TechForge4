abstract class Animal {
    private energia: number;
    protected especie: string;

    constructor(especie: string, energiainicial: number = 50) {
        this.especie = especie;
        this.energia = energiainicial;
        console.log(`Um ${this.especie} nasceu com ${this.energia} de energia.`);
    }

    public get _energia(): number {
        return this.energia;
    }

    protected alterarEnergia(delta: number): number {
        this.energia += delta;
        return this.energia;
    }

    public abstract comer(ganhoEnergia: number): void;

    public mostrarEnergia(): void {
        console.log(`O ${this.especie} tem energia atual de: ${this.energia}`);
    }
}

class Leao extends Animal {
    private nome: string;

    constructor(nome: string, energiaInicial: number = 70) {
        super("Leão", energiaInicial)
        this.nome = nome;
    }

    public comer(energiaRefeicao: number): void {
        const gastoCaca = 20;
        console.log(`\n ${this.nome} (Leão) iniciou a caçada...`);

        let energiaAtual = this.alterarEnergia(-gastoCaca);
        console.log(`   -> Gastou ${gastoCaca} de energia na caçada. Energia atual: ${energiaAtual}`);

        
        let energiaFinal = this.alterarEnergia(energiaRefeicao);
        console.log(`   -> Consumiu a presa e ganhou ${energiaRefeicao} de energia. Energia final: ${energiaFinal}`);
    }

}

class Passaro extends Animal{
    private nome:string;

    constructor(nome:string, energiaInicial:number = 30){
        super("Pássaro",energiaInicial)
        this.nome = nome;
    }

    public comer(energiaRefeicao:number):void{
        console.log(`\n${this.nome} (Pássaro) está se alimentando...`);

        let energiaFinal = this.alterarEnergia(energiaRefeicao);
        console.log(`   -> Ganhou ${energiaRefeicao} de energia. Energia final: ${energiaFinal}`);
    }
}


const leaoSimba = new Leao("Simba", 80);
const passaroPiu = new Passaro("Piu", 40);


const animais: Animal[] = [leaoSimba, passaroPiu];


console.log("=".repeat(50));

leaoSimba.comer(50);
passaroPiu.comer(10);