export default function NoteAudio(props) {
    const { note } = props
    return (
        <React.Fragment>
            <audio controls>
                <source src={note.info.value}></source>
            </audio>
        </React.Fragment>
    )
}