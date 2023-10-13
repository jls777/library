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
  displayBook();
  dialog.close();
  form.reset();
});

const myLibrary = []
console.log(myLibrary)
function Book(title, author, radio) {
  this.title = title;
  this.author = author;
  this.radio = radio;
}

function addBookTolibrary() {
  let title = document.querySelector('[data-title]').value;
  let author = document.querySelector('[data-author]').value;
  let radio = document.querySelector('input[type="radio"]:checked').value;
  let newBook = new Book(title, author, radio);
  myLibrary.push(newBook);
}

function ElMaker(type, content, arr) {
  this.el = document.createElement(type);
  this.el.textContent = content;
  arr.push(this.el);
}

function ElMaker2(type, arr) {
  this.el = document.createElement(type);
  arr.push(this.el);
}

function displayBook() {
  bookContainer.textContent = '';
  for (let i = 0; i < myLibrary.length ; i += 1) {
    const arrValue = [];
    const arrLabel = [];
    const arrDiv = [];
    
    const valueTitle = new ElMaker('div', `${myLibrary[i].title}`, arrValue);
    const valueAuthor = new ElMaker('div', `${myLibrary[i].author}`, arrValue);
    const valueRadio = new ElMaker('div', `${myLibrary[i].radio}`, arrValue);

    const labelTitle = new ElMaker('div', 'Title: ', arrLabel);
    const labelAuthor = new ElMaker('div', 'Author: ', arrLabel);
    const labelMark = new ElMaker('div', 'Marked as read: ', arrLabel);
    
    const labelValue1 = new ElMaker2('div', arrDiv);
    const labelValue2 = new ElMaker2('div', arrDiv);
    const labelValue3 = new ElMaker2('div', arrDiv);

    const divContent = document.createElement('div');
    bookContainer.appendChild(divContent);
    for (let i = 0; i < 3; i += 1) {
      divContent.appendChild(arrDiv[i]);
      arrDiv[i].append(arrLabel[i], arrValue[i]);
    }

    const editButton = document.createElement('button');
    editButton.classList.add('edit', `${i}`);
    editButton.textContent = 'edit';
    divContent.appendChild(editButton);
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
