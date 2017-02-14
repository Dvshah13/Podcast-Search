import React from "react";
import ToDoList from "./ToDoList";

export default class ResultList extends React.Component {
    render() {
    return (
      <ul>
        {this.props.items}
      </ul>
    );
  }
}
