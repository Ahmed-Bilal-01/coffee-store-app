import React,{useEffect} from "react";
import { View, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';
import constants from "../../constants/Constants";
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions";

const CoffeeDetailsCard = (props) => {
      const navigation= useNavigation()
      const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const storeData = () => {
    const existingCartItem = cartData.items.find(item => item.id === props.data.id);

    if (existingCartItem) {
      const updatedItems = cartData.items.map(item => {
        if (item.id === props.data.id) {
          return {
            ...item,
            smallSizeQuantity: 1 + item.smallSizeQuantity,
          };
        }
        return item;
      });
      dispatch({
        type: 'UPDATE_CART',
        payload: updatedItems,
      });
    } else {
      dispatch(
        addToCart({
          id: props.data.id,
          image: props.data.image,
          heading: props.data.name,
          description: props.data.characteristics,
          qualityText: props.data.qualityText,
          smallSizePrice: props.data.smallPrice,
          mediumSizePrice: props.data.mediumPrice,
          largeSizePrice: props.data.largePrice,
          smallSizeLabel: 'S',
          mediumSizeLabel: 'M',
          largeSizeLabel: 'L',
          smallSizeQuantity: 1,
          mediumSizeQuantity: 0,
          largeSizeQuantity: 0,
        })
      );
    }
  };
    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate('CofeeDetailsScreen',{data:props.data})} >
                <View style={styles.image}>
                    <Image source={{uri:props.data.image}} style={{height:130, width:130}} />
                    <View style={styles.ratingContainer}>
                        <constants.svg.star />
                        <Text style={styles.ratingText}>{props.data.rating}</Text>
                    </View>
                </View>
                <Text style={styles.categoryText}>{props.data.name}</Text>
                <Text style={styles.characteristicsText}>{props.data.characteristics}</Text>

            </TouchableOpacity>
            <View style={styles.priceContainer}>
                <Text style={styles.dollarSign}>$</Text>
                <Text style={styles.price}>{props.data.smallPrice}</Text>
                <TouchableOpacity style={styles.plusButton} onPress={storeData}>
                    <constants.svg.plus height={12} />
                </TouchableOpacity>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    cardContainer: {
        paddingTop: 3,
        backgroundColor: constants.colors.darkGray,
        width: 150,
        borderRadius: 25,
        overflow: 'hidden',
        paddingBottom: 22,
        marginRight: 15
    },
    image: {
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 32,
        overflow: 'hidden',
    },
    ratingContainer: {
        height: 26,
        width: 55,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        right: 0,
        borderBottomLeftRadius: 27,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    ratingText: {
        color: constants.colors.white,
        fontSize: 11,
        marginLeft: 3
    },
    categoryText: {
        color: constants.colors.white,
        marginHorizontal: 12,
        marginTop: 12,
        fontSize: 16
    },
    characteristicsText: {
        color: constants.colors.white,
        marginHorizontal: 12,
        marginTop: 8,
        fontSize: 11
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dollarSign: {
        color: constants.colors.lightPeach,
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 12,
        marginTop: 12,
    },
    price: {
        color: constants.colors.white,
        fontSize: 18,
        fontWeight: '700',
        marginHorizontal: 8,
        marginTop: 12,
        width: 60
    },
    plusButton: {
        backgroundColor: constants.colors.lightPeach,
        height: 34,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        position: 'absolute',
        right: 14,
        top: 7
    }
});
export default CoffeeDetailsCard