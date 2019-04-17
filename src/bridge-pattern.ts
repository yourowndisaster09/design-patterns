abstract class FormView {
    protected resource: IResource;

    constructor(resouce: IResource) {
        this.resource = resouce;
    }

    public abstract show(): void;
}

interface IResource {
    getSnippet(): string;
    getImage(): number;
    getTitle(): string;
    getUrl(): string;
}

class Artist {
    public name: string;
    public bio: string;
    public artistUrl: string;

    constructor(name: string, bio: string, artistUrl: string) {
        this.name = name;
        this.bio = bio;
        this.artistUrl = artistUrl;
    }
}

class ArtistResource implements IResource {
    private artist: Artist;

    constructor(artist: Artist) {
        this.artist = artist;
    }

    public getSnippet(): string {
        return this.artist.bio;
    }

    public getImage(): number {
        return this.artist.artistUrl.length;
    }

    public getTitle(): string {
        return this.artist.name;
    }

    public getUrl(): string {
        return this.artist.artistUrl;
    }
}

class Book {
    public title: string;
    public author: string;
    public summary: string;
    public ebookUrl: string;

    constructor(title: string, author: string, summary: string, ebookUrl: string) {
        this.title = title;
        this.author = author;
        this.summary = summary;
        this.ebookUrl = ebookUrl;
    }
}

class BookResource implements IResource {
    private book: Book;

    constructor(book: Book) {
        this.book = book;
    }

    public getSnippet(): string {
        return this.book.summary;
    }

    public getImage(): number {
        return this.book.ebookUrl.length;
    }

    public getTitle(): string {
        return `${this.book.author}'s ${this.book.title}`;
    }

    public getUrl(): string {
        return this.book.ebookUrl;
    }
}

class LongFormView extends FormView {
    public show(): void {
        console.log(`
Long view of ${this.resource.getTitle()}!!!
Here is big picture ${this.resource.getImage()}
Long description ${this.resource.getSnippet()}
Link at ${this.resource.getUrl()}
`);
    }
}

class ShortFormView extends FormView {
    public show(): void {
        console.log(`
Short view of ${this.resource.getTitle()}!!!
Here is small picture ${this.resource.getImage()}
Short description ${this.resource.getSnippet()}
`);
    }
}

const daveMatthews = new Artist('Dave Matthews Band', 'He cool', 'www.dmb.com');
const daveMatthewsResource = new ArtistResource(daveMatthews);
const daveMatthewsLongFormView = new LongFormView(daveMatthewsResource);
const daveMatthewsShortFormView = new ShortFormView(daveMatthewsResource);

const twilight = new Book('Twilight', 'Stephanie Mayer', 'This suxxx', 'www.twilight.co');
const twilightResource = new BookResource(twilight);
const twilightLongFormView = new LongFormView(twilightResource);
const twilightShortFormView = new ShortFormView(twilightResource);

daveMatthewsLongFormView.show();
twilightShortFormView.show();
daveMatthewsShortFormView.show();
twilightLongFormView.show();