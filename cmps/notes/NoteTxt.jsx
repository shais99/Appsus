export default function NoteTxt(props) {
    const { note } = props
    function onChangeFunc(ev, el) {
        let value = ev.target.innerText
        let newValue = ev.data
        props.updateNote(note, value)
        console.log(ev);
    }
    return (
        <p contentEditable="true" suppressContentEditableWarning={true} onInput={(event, element => onChangeFunc(event, element))}>{note.info.value}</p>
    )
}