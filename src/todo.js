const Todo = ({todolist, deleteTODO}) => {

    const todoList = todolist.length ? (
        todolist.map(todo_item => {
            return (
            <div className="collection-item" key={todo_item.id}>
                <span onClick={() => {deleteTODO(todo_item.id)}}>{todo_item.task}</span>
            </div>
            )
        }
    )) : (
        <p className="center">You have No Todos Left!! Yipeey</p>
    )

    return (
        <div className="todo collection">
            {todoList}
        </div>
    );
}
 
export default Todo;