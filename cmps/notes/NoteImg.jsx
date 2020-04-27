export default function NoteImg(props) {
    const { note } = props
    return (
        <React.Fragment>
            <img className="note-img" src={note.info.value} />
        </React.Fragment>
    )
}