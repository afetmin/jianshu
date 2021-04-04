import React, { Fragment } from 'react'
import { Button, Input, List } from 'antd'
import store from '../../store'
class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleChange = this.handleChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    store.subscribe(this.handleStoreChange) //订阅更新数据的方法
  }

  render() {
    return (
      <Fragment>
        <Input
          value={this.state.inputValue}
          placeholder="todo something"
          style={{ width: "200px", margin: "0 20px" }}
          onChange={this.handleChange}
        ></Input>
        <Button
          style={{ marginTop: '10px' }}
          type="primary"
          onClick={this.handleBtnClick}
        >提交</Button>
        <List
          style={{ width: "200px", margin: "10px 20px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => <List.Item onClick={() => this.handleItemDel(index)}>{item}</List.Item>}
        ></List>
      </Fragment>

    )
  }

  handleItemDel(index) {
    const action = {
      type: "del_item",
      index
    }
    store.dispatch(action)
  }
  handleBtnClick() {
    const action = {
      type: "add_item"
    }
    store.dispatch(action)
  }
  handleChange(event) {
    const action = {
      type: 'change_input_value',
      inputValue: event.target.value
    }
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
}

export default Todo