
import NoteTxt from './NoteTxt.jsx'
import NoteImg from './NoteImg.jsx'
import NoteYoutube from './NoteYoutube.jsx'
import NoteAudio from './NoteAudio.jsx'
import NoteTodos from './NoteTodos.jsx'
import ColorPicker from './ColorPicker.jsx'
import noteService from '../../services/notes/noteService.js'

export default class NotePreview extends React.Component {
    state = {
        isBgColorPicker: false,
        isTxtColorPicker: false
    }
    onUpdateNote = (note, txt) => {
        noteService.updateNote(note, txt)
    }
    onUpdateTodo = (note, todoId, txt) => {
        noteService.updateTodo(note, todoId, txt)
    }
    get noteToRender() {
        const { note, type } = this.props

        switch (type) {
            case 'NoteText':
                return <NoteTxt note={note} updateNote={this.onUpdateNote} />
            case 'NoteImg':
                return <NoteImg note={note} />
            case 'NoteYoutube':
                return <NoteYoutube note={note} />
            case 'NoteAudio':
                return <NoteAudio note={note} />
            case 'NoteTodos':
                return <NoteTodos todo={note} updateTodo={this.onUpdateTodo} loadNotes={this.props.loadNotes} />
        }
    }
    onPinNote = (noteId) => {
        noteService.pinNote(noteId)
        this.props.loadNotes()
    }
    isPinned = (noteId) => {
        return noteService.isPinned(noteId)
    }
    onChangeLabel(note, ev) {
        let value = ev.target.innerText
        noteService.updateLabel(note, value)
    }
    render() {
        const { note, onDeleteNote, onChangeBgColor, onChangeTxtColor } = this.props
        return (
            <article className="single-note flex column" style={note.style}>
                <p className="pinned">{this.isPinned(note.id) ? <img src="assets/img/pinned.png" className="pinned-img" alt="" /> : ''}</p>
                <p contentEditable="true" suppressContentEditableWarning={true} onInput={(event => this.onChangeLabel(note, event))} className="note-title">{note.info.label}</p>
                <div className="note-content">
                    {this.noteToRender}
                </div>

                <span className="note-created">{note.createdAt}</span>
                <div className="note-options">
                    <img src="assets/img/delete.png" title="Delete Note" onClick={() => onDeleteNote(note.id)} alt="" />

                    <img onClick={() => { this.setState(prevState => { return { isBgColorPicker: !prevState.isBgColorPicker } }) }} src="assets/img/paint.png" title="Change Note Color" alt="" />
                    <img onClick={() => { this.setState(prevState => { return { isTxtColorPicker: !prevState.isTxtColorPicker } }) }} title="Change Note Text Color" src="assets/img/font.png" alt="" />
                    <img src="assets/img/pin.png" title="Pin Note" onClick={() => this.onPinNote(note.id)} alt="" />

                    <ColorPicker mainClass='cp-left' isShown={this.state.isBgColorPicker} onChange={onChangeBgColor} noteId={note.id} />
                    <ColorPicker mainClass='cp-right' isShown={this.state.isTxtColorPicker} onChange={onChangeTxtColor} noteId={note.id} />
                    
                </div>
            </article>
        )
    }
}