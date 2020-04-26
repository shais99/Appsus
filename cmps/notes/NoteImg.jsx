export default function NoteImg(props) {
    const { note } = props
    return (
        <React.Fragment>
            TYPE FOR DEVELOPER: {note.type}<br />
                <img className="note-img" src={note.info.value} title={note.info.title} />
        </React.Fragment>
    )
}