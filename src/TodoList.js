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
            {
              this.state.list.map( (item,index)=>{
                return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
              } )
            }
          </ul>
        </Fragment>
    )
  }
  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }
  handleButtonClick(){
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    })
  }
  handleItemClick(index){
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list: list
    })
  }
}

export default TodoList;
