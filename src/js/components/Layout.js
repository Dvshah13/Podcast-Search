import React from "react";
import ToDoList from "./ToDoList";
import ResultList from "./ResultList";

export default class Layout extends React.Component {
    render() {
        var displayShowResults = true;
        let items = <li>Empty List</li>;
        if(displayShowResults){
            items = <li>Showing Show Results</li>
        }
        return (
        <div>
            <div id="ToDo">
                <ToDoList />
            </div>
            <div id="list">
                <ResultList items={items} />
            </div>
        </div>
        );
  }
}
