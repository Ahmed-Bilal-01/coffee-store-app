export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: 'REMOVE_FROM_CART',
  payload: itemId,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const updateCart = (updatedItems) => ({
  type: 'UPDATE_CART',
  payload: updatedItems,
});

// Bottom Tab Actions

export const changeSelectedScreen = (screenName) => ({
  type: 'CHANGE_SELECTED_SCREEN',
  payload: screenName,
});

// Favorite.js

export const addToFavorites = (item) => ({
  type: 'ADD_TO_FAVORITES',
  payload: item,
});

export const removeFromFavorites = (itemId) => ({
  type: 'REMOVE_FROM_FAVORITES',
  payload: itemId,
});

// Order History
export const addToOrderHistory = (item) => ({
  type: 'ADD_TO_ORDER_HISTORY',
  payload: item,
});