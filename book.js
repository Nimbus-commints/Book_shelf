const myLibrary = [];

function Book(title, author, pages, readit){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readit = readit;
}

// t = title, a = author, p = pages, r = readit
function addBookToLibrary(t,a,p,r) {
    const newBook = new Book(t,a,p,r);
    const bookId = crypto.randomUUID()
    return myLibrary.push([newBook,bookId])
}


document.addEventListener('DOMContentLoaded',()=>{
    
})