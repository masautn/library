

let myLibrary = [];
const newBook1 = new Book ();
newBook1.title = "asdasd";
newBook1.author = "asdasd";
newBook1.pages = 32;
newBook1.read = true;
myLibrary.push(newBook1);
const newBook2 = new Book ("matias", "asa", 18,true);
myLibrary.push(newBook2);
reloadBook();

function Book(title,author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary() {
  const newBook = new Book ();
  newBook.title = document.getElementById('book_name').value;
  newBook.author = document.getElementById('author_name').value;
  newBook.pages = document.getElementById('pages').value;
  newBook.read = document.querySelector('#read').checked;
  myLibrary.push(newBook);
  
  reloadBook();
  
  
  

}

function reloadBook(){
  const bookPannel = document.getElementById('books');
  while (bookPannel.firstChild) {
    bookPannel.removeChild(bookPannel.lastChild);
  }
  
  myLibrary.forEach((book,i) => {
    
    let newDivBook = document.createElement('div');


    let newDivBookTitle = document.createElement('h2');
    newDivBookTitle.textContent = book.title;
    newDivBook.appendChild(newDivBookTitle);

    let newDivBookAuthor = document.createElement('h3');
    newDivBookAuthor.textContent = book.author;
    newDivBook.appendChild(newDivBookAuthor);

    let newDivBookPages = document.createElement('div');
    newDivBookPages.textContent = book.pages;
    newDivBookPages.id="pages_div";
    newDivBook.appendChild(newDivBookPages);

    let newDivBookRead = document.createElement('button');
    newDivBookRead.id = "read_btn"
    

    
    newDivBookRead.addEventListener('click', e => {
      (e.target.textContent == "false") ? myLibrary[i].read = "true" : myLibrary[i].read = "false";
      reloadBook();}
      );
    newDivBookRead.textContent = book.read; 
    if(newDivBookRead.textContent == "false"){
    
      newDivBookRead.style.backgroundColor = "#a11c1794"
    }else {
      
      newDivBookRead.style.backgroundColor = "#17a12994"
      
    }
    
    newDivBook.appendChild(newDivBookRead);
    

    let DeletBook = document.createElement('button');
    DeletBook.textContent = "Delete";
    DeletBook.id = "delete_btn"
    DeletBook.addEventListener('click', (e) => {
      myLibrary.splice(i,1);
      reloadBook();});
    newDivBook.appendChild(DeletBook);
    newDivBook.id = "bok";
    

    
    bookPannel.appendChild(newDivBook);

  } )

}



const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', addBookToLibrary);





