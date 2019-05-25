abstract class Visitable {
    public price: number;

    constructor(price: number) {
        this.price = price;
    }

    public accept(visitor: Visitor): number {
        return visitor.visit(this);
    }
}

class Liquor extends Visitable { }

class Tobacco extends Visitable { }

class Necessity extends Visitable { }

interface Visitor {
    visit(visitable: Visitable): number;
}

class TaxVisitor implements Visitor {
    public visit(visitable: Visitable): number {
        if (visitable instanceof Liquor) {
            return visitable.price * 1.15;
        } else if (visitable instanceof Tobacco) {
            return visitable.price * 1.12;
        } else if (visitable instanceof Necessity) {
            return visitable.price * 1.10;
        }
        return visitable.price;
    }
}

class TaxHolidayVisitor implements Visitor {
    public visit(visitable: Visitable): number {
        if (visitable instanceof Liquor) {
            return visitable.price * 1.10;
        } else if (visitable instanceof Tobacco) {
            return visitable.price * 1.08;
        }
        return visitable.price;
    }
}

// main
const taxCalc = new TaxVisitor();
const taxHolidayCalc = new TaxHolidayVisitor();
const cigar = new Tobacco(2.83);
const beer = new Liquor(2.05);
const milk = new Necessity(3.47);
console.log('Taxed cigar price', cigar.accept(taxCalc));
console.log('Taxed beer price', beer.accept(taxCalc));
console.log('Taxed milk price', milk.accept(taxCalc));
console.log('Tax holiday cigar price', cigar.accept(taxHolidayCalc));
console.log('Tax holiday beer price', beer.accept(taxHolidayCalc));
console.log('Tax holiday milk price', milk.accept(taxHolidayCalc));
