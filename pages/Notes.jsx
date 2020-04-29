import noteService from '../services/notes/noteService.js'
import AddNote from '../cmps/notes/AddNote.jsx'
import NoteList from '../cmps/notes/NoteList.jsx'
import SearchNote from '../cmps/notes/SearchNote.jsx'
import { eventBus } from '../services/eventBusService.js'


export default class Notes extends React.Component {

    state = {
        notes: null,
        searchBy: null
    }
    componentDidMount() {
        this.loadNotes();
        this.createNoteByUrl()
    }
    createNoteByUrl() {
        const emailName = this.getParameterByName('emailName');
        const emailSubject = this.getParameterByName('emailSubject');
        const emailBody = this.getParameterByName('emailBody');
        if (!emailName && !emailSubject && !emailBody) return
        let note = {
            emailName,
            emailSubject,
            emailBody
        }
        noteService.addNote(note, 'NoteEmail')
        this.loadNotes()
        window.location.href = `index.html#/notes`
        eventBus.emit('show-msg', { txt: 'Note Added Successfully from email!' })
    }
    getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    loadNotes = () => {
        noteService.query(this.state.searchBy)
            .then(notes => {
                this.setState({ notes })
            })
    }
    onDeleteNote = (noteId) => {
        noteService.remove(noteId)
        this.loadNotes()
    }
    onChangeBgColor = (noteId, color) => {
        noteService.onChangeBgColor(noteId, color)
        this.loadNotes()
    }
    onChangeTxtColor = (noteId, color) => {
        noteService.onChangeTxtColor(noteId, color)
        this.loadNotes()
    }
    onSetSearch = (searchBy) => {
        this.setState({ searchBy }, () => this.loadNotes())
    }
    render() {
        const { notes } = this.state
        const { onDeleteNote, loadNotes, onChangeBgColor, onChangeTxtColor } = this
        return (
            <main className="main-notes container fade-in">

                <div className="notes-main-add flex even">
                    <SearchNote onSetSearch={this.onSetSearch} />
                    <AddNote loadNotes={loadNotes} />
                </div>
                {notes && <NoteList onDeleteNote={onDeleteNote} loadNotes={loadNotes} onChangeBgColor={onChangeBgColor} onChangeTxtColor={onChangeTxtColor} notes={notes} />}
            </main>
        )
    }
}