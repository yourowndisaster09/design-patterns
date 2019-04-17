abstract class Beverage {
    public abstract getDescription(): string;
    public abstract getCost(): number;
}

abstract class AddOnDecorator extends Beverage {
    protected beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }
}

class Espresso extends Beverage {
    public getDescription(): string {
        return '1 Espresso coffee';
    }

    public getCost(): number {
        return 200;
    }
}

class Decaf extends Beverage {
    public getDescription(): string {
        return '1 Decaf';
    }

    public getCost(): number {
        return 130;
    }
}

class Caramel extends AddOnDecorator {
    public getDescription(): string {
        return `${this.beverage.getDescription()} with caramel`;
    }

    public getCost(): number {
        return this.beverage.getCost() + 11;
    }
}

class Soy extends AddOnDecorator {
    public getDescription(): string {
        return `${this.beverage.getDescription()} with soy`;
    }

    public getCost(): number {
        return this.beverage.getCost() + 36;
    }
}

const decaf = new Decaf();
const caramelDecaf = new Caramel(decaf);
console.info(`${decaf.getDescription()} for ${decaf.getCost()}`);
console.info(`${caramelDecaf.getDescription()} for ${caramelDecaf.getCost()}`);
