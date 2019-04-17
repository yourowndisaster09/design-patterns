// A common interface for all players
interface Player {
    startMission(weapon: string): void;
}

// Terrorist must have weapon and mission
class Terrorist implements Player {
    readonly task: string;

    constructor() {
        this.task = "PLANT A BOMB";
    }

    public startMission(weapon: string): void {
        console.info(`Terrorist with weapon ${weapon} | Task is ${this.task}`);
    }
}

class CounterTerrorist implements Player {
    readonly task: string;

    constructor() {
        this.task = "DIFFUSE BOMB";
    }

    public startMission(weapon: string): void {
        console.info(`Counter Terrorist with weapon ${weapon} | Task is ${this.task}`);
    }
}

class PlayerFactory {
    private players: { [type: string]: Player } = {};

    public getPlayer(type: string): Player {
        let player: Player;
        if (type in this.players) {
            player = this.players[type];
        } else {
            switch (type) {
                case "Terrorist":
                    player = new Terrorist();
                    break;
                case "CounterTerrorist":
                    player = new CounterTerrorist();
                    break;
                default:
                    throw "Invalid player type";
            }
            this.players[type] = player;
        }
        return player;
    }
}

class Game {
    private readonly weapons = [
        "AK-47", "Maverick", "Gut Knife", "Desert Eagle"
    ];

    public start(n: number): void {
        const playerFactory = new PlayerFactory();
        for (let index = 0; index < n; index++) {
            const player = playerFactory.getPlayer(this.getRandomPlayerType());
            player.startMission(this.getRandomWeapon());
        }
    }

    private getRandomPlayerType(): string {
        const index = Math.round(Math.random());
        return index === 0 ? 'Terrorist' : 'CounterTerrorist';
    }

    private getRandomWeapon(): string {
        const index = Math.floor(Math.random() * this.weapons.length);
        return this.weapons[index];
    }
}
const game = new Game();
game.start(1000);