export default function AddNote(props) {
    return (
        <div className="notes-main-add flex justify-center">
            <input type="text" className="add-note-input" placeholder="What's on your mind..." />
            <div className="add-note-options flex align-center">
                <img src="../assets/img/font.png" alt="" />
                <img src="../assets/img/img.png" alt="" />
                <img src="../assets/img/youtube.png" alt="" />
                <img src="../assets/img/speaker.png" alt="" />
                <img src="../assets/img/list.png" alt="" />
            </div>
        </div>
    )
}