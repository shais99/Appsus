import utilService from '../utilService.js'
import storageService from '../storageService.js'

const STORAGE_KEY = 'notes'

var gDefaultNotes = [
    {
        id: utilService.makeId(),
        type: "NoteTxt",
        isPinned: true,
        info: {
            label: 'Need to remember!',
            value: "My Girl Friend Birthday - 05/05"
        },
        style: {
            backgroundColor: "#ffe06e",
            color: 'red'
        },
        createdAt: utilService.getTime()
    },
    {
        id: utilService.makeId(),
        type: "NoteImg",
        isPinned: false,
        info: {
            label: 'CSS be like:',
            value: "assets/img/programming-gif.gif",
        },
        style: {
            backgroundColor: "#2bcbba",
            color: 'black'
        },
        createdAt: utilService.getTime()
    },
    {
        id: utilService.makeId(),
        type: "NoteTodos",
        isPinned: false,
        info: {
            label: "Things To Do:",
            todos: [
                { id: utilService.makeId(), txt: "Talk With Nevo", doneAt: null, isChecked: true },
                { id: utilService.makeId(), txt: "Learn Code From Yaron", doneAt: 187111111, isChecked: false }
            ]
        },
        style: {
            backgroundColor: "#2bcbba",
            color: 'black'
        },
        createdAt: utilService.getTime()
    },
    {
        id: utilService.makeId(),
        type: "NoteImg",
        isPinned: false,
        info: {
            label: 'Appsus application ;)',
            value: "assets/img/horse-gif.gif",
        },
        style: {
            backgroundColor: "rgb(255, 224, 110)",
            color: 'black'
        },
        createdAt: utilService.getTime()
    },
    {
        id: utilService.makeId(),
        type: "NoteTodos",
        isPinned: false,
        info: {
            label: "Things To Do:",
            todos: [
                { id: utilService.makeId(), txt: "Think About What To Do", doneAt: null, isChecked: true },
                { id: utilService.makeId(), txt: "Do What I Do", doneAt: 187111111, isChecked: false },
                { id: utilService.makeId(), txt: "To Finish The To Do", doneAt: null, isChecked: false },
                { id: utilService.makeId(), txt: "To Do BUM! Phhh", doneAt: null, isChecked: true }
            ]
        },
        style: {
            backgroundColor: "#ffe06e",
            color: 'black'
        },
        createdAt: utilService.getTime()
    },
    {
        id: utilService.makeId(),
        type: "NoteImg",
        isPinned: false,
        info: {
            label: 'My little puppy :)',
            value: "assets/img/little-puppy.jpg",
        },
        style: {
            backgroundColor: "#2bcbba",
            color: 'black'
        },
        createdAt: utilService.getTime()
    },
    {
        id: utilService.makeId(),
        type: "NoteYoutube",
        isPinned: false,
        info: {
            label: 'A Song That I Loved',
            value: "https://www.youtube.com/embed/tgbNymZ7vqY"
        },
        style: {
            backgroundColor: "#20bf6b",
            color: 'black'
        },
        createdAt: utilService.getTime()
    },
    {
        id: utilService.makeId(),
        type: "NoteAudio",
        isPinned: true,
        info: {
            label: 'The Appsus (SUS) Sound Is Here',
            value: "assets/sound/horse.mp3"
        },
        style: {
            backgroundColor: "#4b7bec",
            color: 'black'
        },
        createdAt: utilService.getTime()
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
    updateNote,
    updateTodo,
    todoChecked,
    addTodo,
    pinNote,
    isPinned,
    updateLabel,
    updateEmailNote
}

function addTodo(txt, note) {
    const todo = _createTodo(txt)
    note.info.todos.push(todo)
    storageService.saveToStorage(STORAGE_KEY, gNotes)
}

function updateLabel(note, value) {
    const noteIdx = _getIdxById(note.id)
    gNotes[noteIdx].info.label = value

    storageService.saveToStorage(STORAGE_KEY, gNotes)
    return Promise.resolve()
}

function isPinned(noteId) {
    const noteIdx = _getIdxById(noteId)
    if (gNotes[noteIdx].isPinned) return true
    else return false
}

function pinNote(noteId) {
    const noteIdx = _getIdxById(noteId)
    gNotes[noteIdx].isPinned = !gNotes[noteIdx].isPinned
    storageService.saveToStorage(STORAGE_KEY, gNotes)
}

function todoChecked(todo) {
    if (todo.isChecked) {
        todo.doneAt = null
        todo.isChecked = false
    }
    else {
        todo.doneAt = Date.now()
        todo.isChecked = true
    }
    storageService.saveToStorage(STORAGE_KEY, gNotes)
}

function updateTodo(note, todoId, txt) {
    const todoIdx = getTodoIdxById(todoId, note.info.todos)
    note.info.todos[todoIdx].txt = txt
    storageService.saveToStorage(STORAGE_KEY, gNotes)
    return Promise.resolve()
}

function getTodoIdxById(todoId, todos) {
    return todos.findIndex(todo => todo.id === todoId)
}

function updateNote(note, txt) {
    const noteIdx = _getIdxById(note.id)
    gNotes[noteIdx].info.value = txt

    storageService.saveToStorage(STORAGE_KEY, gNotes)
    return Promise.resolve()
}

function updateEmailNote(note, editType, txt) {
    note.info[editType] = txt
    storageService.saveToStorage(STORAGE_KEY,gNotes)
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

    gNotes[noteIdx].style = { ...gNotes[noteIdx].style, backgroundColor }

    storageService.saveToStorage(STORAGE_KEY, gNotes)
    return Promise.resolve();
}

function onChangeTxtColor(noteId, color) {
    const noteIdx = _getIdxById(noteId)

    gNotes[noteIdx].style = { ...gNotes[noteIdx].style, color }

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
    if (type === 'NoteEmail') {
        const newNote = _createEmailNote(note.emailName, note.emailSubject, note.emailBody)
        gNotes.unshift(newNote)
        storageService.saveToStorage(STORAGE_KEY, gNotes)
        return;
    }
    const newNote = _createNote(note, type)

    gNotes.unshift(newNote)
    storageService.saveToStorage(STORAGE_KEY, gNotes)
}

function _createEmailNote(emailName, emailSubject, emailBody) {
    return {
        id: utilService.makeId(),
        type: 'NoteEmail',
        isPinned: false,
        info: {
            label: emailSubject,
            emailName,
            emailBody
        },
        createdAt: utilService.getTime()
    }
}

function _createTodo(txt) {
    return {
        id: utilService.makeId(),
        txt,
        doneAt: null,
        isChecked: false,
        isPinned: false,
        createdAt: utilService.getTime()
    }
}

function _createTodoNote(todos) {
    return {
        id: utilService.makeId(),
        type: 'NoteTodos',
        isPinned: false,
        info: {
            label: 'New Todo Title',
            todos,
            value: todos
        },
        createdAt: utilService.getTime()
    }
}

function _createNote(note, type) {
    return {
        id: utilService.makeId(),
        type,
        isPinned: false,
        info: {
            label: 'New Note Title',
            value: note.value
        },
        createdAt: utilService.getTime()
    }
}

function query(searchBy) {
    _sortByPinned()
    var notes = gNotes;
    if (searchBy) {

        notes = gNotes.filter(note => {
            return note.info.label.toLowerCase().includes(searchBy.searchBy.toLowerCase())
        })
    }
    return Promise.resolve(notes.slice());
}

function _createNotes() {
    gNotes = storageService.loadFromStorage(STORAGE_KEY)
    if (!gNotes) gNotes = gDefaultNotes
    storageService.saveToStorage(STORAGE_KEY, gNotes)
}

function _getIdxById(noteId) {
    return gNotes.findIndex(note => note.id === noteId)
}

function _sortByPinned() {
    gNotes.sort(function (firstNote, secondNote) { return secondNote.isPinned - firstNote.isPinned });
}