import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'
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
          {
            /*
            下面是一个input框
            ss
            */
          }
          <label htmlFor="insertArea">输入内容:</label>
          <input
              id="insertArea"
              className="input"
              value={this.state.inputValue}
              onChange={this.handleInputChange.bind(this)}
          />
          <button
              onClick={this.handleButtonClick.bind(this)}
          >提交</button>
          <ul>
            {
              this.state.list.map( (item,index)=>{
                return (
                    <div key={index}>
                      <TodoItem  content={item} />
                    </div>
                )
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
