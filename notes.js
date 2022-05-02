// adding new notes to localStorage
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesArr = [];
    } else {
        notesArr = JSON.parse(notes);
    }
    notesArr.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesArr));
    addTxt.value = '';
    showNotes(); //function to update newly added notes
})

// function to show stored notes
function showNotes() {
    let notes = localStorage.getItem('notes');
    let html = '';
    if (notes == null) {
        notesArr = [];
    } else {
        notesArr = JSON.parse(notes)
    }
    notesArr.forEach(function (element, index) {
        html += `<div class="card note-card my-2" style="width: 24rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text">${element}</p>
          <button href="#" class="btn btn-outline-danger" id="${index}" onclick="removeNote(this.id)">Remove Note</button>
        </div>
      </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesArr.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add Note" section above to add notes.`;
    }
}

// function to remove notes
function removeNote(index) {
    let notes = localStorage.getItem('notes');
    let html = '';
    if (notes == null) {
        notesArr = [];
    } else {
        notesArr = JSON.parse(notes)
    }
    notesArr.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesArr));
    showNotes();

}

//function to search notes
let searchStr = document.getElementById('searchStr');
searchStr.addEventListener('input', function (e) {
    console.log("input");
    let inputVal = searchStr.value.toLowerCase();
    let cardArr = document.getElementsByClassName('note-card');
    Array.from(cardArr).forEach(function (element) {
        let cardTxt = element.getElementsByClassName('card-text')[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
})