export default function NoteYoutube(props) {
    const { note } = props
    return (
        <React.Fragment>
            <iframe width="283" height="270" src={note.info.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </React.Fragment>
        
    )
}