class Livro {
    private titulo: string;
    private autor: string;
    private paginas: number;
    private lido: boolean;

    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false; // Por padrão, o livro não foi lido
    }

    public marcarLido(): void {
        if (this.lido) {
            console.log(`O livro "${this.titulo}" já foi marcado como lido!`);
            return;
        }

        this.lido = true;

        console.log(`O livro "${this.titulo}" foi marcado como lido!`);

    }

    public marcarNaoLido(): void {
        if (!this.lido) {
            console.log(`O livro "${this.titulo}" já foi marcado como não lido!`);
            return;
        }

        this.lido = false;

        console.log(`O livro "${this.titulo}" foi marcado como não lido!`);

    }



    public getTitulo(): string {
        return this.titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public getPaginas(): number {
        return this.paginas;
    }

    public getLido(): boolean {
        return this.lido;
    }

    public exibirInformacoes(): void {
        console.log("\n=== Informações do Livro ===");
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Páginas: ${this.paginas}`);
        console.log(`Status: ${this.lido ? "✓ Lido" : "✗ Não lido"}`);
        console.log("============================\n");
    }

}

const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1178);

livro1.exibirInformacoes();
livro1.marcarLido();

console.log(`\n"${livro1.getTitulo()}" foi lido? ${livro1.getLido() ? "Sim" : "Não"}`);
livro1.exibirInformacoes();