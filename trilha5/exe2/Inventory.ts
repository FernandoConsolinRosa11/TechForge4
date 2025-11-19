abstract class Inventory {
    protected items: Record<string, number> = {};

    public abstract addItem(item: string, qtd: number): void;

    public abstract removeItem(item: string): void;

    public getInventory(): Record<string,number> {
        return this.items;
    }
}

class WarehouseInventory extends Inventory {
    public addItem(item: string, qtd: number): void {
        if (qtd <= 0) {
            console.log("Quantidade de produtos deve ser maior que 0");
            return;
        }

        const qtd_atual = this.items[item] || 0;
        this.items[item] = qtd_atual + qtd;

        console.log(`Armazém: Adicionado ${qtd} x do item ${item}. Total: ${this.items[item]}`);
    }

    public removeItem(item: string): void {
        if (this.items[item]) {
            delete this.items[item];
            console.log(`Armazém: Item ${item} foi removido`);
        } else {
            console.log("Erro ao remover item do armazém");
        }
    }
}

class StoreInventory extends Inventory {
    private readonly max_qtd_item = 10;

    public addItem(item: string, qtd: number): void {
        if (qtd <= 0) {
            console.log("Quantidade de produtos deve ser maior que 0");
            return;
        }

        const qtd_atual = this.items[item] || 0;
        const qtd_potencial = qtd_atual + qtd;

        if (qtd_potencial > this.max_qtd_item) {
            const qtd_permitida = this.max_qtd_item - qtd_potencial;

            if (qtd_permitida > 0) {
                this.items[item] = this.max_qtd_item;
                console.log(`Loja: Não é possível adicionar ${qtd}x de ${item}. Limite máximo é 10. Apenas ${qtd_permitida} foram adicionados.`);
            } else {
                console.log(`Loja: Item '${item}' já está no limite máximo (${this.max_qtd_item}). Nada adicionado.`);
            }
        } else {
            this.items[item] = qtd_potencial;
            console.log(`Loja: Adicionado ${qtd}x de ${item}. Novo total: ${this.items[item]}`);
        }
    }

    public removeItem(item: string): void {
        if (this.items[item]) {
            this.items[item] -= 1;
            
            if (this.items[item] <= 0) {
                delete this.items[item];
                console.log(`Loja: Última unidade de '${item}' vendida e removida.`);
            } else {
                console.log(`Loja: Vendido 1x de ${item}. Restante: ${this.items[item]}`);
            }
        } else {
            console.log(`Erro: Item '${item}' não encontrado no inventário da loja.`);
        }
    }
}

console.log("\n==================================");
console.log("Inventário do Armazém (Warehouse)");
console.log("==================================");
const warehouse = new WarehouseInventory();
warehouse.addItem("Parafuso M8", 5000); 
warehouse.addItem("Tinta Branca", 100);
warehouse.addItem("Tinta Branca", 50);

console.log("\nInventário Atual do Armazém:", warehouse.getInventory());
warehouse.removeItem("Tinta Branca");
console.log("Inventário Atual do Armazém (Após remoção):", warehouse.getInventory());

console.log("\n==================================");
console.log("Inventário da Loja (Store)");
console.log("==================================");
const store = new StoreInventory();
store.addItem("Lâmpada LED", 8);
store.addItem("Lâmpada LED", 5); 
store.addItem("Vaso Decorativo", 1);
store.addItem("Vaso Decorativo", 10); 

console.log("\nInventário Atual da Loja:", store.getInventory());

store.removeItem("Lâmpada LED");
store.removeItem("Lâmpada LED");
store.removeItem("Vaso Decorativo");

console.log("Inventário Atual da Loja (Após remoções/vendas):", store.getInventory());