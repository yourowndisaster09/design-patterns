class Singleton {
    private value: string;

    private constructor(value: string) {
        this.value = value;
    }

    public printValue(): void {
        console.log(this.value);
    }

    private static instance: Singleton;

    public static getInstance(): Singleton {
        if (!this.instance) {
            this.instance = new Singleton('MY SINGOLTONNNN');
        }
        return this.instance;
    }
}

Singleton.getInstance().printValue();
console.log('Is it truly a singleton?');
console.log(Singleton.getInstance() === Singleton.getInstance());