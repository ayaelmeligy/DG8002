let book1 = document.querySelector('#book1');


book1.addEventListener('click', () => {
 
  let imgSrc = book1.getAttribute('src');

  if (imgSrc === 'Images/book1.jpg') {
    book1.setAttribute('src', 'Images/book1D.png');
  } else {
    book1.setAttribute('src', 'Images/book1.jpg');
  }
});