import actionTypes from './actionTypes'

export const getInputChangeAction = (value) => ({
  type: actionTypes.CHANGE_INPUT_VALUE,
  inputValue: value
})

export const getBtnAction = () => ({
  type: actionTypes.ADD_ITEM
})

export const getItemDeleteAction = (index) => ({
  type: actionTypes.DELETE_ITEM,
  index
})