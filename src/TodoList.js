import React, {Component, Fragment} from 'react'

class TodoList extends Component{
  constructor(props){
    super(props)
    //组件的状态
    this.state = {
      inputValue: '',
      list: []
    }
  }
  render(){
    return(
        <Fragment>
          <input
              value={this.state.inputValue}
              onChange={this.handleInputChange.bind(this)}
          />
          <button
              onClick={this.handleButtonClick.bind(this)}
          >提交</button>
          <ul>
            <li>学习英语</li>
            <li>学习React</li>
          </ul>
        </Fragment>
    )
  }
  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
    console.log(this.state.inputValue)
  }
  handleButtonClick(){

  }
}

export default TodoList;
