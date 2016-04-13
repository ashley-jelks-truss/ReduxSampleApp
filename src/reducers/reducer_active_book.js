//State param here is not referreing to the application state, only the state this reducer is responsible for maintaining
export default function(state=null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
      //if the action type selected is BOOK_SELECTED return that action's payload, as defined in the action function selectBook
  }
  return state
}
