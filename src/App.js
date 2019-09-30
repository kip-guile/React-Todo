import React, {Component} from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodooList from './components/TodoComponents/TodoList';
import uuid from 'uuid';

const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super (props);
      this.state = {
        newItemText: "",
        todoItems: todoList
      }
  }

  updateTextValue = (event) => {
    this.setState({
      newItemText: event.target.value
    });
  }

  createNewTodo = () => {
    if(!this.state.todoItems.find(todo => todo.task === this.state.newItemText)){
      this.setState({todoItems: [...this.state.todoItems, {task: this.state.newItemText, id: uuid(), completed: false}]});
      this.setState({newItemText: ""})
    }
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm value={this.state.newItemText} onChange={this.updateTextValue} createNewTodo={this.createNewTodo}/>
        <TodooList todos={this.state.todoItems}/>
      </div>
    );
  }
}

export default App;
