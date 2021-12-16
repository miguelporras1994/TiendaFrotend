const reducer = (state, action) => {
  console.log(action)
  console.log(state)
  switch (action.type) {
    case 'Save_Search':
      return {
        ...state,
        result : action.payload,
      };
    // case 'DELETE_FAVORITE':
    //   return {
    //     ...state,
    //     myList: state.myList.filter(items => items.id !== action.payload),
    //   };
    
    // case 'GET_VIDEO_SOURCE':
    //   return {
    //     ...state,
    //     playing: state.trends.find(item => item.id === Number(action.payload)) ||
    //     state.originals.find(item => item.id === Number(action.payload))
    //     || [],
    //   };
    default:
      return state;
  }

};

export default reducer;
