export default function NoteYoutube(props) {
    const { note } = props
    return (
        <React.Fragment>
            <iframe width="283" height="270" src={note.info.value} frameBorder="0" allowFullScreen></iframe>
        </React.Fragment>

    )
}