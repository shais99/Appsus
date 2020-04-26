import noteService from '../services/notes/noteService.js'
import AddNote from '../cmps/notes/AddNote.jsx'
import NoteList from '../cmps/notes/NoteList.jsx'


export default class Notes extends React.Component {

    state = {
        notes: null
    }
    componentDidMount() {
        this.loadNotes()
    }
    loadNotes = () => {
        noteService.query()
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
    render() {
        const { notes } = this.state
        return (
            <main className="main-notes container">
                <AddNote loadNotes={this.loadNotes} />
                {notes && <NoteList onDeleteNote={this.onDeleteNote} onChangeBgColor={this.onChangeBgColor} onChangeTxtColor={this.onChangeTxtColor} notes={notes}/>}
            </main>
        )
    }
}