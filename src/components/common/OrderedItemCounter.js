import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import constants from '../../constants/Constants';
import { useDispatch, useSelector } from "react-redux";

const OrderedItemCounter = (props) => {
  const [orderCounter, setOrderCounter] = useState(props.selectedQuantity);
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const handleDecrement = () => {
    setOrderCounter(orderCounter - 1);
    const existingCartItem = cartData.items.find(item => item.id === props.id);

    if (existingCartItem) {
      const sizeName = props.selectedSizeName;
      const updatedItem = {
        ...existingCartItem,
        [sizeName]: existingCartItem[sizeName] - 1,
      };

      const totalQuantity = updatedItem['smallSizeQuantity'] + updatedItem['mediumSizeQuantity'] + updatedItem['largeSizeQuantity'];

      if (totalQuantity === 0) {
        dispatch({
          type: 'REMOVE_FROM_CART',
          payload: props.id,
        });
      } else {
        dispatch({
          type: 'UPDATE_CART',
          payload: [updatedItem],
        });
      }
    }
  };

  const handleIncrement = () => {
    setOrderCounter(orderCounter + 1);
    const existingCartItem = cartData.items.find(item => item.id === props.id);

    if (existingCartItem) {
      const sizeName = props.selectedSizeName;
      const updatedItem = {
        ...existingCartItem,
        [sizeName]: existingCartItem[sizeName] + 1,
      };

      dispatch({
        type: 'UPDATE_CART',
        payload: [updatedItem],
      });
    }
  };

  useEffect(() => {
    setOrderCounter(props.selectedQuantity)
  }, [props.selectedQuantity])

  return (
    <View style={[props.customStyle, { justifyContent: 'space-between' }]}>
      <View
        style={
          { flexDirection: 'row', justifyContent: 'space-between' }
        }>
        <TouchableOpacity onPress={handleDecrement} style={styles.button}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>-</Text>
        </TouchableOpacity>
        <View style={styles.orderQuantityText}>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: '700' }}>
            {orderCounter}
          </Text>
        </View>
        <TouchableOpacity onPress={handleIncrement} style={styles.button}>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: '700' }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: constants.colors.lightPeach,
    height: 34,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  orderQuantityText: {
    width: 50,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12,
    backgroundColor: constants.colors.darkGray,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: constants.colors.lightPeach
  }
})

export default OrderedItemCounter;
