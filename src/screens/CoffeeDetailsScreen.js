import React, { useEffect, useState } from "react";
import { View, ImageBackground, StyleSheet, Text, ScrollView } from "react-native";
import constants from "../constants/Constants";
import FavouriteHeader from "../components/common/FavouriteHeader";
import TransparentView from "../components/common/TransparentView";
import Description from "../components/common/Description";
import SizeView from "../components/details-screen/SizeView";
import Footer from "../components/common/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../redux/actions';
import { useRoute } from '@react-navigation/native';


const CofeeDetailsScreen = () => {
  const route = useRoute();
  const data = route.params.data;
  const id = data.id;
  const screenImage = data.image;
  const heading = data.name;
  const description = data.description;
  const qualityText = data.qualityText;
  const characteristics = data.characteristics
  const prices = {
    small: 3.2,
    medium: 3.7,
    large: 4.0,
  };
  const quantity = {
    small: 1,
    medium: 0,
    large: 0,
  };
  const [itemId, setItemId] = useState(id);
  const [itemPrice, setItemPrice] = useState(prices.small);
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [itemHeading, setItemHeading] = useState(heading);
  const [itemDescription, setItemDescription] = useState(description);
  const [itemCharacteristics, setItemCharacteristics] = useState(characteristics);
  const [itemQualityText, setItemQualityText] = useState(qualityText);
  const [itemSize, setItemSize] = useState('small');

  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  const handlePrice = (size, label) => {
    setItemPrice(prices[size]);
    setItemSize(size)
    setItemQuantity(() => ({
      medium: size === 'medium' ? 1 : 0,
      large: size === 'large' ? 1 : 0,
      small: size === 'medium' || size === 'large' ? 0 : 1,
    }));
  };
  const storeData = () => {
    const existingCartItem = cartData.items.find(item => item.id === itemId);

    if (existingCartItem) {
      const updatedItems = cartData.items.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            smallSizeQuantity: itemQuantity.small + item.smallSizeQuantity,
            mediumSizeQuantity: itemQuantity.medium + item.mediumSizeQuantity,
            largeSizeQuantity: itemQuantity.large + item.largeSizeQuantity,
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
          id: itemId,
          image: screenImage,
          heading: itemHeading,
          description: itemCharacteristics,
          qualityText: itemQualityText,
          smallSizePrice: prices.small,
          mediumSizePrice: prices.medium,
          largeSizePrice: prices.large,
          smallSizeLabel: 'S',
          mediumSizeLabel: 'M',
          largeSizeLabel: 'L',
          smallSizeQuantity: itemQuantity.small,
          mediumSizeQuantity: itemQuantity.medium,
          largeSizeQuantity: itemQuantity.large,
        })
      );
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{ uri: screenImage }}
            resizeMode={'stretch'}
            style={styles.image}
          >
            <FavouriteHeader data={data}/>
            <TransparentView
              headingText={itemHeading}
              descriptionText={itemCharacteristics}
              leftSmallButtonText={'Coffee'}
              rightSmallButtonText={'Milk'}
              leftSmallButtonIcon={constants.svg.coffeeLogo}
              rightSmallButtonIcon={constants.svg.milkLogo}
              qualityText={qualityText}
              rating={'4.7'}
              totalRatings={'6,234'}
            />
          </ImageBackground>
        </View>
        <View style={styles.body}>
          <Description descriptionText={itemDescription} />
          <SizeView
            buttonOnelabel={'S'}
            buttonTwolabel={'M'}
            buttonThreelabel={'L'}
            sizePrice={handlePrice}
          />
        </View>
      </ScrollView>
      <View>
        <Footer
          price={itemPrice} buttonLabel={'Add to Cart'} functionOnPress={storeData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%'
  },
  scrollContainer: {
    backgroundColor: constants.colors.background,
    height: '80%',
  },
  imageContainer: {
    height: 450,
    width: '100%',
  },
  image: {
    height: '100%'
  },
  transparentContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 0,
    height: 140,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%',
    paddingTop: 15
  },
  body: {
    paddingHorizontal: '5%',
    marginTop: '4%',
  },
});
export default CofeeDetailsScreen;
