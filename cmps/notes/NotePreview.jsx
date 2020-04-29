
import NoteTxt from './NoteTxt.jsx'
import NoteImg from './NoteImg.jsx'
import NoteYoutube from './NoteYoutube.jsx'
import NoteAudio from './NoteAudio.jsx'
import NoteTodos from './NoteTodos.jsx'
import ColorPicker from './ColorPicker.jsx'
import noteService from '../../services/notes/noteService.js'
import NoteEmail from './NoteEmail.jsx'

const history = History.createBrowserHistory()

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
            case 'NoteTxt':
                return <NoteTxt note={note} updateNote={this.onUpdateNote} />
            case 'NoteImg':
                return <NoteImg note={note} />
            case 'NoteYoutube':
                return <NoteYoutube note={note} />
            case 'NoteAudio':
                return <NoteAudio note={note} />
            case 'NoteTodos':
                return <NoteTodos todo={note} updateTodo={this.onUpdateTodo} loadNotes={this.props.loadNotes} />
            case 'NoteEmail':
                return <NoteEmail note={note} loadNotes={this.props.loadNotes} />
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
    onSendEmail = (note) => {
        if (note.type === 'NoteTodos') {
            let todoTxt = note.info.todos.map(todo => todo.txt)
            window.location.href = `index.html#/email/compose?type=${note.type}&createdAt=${note.createdAt}&subject=${note.info.label}&content=${todoTxt}`
        } else if (note.type === 'NoteEmail') {
            window.location.href = `index.html#/email/compose?type=${note.type}&createdAt=${note.createdAt}&subject=${note.info.label}&emailName=${note.info.emailName}&content=${note.info.emailBody}`
        } else {
            window.location.href = `index.html#/email/compose?type=${note.type}&createdAt=${note.createdAt}&subject=${note.info.label}&content=${note.info.value}`
        }
    }
    render() {
        const { note, onDeleteNote, onChangeBgColor, onChangeTxtColor } = this.props
        const { isPinned, onChangeLabel, noteToRender, onPinNote, onSendEmail } = this
        const { isBgColorPicker, isTxtColorPicker } = this.state
        return (
            <article className="single-note flex column" style={note.style}>
                <p className="pinned">{isPinned(note.id) ? <img src="assets/img/pinned.png" className="pinned-img" alt="" /> : ''}</p>
                <p contentEditable="true" suppressContentEditableWarning={true} onInput={(event => onChangeLabel(note, event))} className="note-title">{note.info.label}</p>
                <div className="note-content">
                    {noteToRender}
                </div>

                <span className="note-created">{note.createdAt}</span>
                <div className="note-options">
                    <img src="assets/img/delete.png" title="Delete Note" onClick={() => onDeleteNote(note.id)} alt="" />

                    <img onClick={() => { this.setState(prevState => { return { isBgColorPicker: !prevState.isBgColorPicker } }) }} src="assets/img/paint.png" title="Change Note Color" alt="" />
                    <img onClick={() => { this.setState(prevState => { return { isTxtColorPicker: !prevState.isTxtColorPicker } }) }} title="Change Note Text Color" src="assets/img/font.png" alt="" />
                    <img src="assets/img/pin.png" title="Pin Note" onClick={() => onPinNote(note.id)} alt="" />
                    <img src="assets/img/send-email.png" title="Send As Email" onClick={() => onSendEmail(note)} />

                    <ColorPicker mainClass='cp-left' isShown={isBgColorPicker} onChange={onChangeBgColor} noteId={note.id} />
                    <ColorPicker mainClass='cp-right' isShown={isTxtColorPicker} onChange={onChangeTxtColor} noteId={note.id} />

                </div>
            </article>
        )
    }
}