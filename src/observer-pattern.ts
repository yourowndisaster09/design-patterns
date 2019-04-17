interface IObservable {
    add(observer: IObserver): void;
    remove(observer: IObserver): void;
    notify(): void;
}

interface IObserver {
    update(): void;
}

class WeatherStation implements IObservable {
    private observers: IObserver[] = [];
    private temperature: number = 0;

    public add(observer: IObserver): void {
        this.observers.push(observer);
    }
    public remove(observer: IObserver): void {
        this.observers.splice(this.observers.indexOf(observer), 1);
    }
    public notify(): void {
        this.observers.forEach((observer) => observer.update());
    }

    public getTemperature(): number {
        return this.temperature;
    }
    public setTemperature(temperature: number): void {
        this.temperature = temperature;
    }
}

class PhoneDisplay implements IObserver {
    private weatherStation: WeatherStation;

    constructor(weatherStation: WeatherStation) {
        this.weatherStation = weatherStation;
    }

    public update(): void {
        console.log('PHONE ' + this.weatherStation.getTemperature());
    }
}

class TvDisplay implements IObserver {
    private weatherStation: WeatherStation;

    constructor(weatherStation: WeatherStation) {
        this.weatherStation = weatherStation;
    }

    public update(): void {
        console.log('TV ' + this.weatherStation.getTemperature());
    }
}

const seattleWeatherStation = new WeatherStation();
const samsungTv = new TvDisplay(seattleWeatherStation);
const nexusPhone = new PhoneDisplay(seattleWeatherStation);
seattleWeatherStation.add(samsungTv);
seattleWeatherStation.add(nexusPhone);

seattleWeatherStation.setTemperature(1000);
seattleWeatherStation.notify();
seattleWeatherStation.setTemperature(300);
seattleWeatherStation.notify();
seattleWeatherStation.setTemperature(6);
seattleWeatherStation.notify();
seattleWeatherStation.setTemperature(4000);
seattleWeatherStation.notify();