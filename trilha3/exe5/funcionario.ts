abstract class Funcionario{
    private _nome:string;
    private _salario:number;

    constructor(_nome:string, _salario:number){
        this._nome = _nome;
        this._salario = _salario;
    }

    public get nome():string{
        return this._nome;
    }

    public get salario():number{
        return this._salario;
    }

    public abstract calcularBonus():number;
}

class Gerente extends Funcionario{

    constructor(nome:string, salario:number){
        super(nome,salario);
    }

    public calcularBonus(): number {
        return this.salario * 0.10;
    }

}

class Operario extends Funcionario {

    constructor(nome:string, salario:number){
        super(nome,salario);
    }

    public calcularBonus(): number {
        return this.salario * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    console.log("----- Cálculo de Salário Final com Bônus -----");

    funcionarios.forEach(funcionario => {
        const bonus = funcionario.calcularBonus();
        const salarioFinal = funcionario.salario + bonus;

        console.log(`\nNome: ${funcionario.nome}`);
        console.log(`Cargo: ${funcionario instanceof Gerente ? 'Gerente' : 'Operário'}`);
        console.log(`Salário Base: R$${funcionario.salario.toFixed(2)}`);
        console.log(`Bônus: R$${bonus.toFixed(2)}`);
        console.log(`Salário Final: R$${salarioFinal.toFixed(2)}`);
    });
}

const funcionario1  = new Gerente("Donald Trump",10000.00 );
const funcionario2 = new Operario("Putin",2000.00);

const listafuncionarios: Funcionario[] = [
    funcionario1,
    funcionario2
];

calcularSalarioComBonus(listafuncionarios);


