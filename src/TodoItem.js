import React , {Component} from 'react'

class TodoItem extends Component{
  render() {
    return (
        <div>{this.props.content}</div>
    );
  }
}

export default TodoItem;
