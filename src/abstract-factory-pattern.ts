abstract class ThemeFactory {
    public abstract createTexts(): Texts;
    public abstract createBackground(): Background;
}

class DarkThemeFactory extends ThemeFactory {
    public createTexts(): Texts {
        return new Texts('white');
    }
    public createBackground(): Background {
        return new Background('black');
    }
}

class LightThemeFactory extends ThemeFactory {
    public createTexts(): Texts {
        return new Texts('black');
    }
    public createBackground(): Background {
        return new Background('white');
    }
}

abstract class MobileInterface {
    protected color: string;

    constructor(color: string) {
        this.color = color;
    }

    public abstract render(): void;
}

class Texts extends MobileInterface {
    private fontSize: number;

    constructor(color: string, fontSize: number = 14) {
        super(color);
        this.fontSize = fontSize;
    }

    public render(): void {
        console.log(`Text of color ${this.color} with font size ${this.fontSize}`);
    }
}

class Background extends MobileInterface {
    private height: number;
    private width: number;

    constructor(color: string, height: number = 200, width: number = 150) {
        super(color);
        this.height = height;
        this.width = width;
    }

    public render(): void {
        console.log(`Background of color ${this.color} with width ${this.width} and height ${this.height}`);
    }
}



console.log('Change to Dark theme...');
const darkThemeFactory = new DarkThemeFactory();
darkThemeFactory.createBackground().render();
darkThemeFactory.createTexts().render();

console.log('Change to Light theme...');
const lightThemeFactory = new LightThemeFactory();
lightThemeFactory.createBackground().render();
lightThemeFactory.createTexts().render();