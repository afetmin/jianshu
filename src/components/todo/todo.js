import React, { Fragment } from 'react'
import { Button, Input, List } from 'antd'
import { connect } from 'react-redux'
import { getBtnAction, getItemDeleteAction, getInputChangeAction } from '../../store/actionCreator'
// import axios from 'axios'
const Todo = (props) => {
  const { handleChange, handleBtnClick, handleItemDel, inputValue, list } = props
  return (
    <Fragment>
      <Input
        value={inputValue}
        placeholder="todo something"
        style={{ width: "200px", margin: "0 20px" }}
        onChange={handleChange}
      ></Input>
      <Button
        style={{ marginTop: '10px' }}
        type="primary"
        onClick={handleBtnClick}
      >提交</Button>
      <List
        style={{ width: "200px", margin: "10px 20px" }}
        bordered
        dataSource={list}
        renderItem={(item, index) => <List.Item onClick={() => handleItemDel(index)}>{item}</List.Item>}
      ></List>
    </Fragment>
  )
}


const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(e) {
      dispatch(getInputChangeAction(e.target.value))
    },
    handleBtnClick() {
      dispatch(getBtnAction())
    },
    handleItemDel(index) {
      dispatch(getItemDeleteAction(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)