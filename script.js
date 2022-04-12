let firstName = document.querySelector('#first-name');

document.querySelector('#email').addEventListener('submit', (e) => {
  // Prevent the default form submission
  e.preventDefault();
  // Clear the input values
  email.value= '';
});

let book1 = document.querySelector('#book1');
let book2 = document.querySelector('#book2');



book1.addEventListener('click', () => {
 
  let imgSrc = book1.getAttribute('src');

  if (imgSrc === 'Images/book1.jpg') {
    book1.setAttribute('src', 'Images/book1D.png');
  } else {
    book1.setAttribute('src', 'Images/book1.jpg');
  }
});

book2.addEventListener('click', () => {
 
    let imgSrc = book2.getAttribute('src');
  
    if (imgSrc === 'Images/book2.jpeg') {
      book2.setAttribute('src', 'Images/book2D.png');
    } else {
      book2.setAttribute('src', 'Images/book2.jpeg');
    }
  });

  book3.addEventListener('click', () => {
 
    let imgSrc = book3.getAttribute('src');
  
    if (imgSrc === 'Images/book3.jpeg') {
      book3.setAttribute('src', 'Images/book3D.png');
    } else {
      book3.setAttribute('src', 'Images/book3.jpeg');
    }
  });