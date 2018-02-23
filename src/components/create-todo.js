import React from "react";

export default class CreateTodo extends React.Component {
    render () {
        return (
          //todo form
            <form onSubmit={this.onSubmit.bind(this)} className="create-todo-form">
                <input type="text" placeholder="Task" ref="taskMessage" autoFocus/>
                <button>Add</button>
            </form>
        );
    }
    onSubmit (e) {
      //calls create task function and set a value
        this.props.createTask(this.refs.taskMessage.value);
        //upon creation level the value empty on frontend
        this.refs.taskMessage.value = "";
        // on submit stops page from reloading
        e.preventDefault();
    }
}
