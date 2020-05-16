console.log("Hello");

function Book(name, author, type){
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {
    
}

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("Submitted");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    if(fiction.checked){
        type = fiction.value;
    }
    else if(programming.checked){
        type = programming.value;
    }
    else if(cooking.checked){
        type = cooking.value;
    }


    let book = new Book(name, author, type);
    console.log(book);
    e.preventDefault();
}