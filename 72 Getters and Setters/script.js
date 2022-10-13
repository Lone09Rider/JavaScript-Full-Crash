class Book {
    constructor(author) {
        this._author = author;  // _author is private
        console.log("Author Was " + author);
    }

    get writer() {
        return this._author;
    }

    set writer(updateAuthor) {
        this._author = updateAuthor;
    }
}

var book1 = new Book("KirA");
book1.writer = "SRj";
console.log(book1);