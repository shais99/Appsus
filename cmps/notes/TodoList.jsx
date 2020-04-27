import noteService from '../../services/notes/noteService.js'

export default class TodoList extends React.Component {
    onTodoChecked = (todo) => {
        noteService.todoChecked(todo)
        this.props.loadNotes()
    }
    onChangeFunc = (ev, todoId) => {
        let value = ev.target.innerText
        this.props.updateTodo(this.props.todo, todoId, value)
    }
    render() {
        return (
            <React.Fragment>
                {this.props.todo.info.todos.map(todo => {
                    return <p key={todo.id}>
                        <input type="checkbox" onChange={() => this.onTodoChecked(todo)} checked={todo.isChecked} />
                        &raquo; <span contentEditable="true" suppressContentEditableWarning={true} onInput={(event => this.onChangeFunc(event, todo.id))} className="todo-content">{todo.txt}</span>
                    </p>
                })}
            </React.Fragment>
        )
    }
}