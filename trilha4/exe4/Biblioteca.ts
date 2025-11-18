interface Livro{
    titulo:string;
    autor:string;
    disponivel:boolean;
}

class Biblioteca {
    private acervo: Livro[] = []

    constructor(LivrosIniciais:Livro[] = []){
        this.acervo = LivrosIniciais;
    }

    public adicionarLivro(livro: Livro):void{
        this.acervo.push(livro);
        console.log(`Livro "${livro.titulo}" adicionado ao acervo.`);
    }

    public buscarLivrosDisponiveis():Livro[]{
        return this.acervo.filter(livro => livro.disponivel);
    }
}

const l1: Livro = { titulo: "A Arte da Guerra", autor: "Sun Tzu", disponivel: true };
const l2: Livro = { titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: false };
const l3: Livro = { titulo: "Sapiens", autor: "Yuval Noah Harari", disponivel: true };
const l4: Livro = { titulo: "1984", autor: "George Orwell", disponivel: false };

const minhaBiblioteca = new Biblioteca([l1, l2]);
minhaBiblioteca.adicionarLivro(l3);
minhaBiblioteca.adicionarLivro(l4);

const livrosDisponiveis = minhaBiblioteca.buscarLivrosDisponiveis();


if(livrosDisponiveis.length > 0){
    console.log(`Livros encontrados: ${livrosDisponiveis.length}, Livros disponíveis => `);

    livrosDisponiveis.forEach(livro => {
        console.log(`- ${livro.titulo} (Autor: ${livro.autor})`);
    })
    
} else {
    console.log("Nenhum Livro disponível no momento!");
    
}