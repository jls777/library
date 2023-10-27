class Library {
  constructor() {
    this.arrBook = [];
  }
  getBook(title, author, radio) {
    return {title,author,radio}
  }
  addBook() {
    const title = document.querySelector('[data-title]').value;
    const author = document.querySelector('[data-author]').value;
    const radio = document.querySelector('input[data-mark]:checked').value;
    const newBook = this.getBook(title, author, radio);
    this.arrBook.push(newBook);
    console.log(this.arrBook)
  }
 
}

const myLib = new Library()

const addButton = document.querySelector('[data-add-button]');
const dialog = document.querySelector('[data-dialog]');
const closeButton = document.querySelector('[data-close-button]');
const form = document.querySelector('[data-form]');
const bookContainer = document.querySelector('[data-book-container]');

const editDialog = document.querySelector('[data-edit-dialog]');
const editClosebutton = document.querySelector('[data-edit-close-button]');
const editForm = document.querySelector('[data-edit-form]');

addButton.addEventListener('click', () => dialog.showModal());
closeButton.addEventListener('click', () => dialog.close()); 
form.addEventListener('submit', e => {
  e.preventDefault();
  myLib.addBook();
  displayBook()
  dialog.close();
  form.reset();
});


function ElMaker(type, content, arr) {
  this.el = document.createElement(type);
  this.el.textContent = content;
  arr.push(this.el);
}

function ElMaker2(type, arr) {
  this.el = document.createElement(type);
  arr.push(this.el);
}

function readStatus(val, el) {
  if (val === "yes") {
    el.classList.add('green');
  } else {
    el.classList.add('red');
  }
}

function displayBook() {
  const myLibrary = myLib.arrBook;
  bookContainer.textContent = '';
  for (let i = 0; i < myLibrary.length ; i += 1) {
    let markValue = myLibrary[i].radio;
    

    myLibrary[i].id = i;

    const arrValue = [];
    const arrLabel = [];
    const arrDiv = [];
    
    const valueTitle = new ElMaker('div', `${myLibrary[i].title}`, arrValue);
    const valueAuthor = new ElMaker('div', `${myLibrary[i].author}`, arrValue);

    const labelTitle = new ElMaker('div', 'Title: ', arrLabel);
    const labelAuthor = new ElMaker('div', 'Author: ', arrLabel);
    
    const labelValue1 = new ElMaker2('div', arrDiv);
    const labelValue2 = new ElMaker2('div', arrDiv);

    const divContent = document.createElement('div');//div card container

    readStatus(markValue, divContent);


    const delButton = document.createElement('button');
    delButton.setAttribute('id', `${i}`);
    delButton.textContent = 'del';
    divContent.appendChild(delButton);

    delButton.addEventListener('click', e =>{
      let index = e.target.id;
      myLibrary.splice(index, 1);
      console.log(e.target.id);
      displayBook();
    });

    bookContainer.appendChild(divContent);
    for (let i = 0; i < 2; i += 1) {
      divContent.appendChild(arrDiv[i]);
      arrDiv[i].append(arrLabel[i], arrValue[i]);
    }

    const toggleDiv = document.createElement('div');
    divContent.appendChild(toggleDiv);

    const toggleLabel = document.createElement('span');
    toggleLabel.textContent = 'Mark as read: ';
    toggleDiv.appendChild(toggleLabel);

    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'toggle';
    toggleButton.setAttribute('id', `${i}`);
    toggleDiv.appendChild(toggleButton);

    toggleButton.addEventListener('click', e => {
      console.log(e.target.id);
      let index = e.target.id;
      let value = myLibrary[index].radio;
      console.log(value);
      if (value === 'yes') myLibrary[index].radio = 'no';
      if (value === 'no') myLibrary[index].radio = 'yes';
      displayBook();
    })
  }
}
