

let myLibrary = [];

function Book(title,author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


function addBookToLibrary() {
  const newBook = new Book ();
  newBook.title = document.getElementById('book_name').value;
  newBook.author = document.getElementById('author_name').value;
  newBook.pages = document.getElementById('pages').value;
  newBook.status = document.querySelector('#read').checked;
  myLibrary.push(newBook);
  
  reloadBook();
  
  
  

}

function reloadBook(){
  const bookPannel = document.getElementById('books');
  while (bookPannel.firstChild) {
    bookPannel.removeChild(bookPannel.lastChild);
  }
  
  myLibrary.forEach(book => {
    
    let newDivBook = document.createElement('div');


    let newDivBookTitle = document.createElement('h2');
    newDivBookTitle.textContent = book.title;
    newDivBook.appendChild(newDivBookTitle);

    let newDivBookAuthor = document.createElement('h3');
    newDivBookAuthor.textContent = book.author;
    newDivBook.appendChild(newDivBookAuthor);

    let newDivBookPages = document.createElement('div');
    newDivBookPages.textContent = book.pages;
    newDivBook.appendChild(newDivBookPages);

    let newDivBookRead = document.createElement('button');
    newDivBookRead.textContent = book.status;
    newDivBook.appendChild(newDivBookRead);
    

    
    bookPannel.appendChild(newDivBook);

  } )

}


const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', addBookToLibrary);





