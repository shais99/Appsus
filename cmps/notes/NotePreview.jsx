
import NoteTxt from './NoteTxt.jsx'
import NoteImg from './NoteImg.jsx'
import NoteYoutube from './NoteYoutube.jsx'
import NoteSound from './NoteSound.jsx'
import NoteTodos from './NoteTodos.jsx'

export default class NotePreview extends React.Component {
    get noteToRender() {
        const { note, type } = this.props

        switch (type) {
            case 'NoteText':
                return <NoteTxt note={note} />
            case 'NoteImg':
                return <NoteImg note={note} />
            case 'NoteYoutube':
                return <NoteYoutube note={note} />
            case 'NoteSound':
                return <NoteSound note={note} />
            case 'NoteTodos':
                return <NoteTodos note={note} />
        }
    }
    render() {
        return (
            <article className="single-note">
                {this.noteToRender}
            </article>
        )
    }
}