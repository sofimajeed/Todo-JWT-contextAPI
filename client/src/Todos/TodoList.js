import React from 'react';
import Todo from "./Todo";
import AddTodoForm from "./AddTodoForm"
import { withContext } from "../AppContext";

function TodoList(props) {
    const todos = props.todos.map(todo => {
        return (
            <Todo 
                key={todo._id}
                todo={todo}
                editTodo={props.editTodo}
                deleteTodo={props.deleteTodo}
            />
        )
    })

    return (
        <main className='todos-list'>
            <AddTodoForm addTodo={props.addTodo} />
            {todos}
        </main>
    )
}

export default withContext(TodoList);
