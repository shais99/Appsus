import noteService from "../../services/notes/noteService.js"

export default class AddNote extends React.Component {
    typesMap = {
        txt: 'NoteText',
        img: 'NoteImg',
        youtube: 'NoteYoutube',
        audio: 'NoteAudio',
        todos: 'NoteTodos'
    }
    state = {
        currType: 'NoteText',
        note: {
            value: null,
        },
        placeHolderValue: 'Type Some Text...'
    }
    onChangeType = (type) => {
        this.setState({ currType: type })
        this.setState({ placeHolderValue: this.getPlaceHolderValue(type)})
    }
    getPlaceHolderValue(type) {
        switch (type) {
            case 'NoteText':
                return 'Type Some text...'
            case 'NoteImg':
                return 'Enter Img URL...'
            case 'NoteYoutube':
                return 'Enter Youtube Embed Link...'
            case 'NoteAudio':
                return 'Enter mp3 URL...'
            case 'NoteTodos':
                return 'Enter Comma Separated list...'
        }
    }
    handleInput = ({ target }) => {
        const value = target.value

        this.setState(prevState => {
            return {
                note: {
                    ...prevState.note,
                    value
                }
            }
        })
    }
    onAddNote = (ev) => {
        ev.preventDefault()
        const { note, currType } = this.state

        noteService.addNote(note, currType)
        this.props.loadNotes()
    }
    render() {
        const { currType, placeHolderValue } = this.state
        const { typesMap } = this
        return (
            <div className="notes-main-add flex justify-center">
                <form onSubmit={this.onAddNote}>
                    <input type="text" name="noteValue" onChange={this.handleInput} className="add-note-input" placeholder={placeHolderValue} />
                </form>

                <div className="add-note-options flex align-center">
                    <img src="../../assets/img/font.png" className={`note-text ${currType === typesMap.txt ? 'opacity' : ''}`} onClick={() => { this.onChangeType(typesMap.txt) }} alt="" />
                    <img src="../../assets/img/img.png" className={`note-img ${currType === typesMap.img ? 'opacity' : ''}`} onClick={() => { this.onChangeType(typesMap.img) }} alt="" />
                    <img src="../../assets/img/youtube.png" className={`note-youtube ${currType === typesMap.youtube ? 'opacity' : ''}`} onClick={() => { this.onChangeType(typesMap.youtube) }} alt="" />
                    <img src="../../assets/img/speaker.png" className={`note-audio ${currType === typesMap.audio ? 'opacity' : ''}`} onClick={() => { this.onChangeType(typesMap.audio) }} alt="" />
                    <img src="../../assets/img/list.png" className={`note-todos ${currType === typesMap.todos ? 'opacity' : ''}`} onClick={() => { this.onChangeType(typesMap.todos) }} alt="" />
                </div>
            </div>
        )
    }
}