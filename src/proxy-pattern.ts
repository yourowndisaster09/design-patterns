interface IBookParser {
    getNumberOfPages(): number;
}

class BookParser implements IBookParser {
    private numberOfPages: number;

    constructor(book: string) {
        console.log('This does a very expensive parsing');
        this.numberOfPages = book.length;
    }

    public getNumberOfPages(): number {
        console.log('This is a cheap method');
        return this.numberOfPages;
    }
}

class LazyBookParserProxy implements IBookParser {
    private bookParser: BookParser;
    private book: string;

    constructor(book: string) {
        this.book = book;
    }

    public getNumberOfPages(): number {
        return this.getOrCreateBookParser().getNumberOfPages();
    }

    private getOrCreateBookParser(): BookParser {
        if (this.bookParser == null) {
            this.bookParser = new BookParser(this.book);
        }
        return this.bookParser;
    }
}

console.log('Original =======');
const bookParser = new BookParser('abcdefghij');
console.log('-------');
console.log(bookParser.getNumberOfPages());

console.log('Proxy =======');
const lazyBookParser = new LazyBookParserProxy('abcdefghij');
console.log('-------');
console.log(lazyBookParser.getNumberOfPages());

