let currentNoteId = null;
let notes = {};

function createNewNote() {
  currentNoteId = Date.now().toString();
  document.getElementById("note-text").value = "";
}

function saveNote() {
  const text = document.getElementById("note-text").value;
  if (text) {
    notes[currentNoteId] = text;
    updateNoteList();
  }
}

function deleteNote() {
  if (currentNoteId && confirm("Delete this note?")) {
    delete notes[currentNoteId];
    updateNoteList();
    document.getElementById("note-text").value = "";
  }
}

function updateNoteList() {
  const noteList = document.getElementById("note-list");
  noteList.innerHTML = "";
  for (const id in notes) {
    const li = document.createElement("li");
    li.textContent = notes[id].substring(0, 20) + "...";
    li.onclick = () => {
      loadNote(id);
    };
    noteList.appendChild(li);
  }
}

function loadNote(id) {
  currentNoteId = id;
  document.getElementById("note-text").value = notes[id];
}

updateNoteList();
