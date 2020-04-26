import NotePreview from './NotePreview.jsx'

export default function NoteList(props) {
    return (
        <div className="note-list">
            { props.notes.map(note => <NotePreview key={ note.id } type={note.type} note={ note } />) }
        </div>
    )
}