export default function NoteImg(props) {
    const { note } = props
    return (
        <React.Fragment>
            <div className="note-img-title">{note.info.title}</div>
            <img className="note-img" src={note.info.value} />
        </React.Fragment>
    )
}