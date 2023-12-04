const initialTabState = {
    selectedScreen: 'HomeScreen', 
  };
  
  const BottomTabReducer = (state = initialTabState, action) => {
    switch (action.type) {
      case 'CHANGE_SELECTED_SCREEN':
        return {
          ...state,
          selectedScreen: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default BottomTabReducer;
  