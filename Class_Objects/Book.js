class Book {
    constructor(bno,title,author) {
        this.bno=bno;
        this.title=title;
        this.author=author;
    }
    get bookinfo() {
        console.log("[GETTER] Fetching book information");
        return `${this.title} by ${this.author}`;
    }
    set bookno(newBookno) {
        console.log("[SETTER] Setting the book number");
        this.bno=newBookno;
    }
}
const book1=new Book(101,"Never Lie","Freida");
console.log(book1.bookinfo);
book1.bookno=102;
console.log(book1.bno);