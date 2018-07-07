import {text} from "../markupKey.js"
//var text = require("../markupKey");

const defaultState = {
  showKey: false,
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case "TOGGLE_KEY":
      let showKey = !state.showKey;
      return { ...state, showKey };
    default:
      return state;
  }
};
console.log(reducers);
export { reducers };
