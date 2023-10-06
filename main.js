const addButton = document.querySelector('[data-add-button]');
const dialog = document.querySelector('[data-dialog]');
const closeButton = document.querySelector('[data-close-button]');
const form = document.querySelector('[data-form]');
const bookContainer = document.querySelector('[data-book-container]');



addButton.addEventListener('click', () => dialog.showModal());
closeButton.addEventListener('click', () => dialog.close()); 
form.addEventListener('submit', e => {
  e.preventDefault();
  addBookTolibrary();
  // displayBook();
  dialog.close();
  form.reset();
});

const myLibrary = []

function Book(title, author, radio) {
  this.title = title;
  this.author = author;
  this.radio = radio;
}

function addBookTolibrary() {
  let title = document.querySelector('[data-title]').value;
  let author = document.querySelector('[data-author]').value;
  let radio = document.querySelector('input[type="radio"]').value;
  let newBook = new Book(title, author, radio);
  myLibrary.push(newBook);
  console.log(newBook)
}

function displayBook() {
  function elMaker(elName, type, content, arr) {
    let elName = document.createElement(type);
    elName.textContent = content;
    arr.push(elName);
  }
}

// function displayBook() {
//   function ElMaker(type, content, arr) {
//     this.element = document.createElement(type);
//     this.element.textContent = content;
//     arr.push(this.element);
//   }
  
//   let lastObj = myLibrary[myLibrary.length -1];

//   let arrDivValue = [];
//   let arrDivLabel = [];
//   let boolean = lastObj.read;

//   let valueTitle = new ElMaker('span', `${lastObj.title}`, arrDivValue);
//   let valueAuthor = new ElMaker('span', `${lastObj.author}`, arrDivValue);
//   let valueRead = new ElMaker('span', ``, arrDivValue);

//   let labelTitle = new ElMaker('div', 'Title: ', arrDivLabel);
//   let labelAuthor = new ElMaker('div', 'Author: ', arrDivLabel);
//   let labelRead = new ElMaker('button', 'Read ', arrDivLabel);

//   let divContainer = document.createElement('div');
//   let deleteButton = document.createElement('button');
//   deleteButton.textContent = 'del';
  
//   bookContainer.appendChild(divContainer); 

//   arrDivLabel.forEach(el => divContainer.appendChild(el));
//   divContainer.appendChild(deleteButton)
//   for (let i = 0; i < 3; i += 1) {
//     let elChild = arrDivValue[i];
//     let elParent = arrDivLabel[i];
//     elParent.appendChild(elChild);
//   }
  
//   const toggleButton = document.querySelector('div + button');
//   toggleButton.addEventListener('click', e => {
    
//     boolean = !boolean;
//     toggle();
//   })

//   function toggle() {
//     let toggleButtons = document.querySelectorAll('div + button')
//     toggleButtons.forEach(el => {
//       if (boolean) {
//         el.classList.add('green-toggle');
//         el.classList.remove('red-toggle');
//       } else {
//         el.classList.add('red-toggle');
//         el.classList.remove('green-toggle');
//       }
//     })
//   }

//   toggle();
//   deleteButton.addEventListener('click', e => {
//     console.log(e);
//     const delDiv = document.querySelector('[data-book-container] div');
//     delDiv.remove();
//   })
// }
