console.log("Hello");

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {

}

Display.prototype.add = function (book) {
    tableBody = document.getElementById('tableBody');
    let uistring = `
                    <tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr> `;
    tableBody.innerHTML += uistring;

};
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
};
Display.prototype.validate = function (book) {
    let libraryForm = document.getElementById('libraryForm');
    if (book.name.length < 2 || book.author.length<2) {
        return false;
    }
    else {
        return true;
    }
};


Display.prototype.show = function (type, heading, message) {
    let msg = document.getElementById('msg');
    msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>${heading}: </strong>${message}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;
};

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
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }


    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    display.validate(book);
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Form sumbitted successfully', 'Congratulations! Your form has been submitted successfully');
    }
    else {
        display.show('danger', 'Form not submiited', 'Sorry, your form was not submitted. Please try again with autor or book name with length more than 2.');
    }

    e.preventDefault();
}