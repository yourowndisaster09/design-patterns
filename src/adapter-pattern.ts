// I want a real Bird to replace a Toy Duck because I ran out of toy ducks...

interface Bird {
    chirp(): void;
}

class Sparrow implements Bird {
    public chirp(): void {
        console.log('RAWKKKK!');
    }
}

class Maya implements Bird {
    public chirp(): void {
        console.log('TWEET!');
    }
}

interface IToyDuck {
    squeak(): void;
}

class PlasticToyDuck implements IToyDuck {
    public squeak(): void {
        console.log('SQUEAK!');
    }
}

class BirdAdapter implements IToyDuck {
    private bird: Bird;

    constructor(bird: Bird) {
        this.bird = bird;
    }

    public squeak(): void {
        this.bird.chirp();
    }
}

const toyDucks: IToyDuck[] = [
    new PlasticToyDuck(),
    new BirdAdapter(new Sparrow()),
    new BirdAdapter(new Maya()),
    new PlasticToyDuck(),
    new PlasticToyDuck(),
    new BirdAdapter(new Maya()),
    new PlasticToyDuck(),
    new BirdAdapter(new Sparrow()),
    new BirdAdapter(new Maya()),
    new BirdAdapter(new Maya()),
    new BirdAdapter(new Sparrow()),
]
toyDucks.forEach((toyDuck) => toyDuck.squeak());