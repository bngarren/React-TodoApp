import React from "react";

//components
import TodoItem from "./TodoItem"

class TodosList extends React.Component {

    render(){
        return (

            <div>
                {this.props.todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} handleCheckboxClicked={this.props.handleCheckboxClicked} handleTodoDelete={this.props.handleTodoDelete}/>
                ))}
            </div>

        )
    }

}

export default TodosList