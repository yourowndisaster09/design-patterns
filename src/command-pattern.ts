interface ICommand {
    execute(): void;
    unexecute(): void;
}

class LightOnCommand implements ICommand {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.turnOn();
    }

    public unexecute(): void {
        this.light.turnOff();
    }
}

class LightOffCommand implements ICommand {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.turnOff();
    }

    public unexecute(): void {
        this.light.turnOn();
    }
}

class LightDimCommand implements ICommand {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.dim();
    }

    public unexecute(): void {
        this.light.brighten();
    }
}

class LightBrightenCommand implements ICommand {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.brighten();
    }

    public unexecute(): void {
        this.light.dim();
    }
}

class Invoker {
    private on: ICommand;
    private off: ICommand;
    private up: ICommand;
    private down: ICommand;

    constructor(on: ICommand, off: ICommand, up: ICommand, down: ICommand) {
        this.on = on;
        this.off = off;
        this.up = up;
        this.down = down;
    }

    public clickOn(): void {
        this.on.execute();
    }

    public clickOff(): void {
        this.off.execute();
    }

    public clickUp(): void {
        this.up.execute();
    }

    public clickDown(): void {
        this.down.execute();
    }
}

class Light {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public turnOn(): void {
        console.log(`${this.name} is turned on!`);
    }

    public turnOff(): void {
        console.log(`${this.name} is turned off!`);
    }

    public dim(): void {
        console.log(`${this.name} is dimmed!`);
    }

    public brighten(): void {
        console.log(`${this.name} is brightened!`);
    }
}


const bedroomLight = new Light('Bedroom light');
const livingRoomLight = new Light('Living room light');
const remoteControl = new Invoker(
    new LightOnCommand(bedroomLight),
    new LightOffCommand(bedroomLight),
    new LightBrightenCommand(livingRoomLight),
    new LightDimCommand(bedroomLight)
);
remoteControl.clickOn();
remoteControl.clickUp();
remoteControl.clickUp();
remoteControl.clickDown();
remoteControl.clickUp();
remoteControl.clickDown();
remoteControl.clickDown();
remoteControl.clickUp();
remoteControl.clickDown();
remoteControl.clickUp();
remoteControl.clickUp();
remoteControl.clickUp();
remoteControl.clickUp();
remoteControl.clickDown();
remoteControl.clickOff();