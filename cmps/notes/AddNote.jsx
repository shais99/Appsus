import noteService from "../../services/notes/noteService.js"
import { eventBus } from '../../services/eventBusService.js'

export default class AddNote extends React.Component {
    typesMap = {
        txt: 'NoteTxt',
        img: 'NoteImg',
        youtube: 'NoteYoutube',
        audio: 'NoteAudio',
        todos: 'NoteTodos'
    }
    state = {
        currType: 'NoteTxt',
        note: {
            value: '',
        },
    }
    onChangeType = (type) => {
        this.setState({ currType: type })
    }
    get placeHolderValue() {
        switch (this.state.currType) {
            case 'NoteTxt':
                return 'Type Some text...'
            case 'NoteImg':
                return 'Enter Img URL...'
            case 'NoteYoutube':
                return 'Enter Youtube Embed Link...'
            case 'NoteAudio':
                return 'Enter mp3 URL...'
            case 'NoteTodos':
                return 'Enter Comma Separated list...'
        }
    }
    handleInput = ({ target }) => {
        const value = target.value

        this.setState(prevState => {
            return {
                note: {
                    ...prevState.note,
                    value
                }
            }
        })
    }
    onAddNote = (ev) => {
        ev.preventDefault()

        const { note, currType } = this.state
        noteService.addNote(note, currType)
        this.props.loadNotes()

        this.setState({ note: { value: '' } })

        eventBus.emit('show-msg', { txt: 'Note Added Successfully!' })
    }
    render() {
        const { currType, note } = this.state
        const { typesMap } = this
        return (
            <div className="add-note-container flex">
                <form onSubmit={this.onAddNote}>
                    <input type="text" autoComplete="off" value={note.value} name="noteValue" onChange={this.handleInput} className="add-note-input" placeholder={this.placeHolderValue} />
                </form>

                <div className="add-note-options flex align-center">
                    <img src="assets/img/font.png" title="Add Text Note" className={`note-text ${currType === typesMap.txt ? 'opacity' : ''}`} onClick={() => { this.onChangeType(typesMap.txt) }} alt="" />
                    <img src="assets/img/list.png" title="Add Todos Note" className={`note-todos ${currType === typesMap.todos ? 'opacity' : ''}`} onClick={() => { this.onChangeType(typesMap.todos) }} alt="" />
                    <img src="assets/img/img.png" title="Add Image Note" className={`note-img ${currType === typesMap.img ? 'opacity' : ''}`} onClick={() => { this.onChangeType(typesMap.img) }} alt="" />
                    <img src="assets/img/youtube.png" title="Add Youtube EMBED Note" className={`note-youtube ${currType === typesMap.youtube ? 'opacity' : ''}`} onClick={() => { this.onChangeType(typesMap.youtube) }} alt="" />
                    <img src="assets/img/speaker.png" title="Add Sound Mp3 Note" className={`note-audio ${currType === typesMap.audio ? 'opacity' : ''}`} onClick={() => { this.onChangeType(typesMap.audio) }} alt="" />
                </div>
            </div>
        )
    }
}