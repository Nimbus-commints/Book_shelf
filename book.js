const myLibrary = [];

// CONSTRUCTOR FOR THE BOOK
// Changing the constructors and functions to classes

class Book {
  constructor(title, author, pages, readit) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readit = readit;
    this.id = crypto.randomUUID();
  }
  changeReadit() {
    if (this.readit === "Yes") {
      this.readit = "No";
    } else {
      this.readit = "Yes";
    }
    return this.readit;
  }
}
// OLD CONSTRUCTOR
// This is the old constructor that was used before changing to class syntax
// It is commented out to keep the history of the code.
// It can be removed if not needed in the future.
// function Book(title, author, pages, readit) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.readit = readit;
//   this.id = crypto.randomUUID();
// }

// Book.prototype.changeReadit = function () {
//   if (this.readit == "Yes") {
//     this.readit = "No";
//     return this.readit;
//   } else {
//     this.readit = "Yes";
//     return this.readit;
//   }
// };

// t = title, a = author, p = pages, r = readit

function addBookToLibrary(t, a, p, r) {
  console.log("addBookLibrary works");
  const newBook = new Book(t, a, p, r);
  return myLibrary.push(newBook);
}

// TOGGLE THE FORM TO ADD BOOKS
const showFormBtnVar = document.getElementById("showFormBtn");
const myFormVar = document.getElementById("myForm");

showFormBtnVar.addEventListener("click", function () {
  console.log("Pressed");
  if (myFormVar.style.display === "") {
    myFormVar.style.display = "block";
    showFormBtnVar.textContent = "HIDE FORM";
    console.log("Pressed 1");
  } else {
    myFormVar.style.display = "";
    showFormBtnVar.textContent = "NEW BOOK";
    console.log("Pressed 2");
  }
});

// function to recollect the values of the form

myFormVar.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputAuthor = document.getElementById("author").value;
  document.getElementById("author").value = "";

  const inputTitle = document.getElementById("title").value;
  document.getElementById("title").value = "";

  const inputPages = document.getElementById("pages").value;
  document.getElementById("pages").value = "";

  const inputRadio = document.querySelector('input[name="readit"]:checked');

  const inputReadit = inputRadio.value;
  addBookToLibrary(inputTitle, inputAuthor, inputPages, inputReadit);
  addVisualList(myLibrary);
});

const libraryList = document.querySelector("ul");

function addVisualList(listLibrary) {
  const listItem = document.createElement("li");
  const listTitle = document.createElement("div");
  const listAuthor = document.createElement("div");
  const listPage = document.createElement("div");
  const listReadit = document.createElement("div");
  const listBtn = document.createElement("button");

  // last added
  const listBtnread = document.createElement("button");

  for (var i = 0; i < listLibrary.length; i++) {
    listItem.setAttribute("data-id", listLibrary[i].id);
    listTitle.innerHTML = `Book: <b>${listLibrary[i].title}</b>`;
    listTitle.setAttribute("class", "bookTitleCard");
    listAuthor.innerHTML = `Author: <b><i>${listLibrary[i].author}</i></b>`;
    listAuthor.setAttribute("class", "bookAuthorCard");
    listPage.innerHTML = `Pages: <b>${listLibrary[i].pages}</b>`;
    listReadit.innerHTML = `Have you read it?: <b>${listLibrary[i].readit}</b>`;
    listBtn.textContent = "Remove Book";
    listBtn.setAttribute("class", "btnRemove");
    listBtnread.textContent = "Change status of Read";
    listBtnread.setAttribute("class", "btnRead");

    listItem.appendChild(listTitle);
    listItem.appendChild(listAuthor);
    listItem.appendChild(listPage);
    listItem.appendChild(listReadit);
    listItem.appendChild(listBtn);
    //
    listItem.appendChild(listBtnread);

    libraryList.appendChild(listItem);
  }
  listBtn.addEventListener("click", () => {
    libraryList.removeChild(listItem);
    // method to get the index using the id.
    const indexByID = myLibrary.findIndex(
      (item) => item.id == listItem.dataset.id
    );
    myLibrary.splice(indexByID, 1);
  });
  //
  listBtnread.addEventListener("click", () => {
    console.log("change read it");
    const indexByID = myLibrary.findIndex(
      (item) => item.id == listItem.dataset.id
    );

    listLibrary[indexByID].changeReadit();
    console.log(listLibrary[indexByID].readit);
    listReadit.innerHTML = `Have you read it?: <b>${listLibrary[indexByID].readit}</b>`;
  });
}
