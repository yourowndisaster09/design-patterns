interface TodoList {
    getHtml(tabs: number): string;
}

class Todo implements TodoList {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    public getHtml(tabs: number = 0): string {
        return `${(Array(tabs).fill('  ')).join('')}${this.text}`;
    }
}

class Project implements TodoList {
    private title: string;
    private todoList: TodoList[];

    constructor(title: string, todoList: TodoList[]) {
        this.title = title;
        this.todoList = todoList;
    }

    public getHtml(tabs: number = 0): string {
        const tabFill = (Array(tabs).fill('  ')).join('')
        return `${tabFill}<h1>${this.title}</h1>
${tabFill}<ul>${(this.todoList.map((todoListItem) => `
${tabFill}  <li>
${todoListItem.getHtml(tabs + 2)}
${tabFill}  </li>`).join(''))}
${tabFill}</ul>`;
    }
}

const todo1 = new Todo('Todo 1');
const todo2 = new Todo('Todo 2');
const todo3 = new Todo('Todo 3');
const todo4 = new Todo('Todo 4');
const todo5 = new Todo('Todo 5');
const todo6 = new Todo('Todo 6');
const todo7 = new Todo('Todo 7');
const project1 = new Project('Project1', [todo1, todo2]);
const project2 = new Project('Project2', [todo3]);
const project3 = new Project('Project3', [project1, todo4, todo5]);
const project4 = new Project('Project4', [todo6, project2]);
const root = new Project('Root Todo', [todo7, project3, project4]);
console.log(root.getHtml());