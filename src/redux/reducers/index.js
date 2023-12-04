import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import BottomTabReducer from './BottomTabReducer';
import FavoriteReducer from './FavoriteReducer';
import OrderHistoryReducer from './OrderHistoryReducer';

const rootReducer = combineReducers({
  cart: CartReducer,
  tab: BottomTabReducer,
  favorite: FavoriteReducer, 
  orderHistory: OrderHistoryReducer,
});

export default rootReducer;
