import TodoList from './TodoList.jsx'

export default class NoteTodos extends React.Component {

    render() {
        const { todo, loadNotes, updateTodo } = this.props

        return (
            <React.Fragment>
                <TodoList todo={todo} loadNotes={loadNotes} updateTodo={updateTodo}  />
            </React.Fragment>
        )
    }
}