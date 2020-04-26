import utilService from '../utilService.js'
import storageService from '../storageService.js'

const STORAGE_KEY = 'notes'

var gDefaultNotes = [
    {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteImg",
        info: {
            url: "data:image/jpeg;base64,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",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteTodos",
        info: {
            value: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteTodos",
        info: {
            value: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteYoutube",
        info: {
            value: "https://www.youtube.com/embed/tgbNymZ7vqY"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteAudio",
        info: {
            value: "../../assets/sound/horse.mp3"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    
]
var gNotes = null;
_createNotes()

export default {
    query,
    addNote
}

function addNote(note, type) {
    const newNote = _createNote(note, type)

    gNotes.unshift(newNote)
    storageService.saveToStorage(STORAGE_KEY, gNotes)
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