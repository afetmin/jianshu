import actionTypes from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}
const reducer = (state = defaultState, action) => {

    if (action.type === actionTypes.CHANGE_INPUT_VALUE)  {
      const newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.inputValue
      return newState
    }
    if(action.type === actionTypes.ADD_ITEM) {
      const newState = JSON.parse(JSON.stringify(state))
      if (newState.inputValue) {
        newState.list.push(newState.inputValue)
        newState.inputValue = ""
      }
      return newState
    }

    if(action.type === actionTypes.DELETE_ITEM) {
      const newState = JSON.parse(JSON.stringify(state))
      newState.list.splice(action.index, 1)
      return newState
    }
    return state

}

export default reducer