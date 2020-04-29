export default class NoteEmail extends React.Component {
    onChangeFunc = (ev, todoId) => {
        let value = ev.target.innerText
        // this.props.updateTodo(this.props.todo, todoId, value)
    }
    render() {
        console.log(this.props.note)
        const { note } = this.props
        return (
            <React.Fragment>
                <p contentEditable="true" suppressContentEditableWarning={true} onInput={(event => onChangeFunc(event, note.id))}>
                    {note.info.emailName}
                </p>
                <p contentEditable="true" suppressContentEditableWarning={true} onInput={(event => onChangeFunc(event, note.id))}>
                    {note.info.emailBody}
                </p>
            </React.Fragment>
        )
    }
}