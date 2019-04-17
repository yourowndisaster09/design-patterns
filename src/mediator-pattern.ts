class StockOffer {
    private stockShares: number;
    private stockSymbol: string;
    private colleagueCode: number;

    constructor(stockShares: number, stockSymbol: string, colleagueCode: number) {
        this.stockShares = stockShares;
        this.stockSymbol = stockSymbol;
        this.colleagueCode = colleagueCode;
    }

    public getStockShares(): number {
        return this.stockShares;
    }

    public getStockSymbol(): string {
        return this.stockSymbol;
    }

    public getColleageCode(): number {
        return this.colleagueCode;
    }
}

interface Mediator {
    saleOffer(stockSymbol: string, stockShares: number, colleagueCode: number): void;
    buyOffer(stockSymbol: string, stockShares: number, colleagueCode: number): void;
    addColleague(colleague: Colleague): void;
}

class StockMediator implements Mediator {
    private colleagues: Colleague[] = [];
    private buyOffers: StockOffer[] = [];
    private saleOffers: StockOffer[] = [];
    private colleageCodes = 0;

    public saleOffer(stockSymbol: string, stockShares: number, colleagueCode: number): void {
        const buyOffer = this.buyOffers.find((buyOffer) => {
            return buyOffer.getStockSymbol() === stockSymbol && buyOffer.getStockShares() === stockShares;
        });
        if (buyOffer) {
            console.log(`${stockShares} shares of ${stockSymbol} sold to colleage code ${buyOffer.getColleageCode()}`);
            this.buyOffers.splice(this.buyOffers.indexOf(buyOffer), 1);
        } else {
            console.log(`${stockShares} shares of ${stockSymbol} added to inventory`);
            this.saleOffers.push(new StockOffer(stockShares, stockSymbol, colleagueCode));
        }
    }

    public buyOffer(stockSymbol: string, stockShares: number, colleagueCode: number): void {
        const saleOffer = this.saleOffers.find((saleOffer) => {
            return saleOffer.getStockSymbol() === stockSymbol && saleOffer.getStockShares() === stockShares;
        });
        if (saleOffer) {
            console.log(`${stockShares} shares of ${stockSymbol} bought by colleage code ${saleOffer.getColleageCode()}`);
            this.saleOffers.splice(this.saleOffers.indexOf(saleOffer), 1);
        } else {
            console.log(`${stockShares} shares of ${stockSymbol} added to inventory`);
            this.buyOffers.push(new StockOffer(stockShares, stockSymbol, colleagueCode));
        }
    }

    public addColleague(colleague: Colleague): void {
        this.colleageCodes++;
        colleague.setColleagueCode(this.colleageCodes);
        this.colleagues.push(colleague);
    }

    public getstockOfferings(): void {
        console.log('Stocks for sale:');
        this.saleOffers.forEach((offer) => console.log(`${offer.getStockShares()} of ${offer.getStockSymbol()}`));
        console.log('Stocks Buy Offers:');
        this.buyOffers.forEach((offer) => console.log(`${offer.getStockShares()} of ${offer.getStockSymbol()}`));
    }
}


abstract class Colleague {
    private colleagueCode: number;
    private mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
        this.mediator.addColleague(this);
    }

    public saleOffer(stockSymbol: string, stockShares: number) {
        this.mediator.saleOffer(stockSymbol, stockShares, this.colleagueCode);
    }

    public buyOffer(stockSymbol: string, stockShares: number) {
        this.mediator.buyOffer(stockSymbol, stockShares, this.colleagueCode);
    }

    public getColleagueCode(): number {
        return this.colleagueCode;
    }

    public setColleagueCode(colleagueCode: number): void {
        this.colleagueCode = colleagueCode;
    }
}

class GormanSlacks extends Colleague {
    constructor(mediator: Mediator) {
        super(mediator);
        console.log('Gorman Slacks signed up with the stockexchange');
    }
}

class JTPoorman extends Colleague {
    constructor(mediator: Mediator) {
        super(mediator);
        console.log('JT Poorman signed up with the stockexchange');
    }
}


const nyse = new StockMediator();
const gormanSlackBroker = new GormanSlacks(nyse);
const jTPoormanBroker = new JTPoorman(nyse);


gormanSlackBroker.saleOffer("MSFT", 100);
gormanSlackBroker.saleOffer("GOOG", 50);
jTPoormanBroker.buyOffer("MSFT", 100);
jTPoormanBroker.saleOffer("NRG", 10);
gormanSlackBroker.buyOffer("NRG", 10);
nyse.getstockOfferings();
