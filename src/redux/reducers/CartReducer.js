const initialState = {
  items: [], 
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };

      case 'UPDATE_CART':
        return {
          ...state,
          items: state.items.map(item => {
            const updatedItem = action.payload.find(updated => updated.id === item.id);
            return updatedItem || item;
          }),
        };
      
      

    default:
      return state;
  }
};

export default CartReducer;
