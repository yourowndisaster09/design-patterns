interface IRobot {
    getHead(): string;
    getTorso(): string;
    getArms(): string;
    getLegs(): string;
    setHead(head: string): void;
    setTorso(torso: string): void;
    setArms(arms: string): void;
    setLegs(legs: string): void;
}

class Robot implements IRobot {
    private head: string;
    private torso: string;
    private arms: string;
    private legs: string;

    public getHead() {
        return this.head;
    }
    public getTorso() {
        return this.torso;
    }
    public getArms() {
        return this.arms;
    }
    public getLegs() {
        return this.legs;
    }
    public setHead(head: string): void {
        this.head = head;
    }
    public setTorso(torso: string): void {
        this.torso = torso;
    }
    public setArms(arms: string): void {
        this.arms = arms;
    }
    public setLegs(legs: string): void {
        this.legs = legs;
    }
}

interface RobotBuilder {
    buildHead(): void;
    buildTorso(): void;
    buildArms(): void;
    buildLegs(): void;
    getRobot(): Robot;
}

class OldRobotBuilder implements RobotBuilder {
    private robot: Robot;

    constructor() {
        this.robot = new Robot();
    }

    public buildHead(): void {
        this.robot.setHead('Tin Head');
    }

    public buildTorso(): void {
        this.robot.setTorso('Tin Torso');
    }

    public buildArms(): void {
        this.robot.setArms('Tin Arms');
    }

    public buildLegs(): void {
        this.robot.setLegs('Tin Legs');
    }

    public getRobot(): Robot {
        return this.robot;
    }
}

class RobotEngineer {
    private robotBuilder: RobotBuilder;

    constructor(robotBuilder: RobotBuilder) {
        this.robotBuilder = robotBuilder;
    }

    public getRobot(): Robot {
        return this.robotBuilder.getRobot();
    }

    public makeRobot(): void {
        this.robotBuilder.buildHead();
        this.robotBuilder.buildTorso();
        this.robotBuilder.buildArms();
        this.robotBuilder.buildLegs();
    }
}


const engineer = new RobotEngineer(new OldRobotBuilder());
engineer.makeRobot();
console.log(engineer.getRobot());
