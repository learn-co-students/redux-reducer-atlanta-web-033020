export function manageFriends(state = {
  friends: []
}, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      const friendIndex = state.friends.findIndex(friend => friend.id === action.id)
      console.log(friendIndex)
      console.log(state.friends)
      return { ...state, friends: state.friends.slice(0, friendIndex).concat(state.friends.slice(friendIndex + 1, state.friends.length)) };
    default:
      return state;
  }
}
