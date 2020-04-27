export default function ColorPicker(props) {
    const { noteId, onChange, isShown, mainClass } = props
    return (
        <div className={`color-picker ${mainClass} ${isShown ? 'shown' : ''}`}>
            <label className="cp-red" onClick={() => onChange(noteId, '#fc5c65')}></label>
            <label className="cp-blue" onClick={() => onChange(noteId, '#4b7bec')}></label>
            <label className="cp-turq" onClick={() => onChange(noteId, '#2bcbba')}></label>
            <label className="cp-orange" onClick={() => onChange(noteId, '#fd9644')}></label>
            <label className="cp-yellow" onClick={() => onChange(noteId, '#fed330')}></label>
            <label className="cp-grey" onClick={() => onChange(noteId, '#778ca3')}></label>
            <label className="cp-green" onClick={() => onChange(noteId, '#26de81')}></label>
            <label className="cp-basic" onClick={() => onChange(noteId, '#ffe06e')}></label>
            <label className="cp-black" onClick={() => onChange(noteId, '#000000')}></label>
        </div>
    )
}