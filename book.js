const myLibrary = [];

// CONSTRUCTOR FOR THE BOOK
function Book(title, author, pages, readit){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readit = readit;
    this.id = crypto.randomUUID();
}


// t = title, a = author, p = pages, r = readit
function addBookToLibrary(t,a,p,r) {
    console.log('addBookLibrary works')
    // const id = crypto.randomUUID();
    const newBook = new Book(t,a,p,r);
    myLibrary.push(newBook);
    addList(myLibrary);
}


// TOGLE THE FORM TO ADD BOOKS
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

// function to recollect the values of the form
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click',function(event) {
    event.preventDefault();
    const inputAuthor = document.getElementById('author').value;
    // console.log(inputAuthor);
    const inputTitle = document.getElementById('title').value;
    // console.log(inputTitle);
    const inputPages = document.getElementById('pages').value;
    // console.log(inputPages);
    const inputRadio = document.querySelector('input[name="readit"]:checked');
    if (inputRadio) {
        const inputReadit = inputRadio.value;
        addBookToLibrary(inputTitle,inputAuthor,inputPages,inputReadit);
        // addList(myLibrary);
    
    }
    
})

const myListElement = document.getElementById("cardsContainer");
const newListItem = document.createElement('li');

function addObjectotList(mylist) {
    
    
    newListItem.textContent = mylist.author;
    myListElement.append(newListItem)
}

function addList(myLibrary) {
    for (var i =0 ; i< myLibrary.length; i++) {
        addObjectotList(myLibrary[i])
    }
}

// function listItem(library) {
//     const 


// }


// ADD THE ELEMENTS ON A CARD VISUALLY
// const cardContainer = document.createElement('li');
// const titleCard = document.createElement('p');
// const authorCard = document.createElement('p');
// const pagesCard = document.createElement('p');
// const readitCard = document.createElement('p');

// const bookCardContainer = document.getElementById("cardsContainer");
// // var iteList = []
// function addCards(myLibrary) {
//     const iteList = []
//     for (var i=0;i < myLibrary.length; i++) {
//         console.log(myLibrary[i])
//         titleCard.textContent = myLibrary[i].title;
//         authorCard.textContent = myLibrary[i].author;
//         pagesCard.textContent = myLibrary[i].pages;
//         readitCard.textContent = myLibrary[i].readit;
//         cardContainer.appendChild(titleCard);
//         cardContainer.appendChild(authorCard);
//         cardContainer.appendChild(pagesCard);
//         cardContainer.appendChild(readitCard);
//         iteList.push(cardContainer)
//         // bookCardContainer.appendChild(cardContainer);
//     }
// }
