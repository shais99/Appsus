import noteService from '../../services/notes/noteService.js'

export default class NoteEmail extends React.Component {
    onChangeFunc = (ev, editType) => {
        let value = ev.target.innerText
        noteService.updateEmailNote(this.props.note, editType, value)
    }
    render() {
        const { note } = this.props
        return (
            <React.Fragment>
                <p contentEditable="true" suppressContentEditableWarning={true} onInput={(event => this.onChangeFunc(event, 'emailName'))}>
                    {note.info.emailName}
                </p>
                <p contentEditable="true" suppressContentEditableWarning={true} onInput={(event => this.onChangeFunc(event, 'emailBody'))}>
                    {note.info.emailBody}
                </p>
            </React.Fragment>
        )
    }
}