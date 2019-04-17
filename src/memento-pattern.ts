class Memento {
    private article: string;

    constructor(savedArticle: string) {
        this.article = savedArticle;
    }

    public getSavedArticle(): string {
        return this.article;
    }
}

class Originator {
    private article: string;

    public setMemento(newArticle: string): void {
        console.log('From originator: Current version of article:');
        console.log(newArticle + '\n');
        this.article = newArticle;
    }

    public createMemento(): Memento {
        console.log('From originator: Saving memento');
        return new Memento(this.article);
    }

    public restoreFromMemento(memento: Memento): string {
        this.article = memento.getSavedArticle();
        console.log('From originator: Previous article saved in memento:');
        console.log(this.article + '\n');
        return this.article;
    }
}

class Caretaker {
    private savedArticles: Memento[] = [];

    public addMemento(memento: Memento): void {
        this.savedArticles.push(memento);
    }

    public getMemento(index: number): Memento {
        return this.savedArticles[index];
    }
}


const caretaker = new Caretaker();
const originator = new Originator();

originator.setMemento('The quick');
caretaker.addMemento(originator.createMemento());
originator.setMemento('The quick brown fo');
caretaker.addMemento(originator.createMemento());
originator.setMemento('The quick brown fox jacks o');
caretaker.addMemento(originator.createMemento());
originator.setMemento('The quick brown fox jump');
caretaker.addMemento(originator.createMemento());
originator.setMemento('The quick brown fox jump over the lazy');
caretaker.addMemento(originator.createMemento());
originator.setMemento('xxx');
caretaker.addMemento(originator.createMemento());
originator.restoreFromMemento(caretaker.getMemento(4));