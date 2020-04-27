
import NoteTxt from './NoteTxt.jsx'
import NoteImg from './NoteImg.jsx'
import NoteYoutube from './NoteYoutube.jsx'
import NoteAudio from './NoteAudio.jsx'
import NoteTodos from './NoteTodos.jsx'
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
                {/* <p class="pinned">{this.isPinned(note.id)}</p> */}
                <p class="pinned">{this.isPinned(note.id) ? <img src="../../assets/img/pinned.png" className="pinned-img" alt="" /> : ''}</p>
                <p contentEditable="true" suppressContentEditableWarning={true} onInput={(event => this.onChangeLabel(note, event))} className="note-title">{note.info.label}</p>
                <div className="note-content">
                    {this.noteToRender}
                </div>


                <div className="note-options">
                    <img src="../../assets/img/delete.png" onClick={() => onDeleteNote(note.id)} alt="" />

                    <img onClick={() => { this.setState(prevState => { return { isBgColorPicker: !prevState.isBgColorPicker } }) }} src="../assets/img/paint.png" alt="" />
                    <img onClick={() => { this.setState(prevState => { return { isTxtColorPicker: !prevState.isTxtColorPicker } }) }} src="../assets/img/font.png" alt="" />
                    <img src="../../assets/img/pin.png" onClick={() => this.onPinNote(note.id)} alt="" />

                    <div className={`color-picker cp-left ${this.state.isBgColorPicker ? 'shown' : ''}`}>
                        <label className="cp-red" onClick={() => onChangeBgColor(note.id, '#fc5c65')}></label>
                        <label className="cp-blue" onClick={() => onChangeBgColor(note.id, '#4b7bec')}></label>
                        <label className="cp-turq" onClick={() => onChangeBgColor(note.id, '#2bcbba')}></label>
                        <label className="cp-orange" onClick={() => onChangeBgColor(note.id, '#fd9644')}></label>
                        <label className="cp-yellow" onClick={() => onChangeBgColor(note.id, '#fed330')}></label>
                        <label className="cp-grey" onClick={() => onChangeBgColor(note.id, '#778ca3')}></label>
                        <label className="cp-green" onClick={() => onChangeBgColor(note.id, '#26de81')}></label>
                        <label className="cp-basic" onClick={() => onChangeBgColor(note.id, '#ffe06e')}></label>
                        <label className="cp-black" onClick={() => onChangeBgColor(note.id, '#000000')}></label>
                    </div>

                    <div className={`color-picker cp-right ${this.state.isTxtColorPicker ? 'shown' : ''}`}>
                        <label className="cp-red" onClick={() => onChangeTxtColor(note.id, '#fc5c65')}></label>
                        <label className="cp-blue" onClick={() => onChangeTxtColor(note.id, '#4b7bec')}></label>
                        <label className="cp-turq" onClick={() => onChangeTxtColor(note.id, '#2bcbba')}></label>
                        <label className="cp-orange" onClick={() => onChangeTxtColor(note.id, '#fd9644')}></label>
                        <label className="cp-yellow" onClick={() => onChangeTxtColor(note.id, '#fed330')}></label>
                        <label className="cp-grey" onClick={() => onChangeTxtColor(note.id, '#778ca3')}></label>
                        <label className="cp-green" onClick={() => onChangeTxtColor(note.id, '#26de81')}></label>
                        <label className="cp-basic" onClick={() => onChangeTxtColor(note.id, '#ffe06e')}></label>
                        <label className="cp-black" onClick={() => onChangeTxtColor(note.id, '#000000')}></label>
                    </div>
                </div>
            </article>
        )
    }
}