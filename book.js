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
    return myLibrary.push(newBook);
}

// function showBooks(library) {
//     for (i,)
// }



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
        // console.log(inputReadit);
        addBookToLibrary(inputTitle,inputAuthor,inputPages,inputReadit);
    }
    
})


// NEW MEHTOD TO OBTAIN THE VALUES OF THE FORM

// const valuesForm = document.getElementById('myForm');

// valuesForm.addEventListener("submit",function(event) {
//     event.preventDefault();
//     const formData = new FormData(this);

//     let userInputs = {};

//     for (const key of formData.keys()) {
//         if(formData.get(key).toString().length >0 ){
//             userInputs[key] = formData.get(key).toString();
//             console.log(userInputs);
//         }
//     }
    
// });