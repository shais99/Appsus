import utilService from '../utilService.js'
import storageService from '../storageService.js'

const STORAGE_KEY = 'notes'

var gDefaultNotes = [
    {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: true,
        info: {
            value: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "#ffe06e",
            color: 'white'
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteImg",
        info: {
            title: 'A little puppy :)',
            value: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg",
        },
        style: {
            backgroundColor: "#20bf6b",
            color: 'white'
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { id: utilService.makeId(), txt: "Do that", doneAt: null },
                { id: utilService.makeId(), txt: "Do this", doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: "#ffe06e",
            color: 'white'
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteYoutube",
        info: {
            value: "https://www.youtube.com/embed/tgbNymZ7vqY"
        },
        style: {
            backgroundColor: "#20bf6b",
            color: 'white'
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteAudio",
        info: {
            value: "../../assets/sound/horse.mp3"
        },
        style: {
            backgroundColor: "#ffe06e",
            color: 'white'
        }
    },

]
var gNotes = null;
_createNotes()

export default {
    query,
    addNote,
    remove,
    onChangeBgColor,
    onChangeTxtColor,
    updateNote
}

function updateNote(note, txt) {
    const noteIdx = _getIdxById(note.id)
    gNotes[noteIdx].info.value = txt
    
    storageService.saveToStorage(STORAGE_KEY, gNotes)
    return Promise.resolve()
}

function remove(noteId) {
    const noteIdx = _getIdxById(noteId)
    gNotes.splice(noteIdx, 1)

    storageService.saveToStorage(STORAGE_KEY, gNotes)
    return Promise.resolve();
}

function onChangeBgColor(noteId, backgroundColor) {
    const noteIdx = _getIdxById(noteId)

    gNotes[noteIdx].style = { ...gNotes[noteIdx].styles, backgroundColor }

    storageService.saveToStorage(STORAGE_KEY, gNotes)
    return Promise.resolve();
}

function onChangeTxtColor(noteId, color) {
    const noteIdx = _getIdxById(noteId)

    gNotes[noteIdx].style = { ...gNotes[noteIdx].styles, color }

    storageService.saveToStorage(STORAGE_KEY, gNotes)
    return Promise.resolve();
}

function addNote(note, type) {

    if (type === 'NoteTodos') {
        const values = note.value.split(',')

        const todos = values.map(value => _createTodo(value))

        const newTodo = _createTodoNote(todos)
        gNotes.unshift(newTodo)
        storageService.saveToStorage(STORAGE_KEY, gNotes)

        return
    }

    const newNote = _createNote(note, type)

    gNotes.unshift(newNote)
    storageService.saveToStorage(STORAGE_KEY, gNotes)
}

function _createTodo(txt) {
    return {
        id: utilService.makeId(),
        txt,
        doneAt: null
    }
}

function _createTodoNote(todos) {
    return {
        id: utilService.makeId(),
        type: "NoteTodos",
        isPinned: false,
        info: {
            label: "New Todo",
            todos
        }
    }
}

function _createNote(note, type) {
    return {
        id: utilService.makeId(),
        type,
        isPinned: false,
        info: {
            value: note.value
        }

    }
}

function query() {
    var notes = gNotes;
    return Promise.resolve(notes);
}

function _createNotes() {
    gNotes = storageService.loadFromStorage(STORAGE_KEY)
    if (!gNotes) gNotes = gDefaultNotes
    storageService.saveToStorage(STORAGE_KEY, gNotes)
}

function _getIdxById(noteId) {
    return gNotes.findIndex(note => note.id === noteId)
}