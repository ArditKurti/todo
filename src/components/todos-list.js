import React from "react";
import TodosListHeader from "./todos-list-header";
import TodosListItem from "./todos-list-item";

export default class TodosList extends React.Component {
    renderItems () {
        return this.props.todos.map((c, index) => {
            return (
                <TodosListItem
                    key={index} //is required by react
                    {...c}
                    id={index}
                    toggleTask={this.props.toggleTask}
                    editTask={this.props.editTask}
                    deleteTask={this.props.deleteTask}
                />
            )
        });
    }
    render () {
        if (!this.props.todos.length) {
          //When no todos show a message
            return <p className="tutorial">Create your first todo! :)</p>;
        }
        return (
            <table>
                // {/* <TodosListHeader /> */}
                <tbody>
                //Render Items
                    {this.renderItems()}
                </tbody>
            </table>
        )
    }
}
