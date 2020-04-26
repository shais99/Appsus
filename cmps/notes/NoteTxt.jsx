export default function NoteTxt(props) {
    const { note } = props
    return (
        <React.Fragment>
            {note.info.value}
        </React.Fragment>
    )
}