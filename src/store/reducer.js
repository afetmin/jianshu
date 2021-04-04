const defaultState = {
  inputValue: '',
  list: []
}
const reducer = (state = defaultState, actions) => {

    if (actions.type === "change_input_value")  {
      const newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = actions.inputValue
      return newState
    }
    if(actions.type === "add_item") {
      const newState = JSON.parse(JSON.stringify(state))
      newState.list.push(newState.inputValue)
      newState.inputValue = ""
      return newState
    }
    return state

}

export default reducer