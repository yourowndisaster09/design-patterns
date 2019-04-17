interface Inventory {
    getIterator(): InventoryIterator;
}

class HandheldInventory implements Inventory {
    private right: Item;
    private left: Item;

    constructor(right: Item, left: Item) {
        this.right = right;
        this.left = left;
    }

    public getIterator(): HandheldInventoryIterator {
        return new HandheldInventoryIterator(this);
    }

    public getRight(): Item {
        return this.right;
    }

    public getLeft(): Item {
        return this.left;
    }
}

class Item {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }
}

interface InventoryIterator {
    isDone(): boolean;
    next(): void;
    getCurrent(): Item | null;
}

class HandheldInventoryIterator implements InventoryIterator {
    private handheldInventory: HandheldInventory;
    private index: number;

    constructor(handheldInventory: HandheldInventory) {
        this.handheldInventory = handheldInventory;
        this.index = -1;
    }

    public isDone(): boolean {
        return this.index < 1;
    }

    public next(): void {
        this.index += 1;
    }

    public getCurrent(): Item | null {
        switch (this.index) {
            case 0:
                return this.handheldInventory.getRight();
            case 1:
                return this.handheldInventory.getLeft();
            default:
                return null;
        }
    }
}

const handheldInventory = new HandheldInventory(new Item('machete'), new Item('gun'));
const handheldInventoryIterator = handheldInventory.getIterator();

while (handheldInventoryIterator.isDone()) {
    handheldInventoryIterator.next();
    console.log(handheldInventoryIterator.getCurrent());
}