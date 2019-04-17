interface Cloneable {}

abstract class Animal implements Cloneable {
    protected clone<T>(): T {
        const instance: T = Object.create(Object.getPrototypeOf(this));
        return Object.assign(instance, this);
    }

    public abstract makeCopy(): Animal;
}

class Sheep extends Animal {
    constructor() {
        console.log('Creating sheep');
        super();
    }

    public makeCopy(): Sheep {
        console.log('Cloning sheep');
        return this.clone();
    }
}

class Goat extends Animal {
    constructor() {
        console.log('Creating goat');
        super();
    }

    public makeCopy(): Goat {
        console.log('Cloning goat');
        return this.clone();
    }
}

class CloneFactory {
    public getClone(animal: Animal) {
        return animal.makeCopy();
    }
}

const cloneFactory = new CloneFactory();
const sally = new Sheep();
const dolly = cloneFactory.getClone(sally);

console.log(sally);
console.log(dolly);
console.log(sally === dolly);