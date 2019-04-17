class CPU {
    public freeze(): void {
        console.log('Cpu freezed');
    }
    public jump(position: number): void {
        console.log(`Cpu jumped to ${position}`);
    }
    public execute(command: string): void {
        console.log(`Cpu executed ${command}`);
    }
}

class Memory {
    public load(position: number, data: string): void {
        console.log(`Memory loaded ${data} at ${position}`);
    }
}

class HardDrive {
    public read(position: number, size: number): string {
        return `HardDrive read size ${size} at ${position}`;
    }
}

class ComputerFacade {
    private processor: CPU;
    private ram: Memory;
    private drive: HardDrive;

    constructor() {
        this.processor = new CPU();
        this.ram = new Memory();
        this.drive = new HardDrive();
    }

    public start(): void {
        this.processor.freeze();
        this.ram.load(7324, 'hello');
        this.processor.jump(6666);
        this.processor.execute('QUERY...');
    }
}

const computer = new ComputerFacade();
computer.start();