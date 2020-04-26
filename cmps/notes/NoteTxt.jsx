export default function NoteTxt(props) {
    const { note } = props
    return (
        <React.Fragment>
            TYPE FOR DEVELOPER: {note.type}<br />
            {note.info.txt}
        </React.Fragment>
    )
}