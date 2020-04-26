export default function TodoList(props) {
    return (
        <React.Fragment>
            {props.todo.info.todos.map(todo => <p key={todo.id}>&raquo; {todo.txt}</p>)}
        </React.Fragment>
    )
}