type Results = Record<string,number>;

abstract class VoteSystem {
    protected votes: Results = {}

    public abstract voteFor(candidate:string):void;

    public abstract getResults():object;
}

class Election extends VoteSystem {
    public voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0 ) + 1;
        console.log(`Eleição: Voto registrado para ${candidate}.`);
    }

    public getResults(): Results{
        console.log("Eleição: Retornando total de votos por candidato.");
        return this.votes;
    }
}

class Poll extends VoteSystem {
    public voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
        console.log(`Enquete: Voto registrado para ${candidate}.`);
    }

    public getResults(): Array<{name:string , votes:number}>{
        console.log("Enquete: Retornando candidatos ordenados por votos.");

        const resultsArray = Object.entries(this.votes);

        const mappedResults = resultsArray.map(([name,votes]) => ({name,votes}));

        mappedResults.sort((a,b) => b.votes - a.votes);

        return mappedResults;
    }
}

console.log("\n==================================");
console.log("Sistema de Eleição (Election)");
console.log("==================================");
const eleicao = new Election();
eleicao.voteFor("Alpha");
eleicao.voteFor("Beta");
eleicao.voteFor("Alpha");
eleicao.voteFor("Gama");
eleicao.voteFor("Beta");
eleicao.voteFor("Alpha");

console.log("\nResultados da Eleição:");
console.log(eleicao.getResults());


console.log("\n==================================");
console.log("Sistema de Enquete (Poll)");
console.log("==================================");
const enquete = new Poll();
enquete.voteFor("Tecnologia");
enquete.voteFor("Esporte");
enquete.voteFor("Arte");
enquete.voteFor("Tecnologia");
enquete.voteFor("Tecnologia");
enquete.voteFor("Arte");

console.log("\nResultados da Enquete (Ordenados):");
console.log(enquete.getResults());
