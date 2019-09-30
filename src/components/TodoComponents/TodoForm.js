import React, {Component} from 'react';

class TodoForm extends Component {
    

  render() {
      const {value, onChange} = this.props;
    return (
      <div>
        <input value={value} onChange={onChange}/>
      </div>
    );
  }
}

export default TodoForm;