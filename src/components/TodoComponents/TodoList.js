// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, {Component} from 'react';
import Todo from './Todo'

class TodoList extends Component {
    

  render() {
      const {todos, toggleTodo} = this.props;
    return (
      <div>
        <Todo todos={todos} toggleTodo={toggleTodo}/>
      </div>
    );
  }
}

export default TodoList;