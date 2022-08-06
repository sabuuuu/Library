const title = document.getElementById('title');
const author = document.getElementById('author');
const numPages = document.getElementById('number')
const addBtn = document.getElementById('addBtn');
const bookContainer = document.getElementById('list-container');

addBtn.addEventListener ('click', function () {
    
    let book = document.createElement('div');
    book.classList.add('books');

    let titleP = document.createElement('p');
    titleP.innerText = `${title.value}`;
    book.appendChild(titleP);

    let authorP = document.createElement('p');
    authorP.innerText = `${author.value}`;
    book.appendChild(authorP);

    let numP = document.createElement('p');
    numP.innerText = `${numPages.value}`;
    book.appendChild(numP);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = 'read';
    checkButton.classList.add('checkBook');
    book.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'x';
    deleteButton.classList.add('deleteBook');
    book.appendChild(deleteButton);

    if (title.value === "") {
        alert('Please enter the necessary informations');
    } else if (author.value === "") {
        alert('Please enter the necessary informations');
    } else if (numPages.value === 0) {
        alert('Please enter the necessary informations');
    } else {
        bookContainer.appendChild(book);
    }

    title.value = "";
    author.value = "";
    numPages.value = "";

    checkButton.addEventListener('click', function () {
        
        titleP.style.textDecoration = "line-through";
        authorP.style.textDecoration = "line-through";
        numP.style.textDecoration = "line-through";
    });

    deleteButton.addEventListener('click', function (e) {
        
        let target = e.target;
        target.parentElement.remove();

    });
})