abstract class Obstacle {
    public abstract move(): void;
}

class Asteriod extends Obstacle {
    private name: string;
    private size: number;

    constructor(name: string, size: number) {
        super();
        this.name = name;
        this.size = size;
    }

    public move(): void {
        console.log(`Asteriod ${this.name} of size ${this.size} moves!`);
    }
}

abstract class ObstacleFactory {
    abstract createObstacle(): Obstacle;
}

class BigAsteriodFactory extends ObstacleFactory {
    public createObstacle(): Obstacle {
        return new Asteriod('Asteriod 1', 2300);
    }
}

class SmallAsteriodFactory extends ObstacleFactory {
    public createObstacle(): Obstacle {
        return new Asteriod('Asteriod 2', 60);
    }
}

const bigObstacleFactory = new BigAsteriodFactory();
const smallObstacleFactory = new SmallAsteriodFactory();

console.log('Level 1');
smallObstacleFactory.createObstacle().move();
console.log('Level 2');
bigObstacleFactory.createObstacle().move();
