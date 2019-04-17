class Duck {
    private flyStrategy: IFlyStrategy;
    private quackStrategy: IQuackStrategy;

    constructor(flyStrategy: IFlyStrategy, quackStrategy: IQuackStrategy) {
        this.flyStrategy = flyStrategy;
        this.quackStrategy = quackStrategy;
    }

    public fly(): void {
        this.flyStrategy.fly();
    }

    public quack(): void {
        this.quackStrategy.quack();
    }
}

interface IFlyStrategy {
    fly(): void;
}

class SimpleFlyStrategy implements IFlyStrategy {
    fly(): void {
        console.log('Flying simply!');
    }
}

class NoFlyStrategy implements IFlyStrategy {
    fly(): void {
        console.log('Cannot fly!');
    }
}

interface IQuackStrategy {
    quack(): void;
}

class LoudQuackStrategy implements IQuackStrategy {
    quack(): void {
        console.log('QUAAAACCCCCKKKKKKKK!');
    }
}

class SilentQuackStrategy implements IQuackStrategy {
    quack(): void {
        console.log('...quack...');
    }
}

// Main
const loudFlyingDuck = new Duck(new SimpleFlyStrategy(), new LoudQuackStrategy())
loudFlyingDuck.fly();
loudFlyingDuck.quack();
const quietLandDuck = new Duck(new NoFlyStrategy(), new SilentQuackStrategy())
quietLandDuck.fly();
quietLandDuck.quack();