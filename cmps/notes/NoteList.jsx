import NotePreview from './NotePreview.jsx'

export default function NoteList(props) {
    return (
        <div className="note-list flex wrap">
            { props.notes.map(note => <NotePreview key={ note.id } onChangeBgColor={props.onChangeBgColor} onChangeTxtColor={props.onChangeTxtColor} onDeleteNote={props.onDeleteNote} type={note.type} note={ note } />) }
        </div>
    )
}