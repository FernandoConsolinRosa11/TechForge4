class Agenda{
    compromissos: string[];

    constructor(){
        this.compromissos = [];
    }

    AddCompromisso(compromisso:string):void {
        this.compromissos.push(compromisso);
    }

    ListarCompromissos():void {
        if(this.compromissos.length === 0){
            console.log(" Não há compromissos por enquanto!");
            
        } else{
            console.log(" Compromissos na agenda :");
            this.compromissos.forEach((c,i) => {
                console.log(`${i + 1}. ${c}`);
            });
        }
    }
}

const minhaAgenda = new Agenda();
minhaAgenda.AddCompromisso("Academia");
minhaAgenda.AddCompromisso("Faculdade às 18:00");
minhaAgenda.ListarCompromissos();