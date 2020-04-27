export default function NoteTxt(props) {
    const { note } = props
    function onChangeFunc(ev) {
        let value = ev.target.innerText
        props.updateNote(note, value)
    }
    return (
        <p contentEditable="true" suppressContentEditableWarning={true} onInput={(event => onChangeFunc(event))}>{note.info.value}</p>
    )
}