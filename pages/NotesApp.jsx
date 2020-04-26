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
    render() {
        const { notes } = this.state
        return (
            <main className="main-notes container">
                <AddNote loadNotes={this.loadNotes} />
                {notes && <NoteList notes={notes}/>}
            </main>
        )
    }
}