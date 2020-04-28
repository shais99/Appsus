import NotePreview from './NotePreview.jsx'

export default function NoteList(props) {
    const { loadNotes, onChangeBgColor, onChangeTxtColor, onDeleteNote } = props
    
    return (
        <div className="note-list flex wrap space-between">
            {props.notes.map(note => <NotePreview key={note.id} loadNotes={loadNotes} onChangeBgColor={onChangeBgColor} onChangeTxtColor={onChangeTxtColor} onDeleteNote={onDeleteNote} type={note.type} note={note} />)}
        </div>
    )
}