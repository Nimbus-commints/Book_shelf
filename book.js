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
    const bookId = crypto.randomUUID();
    return myLibrary.push([newBook,bookId]);
}



const showFormBtnVar = document.getElementById('showFormBtn');
const myFormVar = document.getElementById('myForm');

showFormBtnVar.addEventListener('click',function() {
    console.log('apretado');
    if (myFormVar.style.display === '') {
        myFormVar.style.display = 'block';
        showFormBtnVar.textContent = "HIDE FORM";
        console.log('apretado 1');
    } else {
        myFormVar.style.display = '';
        showFormBtnVar.textContent = 'NEW BOOK';
        console.log('apretado 2');
    }
})
