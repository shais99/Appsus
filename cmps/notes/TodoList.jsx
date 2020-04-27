import noteService from '../../services/notes/noteService.js'

export default class TodoList extends React.Component {
    onTodoChecked = (todo) => {
        noteService.todoChecked(todo)
        this.props.loadNotes()
    }
    render() {
        return (
            <React.Fragment>
                {this.props.todo.info.todos.map(todo => {
                    return <p key={todo.id}>
                        <input type="checkbox" onChange={() => this.onTodoChecked(todo)} checked={todo.isChecked} /><span className="todo-content">&raquo; {todo.txt}</span>
                    </p>
                })}
            </React.Fragment>
        )
    }
}