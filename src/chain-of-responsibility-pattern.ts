interface Chain {
    setNextChain(nextChain: Chain): void;
    calculate(numbers: Numbers): void;
}

class Numbers {
    private number1: number;
    private number2: number;
    private calculationType: string;

    constructor(number1: number, number2: number, calculationType: string) {
        this.number1 = number1;
        this.number2 = number2;
        this.calculationType = calculationType;
    }

    public getNumber1(): number {
        return this.number1;
    }

    public getNumber2(): number {
        return this.number2;
    }

    public getCalculationType(): string {
        return this.calculationType;
    }
}

class AddNumber implements Chain {
    private nextInChain: Chain;

    public setNextChain(chain: Chain): void {
        this.nextInChain = chain;
    }

    public calculate(numbers: Numbers): void {
        if (numbers.getCalculationType() === 'add') {
            console.info(`${numbers.getNumber1()} + ${numbers.getNumber2()} = ${numbers.getNumber1() + numbers.getNumber2()}`);
        } else {
            this.nextInChain.calculate(numbers);
        }
    }
}

class SubtractNumber implements Chain {
    private nextInChain: Chain;

    public setNextChain(chain: Chain): void {
        this.nextInChain = chain;
    }

    public calculate(numbers: Numbers): void {
        if (numbers.getCalculationType() === 'sub') {
            console.info(`${numbers.getNumber1()} - ${numbers.getNumber2()} = ${numbers.getNumber1() - numbers.getNumber2()}`);
        } else {
            this.nextInChain.calculate(numbers);
        }
    }
}

class MultNumber implements Chain {
    private nextInChain: Chain;

    public setNextChain(chain: Chain): void {
        this.nextInChain = chain;
    }

    public calculate(numbers: Numbers): void {
        if (numbers.getCalculationType() === 'mult') {
            console.info(`${numbers.getNumber1()} * ${numbers.getNumber2()} = ${numbers.getNumber1() * numbers.getNumber2()}`);
        } else {
            this.nextInChain.calculate(numbers);
        }
    }
}

class DivideNumber implements Chain {
    private nextInChain: Chain;

    public setNextChain(chain: Chain): void {
        this.nextInChain = chain;
    }

    public calculate(numbers: Numbers): void {
        if (numbers.getCalculationType() === 'div') {
            console.info(`${numbers.getNumber1()} / ${numbers.getNumber2()} = ${numbers.getNumber1() / numbers.getNumber2()}`);
        } else {
            this.nextInChain.calculate(numbers);
        }
    }
}

class EndNumber implements Chain {
    public setNextChain(chain: Chain): void {
        console.info('No more next chain');
    }

    public calculate(numbers: Numbers): void {
        console.info('No more calculations');
    }
}


const calc1 = new AddNumber();
const calc2 = new SubtractNumber();
const calc3 = new MultNumber();
const calc4 = new DivideNumber();
const calc5 = new EndNumber();

calc1.setNextChain(calc2);
calc2.setNextChain(calc3);
calc3.setNextChain(calc4);
calc4.setNextChain(calc5);

calc1.calculate(new Numbers(4, 2, 'add'));
calc1.calculate(new Numbers(4, 2, 'sub'));
calc1.calculate(new Numbers(4, 2, 'mult'));
calc1.calculate(new Numbers(4, 2, 'div'));
calc1.calculate(new Numbers(4, 2, 'pow'));