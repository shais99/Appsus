import noteService from '../../services/notes/noteService.js'

export default class TodoList extends React.Component {
    state = {
        todo: {
            txt: '',
        }
    }
    onTodoChecked = (todo) => {
        noteService.todoChecked(todo)
        this.props.loadNotes()
    }
    onChangeFunc = (ev, todoId) => {
        let value = ev.target.innerText
        this.props.updateTodo(this.props.todo, todoId, value)
    }
    handleInput = ({ target }) => {
        const value = target.value

        this.setState(prevState => {
            return {
                todo: {
                    ...prevState.todo,
                    txt: value
                }
            }
        })
    }
    onAddTodo = (ev) => {
        ev.preventDefault()
        if (!this.state.todo.txt) return
        noteService.addTodo(this.state.todo.txt, this.props.todo)
        this.setState({ todo: { txt: '' } })
        this.props.loadNotes()
    }
    render() {
        const { onAddTodo, onTodoChecked, onChangeFunc, handleInput } = this
        return (
            <React.Fragment>
                {this.props.todo.info.todos.map(todo => {
                    return <p key={todo.id}>
                        <input type="checkbox" onChange={() => onTodoChecked(todo)} checked={todo.isChecked} />
                        &raquo; <span contentEditable="true" suppressContentEditableWarning={true} onInput={(event => onChangeFunc(event, todo.id))} className={`todo-content ${todo.isChecked ? 'todo-checked' : ''}`}>{todo.txt}</span>
                    </p>
                })}
                <form onSubmit={onAddTodo}>
                    <input type="text" className="add-todo-input" placeholder="What are you doing?" value={this.state.todo.txt} onChange={handleInput} />
                </form>
            </React.Fragment>
        )
    }
}