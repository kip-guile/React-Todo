import React, {Component} from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import uuid from 'uuid';

const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: true
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
        todoItems: todoList,
        searchItem: ""
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

  toggleTodo = (todo) => {
    this.setState({todoItems: this.state.todoItems.map(item =>
      item.task === todo.task ? {...item, completed: !item.completed} : item
    )})
  }

  // clearCompleted = () => this.state.todoItems.filter(item => item.completed === true ? this.setState({todoItems: this.state.todoItems.map()}) :);

  clearCompleted = () => this.setState({todoItems: this.state.todoItems.filter(item => item.completed === false)})

  updateSearchValue = (event) => {
    this.setState({
      searchItem: event.target.value
    });
    this.setState({todoItems: this.state.todoItems.filter(item => item.task.toLowerCase().includes(this.state.searchItem.toLowerCase()))})
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoForm 
        value={this.state.newItemText} 
        onChange={this.updateTextValue} 
        createNewTodo={this.createNewTodo} 
        clearCompleted={this.clearCompleted}
        searchValue={this.state.searchItem}
        searchChange={this.updateSearchValue}
        />

        <TodoList 
        todos={this.state.todoItems} 
        toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}

export default App;
