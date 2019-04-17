class ConversionContext {
    private fromConversion: string;
    private toConversion: string;
    private quantity: number;

    constructor(input: string) {
        const parts = input.split(' ');
        this.fromConversion = this.getCapitalized(parts[1]);
        this.toConversion = this.getLowercase(parts[3]);
        this.quantity = parseFloat(parts[0]);
    }

    private getCapitalized(word: string) {
        let lowercase = word.toLowerCase();
        lowercase = lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
        if (lowercase.charAt(lowercase.length - 1) !== 's') {
            lowercase += 's';
        }
        return lowercase;
    }

    private getLowercase(word: string) {
        return word.toLowerCase();
    }

    public getFromConversion(): string {
        return this.fromConversion;
    }

    public getToConversion(): string {
        return this.toConversion;
    }

    public getQuantity(): number {
        return this.quantity;
    }
}

abstract class Expression {
    public abstract gallons(quantity: number): string;
    public abstract quartz(quantity: number): string;
    public abstract pints(quantity: number): string;
    public abstract cups(quantity: number): string;
    public abstract tablespoons(quantity: number): string;
}

class Gallons extends Expression {
    public gallons(quantity: number): string {
        return quantity.toString();
    }
    public quartz(quantity: number): string {
        return (quantity * 4).toString();
    }
    public pints(quantity: number): string {
        return (quantity * 8).toString();
    }
    public cups(quantity: number): string {
        return (quantity * 16).toString();
    }
    public tablespoons(quantity: number): string {
        return (quantity * 256).toString();
    }
}

class Client {
    private readonly EXPRESSIONS: {[exp: string]: any} = {
        Gallons: Gallons
    };

    public answer(question: string) {
        const context = new ConversionContext(question);
        const Clazz: any = this.EXPRESSIONS[context.getFromConversion()];
        const expression = new Clazz();
        const result = expression[context.getToConversion()](context.getQuantity());
        return `${question} = ${result}`;
    }
}

const client = new Client();
console.log(client.answer('1 gallon to pints'));
console.log(client.answer('10 gallon to quartz'));