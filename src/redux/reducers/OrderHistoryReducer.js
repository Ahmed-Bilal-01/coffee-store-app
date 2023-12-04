const initialState = {
    items: [], 
  };
  
  const OrderHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_ORDER_HISTORY':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default OrderHistoryReducer;
  