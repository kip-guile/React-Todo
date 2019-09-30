// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


// import React, {Component} from 'react';

// class TodoList extends Component {
//     const {todolist} = this.props;

// render() {
//     return (
//         <div>
//             {todolist.map(item => {
//                 <div key={item.id}>{item.description}</div>
//             })}
//         </div>
//     );
//     }
// }

// export default TodoList;

import React, {Component} from 'react';

class TodoList extends Component {
    

  render() {
      const {todos} = this.props;
    return (
      <div>
        {todos.map(todo => (<div key={todo.id}>
            {todo.task}
        </div>))}
      </div>
    );
  }
}

export default TodoList;