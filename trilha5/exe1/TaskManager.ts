interface task {
    name: string;
    categoria: 'Projeto' | 'Diária';
}

abstract class TaskManager {
    protected tasks: task[] = [];


    public abstract addTask(task: string): void;

    public abstract listTasks(): task[];

    protected _taskexist(taskName: string): boolean {
        return this.tasks.some(task => task.name === taskName);
    }
}

class Project extends TaskManager {
    public addTask(taskName: string): void {
        if (!this._taskexist(taskName)) {
            const newTask: task = {
                name: taskName,
                categoria: "Projeto"
            }

            this.tasks.push(newTask);
            console.log("Novo Projeto Adicionado!");

        } else {
            console.log("O Projeto já existe!");

        }
    }

    public listTasks(): task[] {
        return this.tasks;
    }
}

class Diaria extends TaskManager {
    public addTask(taskName: string): void {
        if (!this._taskexist(taskName)) {
            const newTask: task = {
                name: taskName,
                categoria: "Diária"
            }

            this.tasks.push(newTask);
            console.log("Nova tarefa Diária Adicionado!");

        } else {
            console.log("A tarefa já existe!");
        }
    }

    public listTasks(): task[] {
        return this.tasks;
    }
}

console.log("--- Gerenciando Projeto ---");
const meuProjeto = new Project();
meuProjeto.addTask("Desenhar Wireframe");
meuProjeto.addTask("Codificar API");

console.log("--- Gerenciando Diárias ---");
const diarias = new Diaria();

diarias.addTask("Corrigir Bugs");
diarias.addTask("Exportar Banco de dados");

console.log("--- Listando Tarefas ---");
console.log("Projetos:", meuProjeto.listTasks());
console.log("Diárias:", diarias.listTasks());


