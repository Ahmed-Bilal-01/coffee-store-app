import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import QualityButton from "../details-screen/QualityButton";
import constants from "../../constants/Constants";
import MultipleCardSizeCounter from "./MultipleCardSizeCounter";

const MultipleOrderedSizeCard = (props) => {
  const [selectedSizes, setSelectedSizes] = useState([]);

  useEffect(() => {
    const sizes = [];
    if (props.data.smallSizeQuantity > 0) {
      sizes.push({
        label: props.data.smallSizeLabel,
        quantity: props.data.smallSizeQuantity,
        name: 'smallSizeQuantity',
        price: props.data.smallSizePrice,
      });
    }
    if (props.data.mediumSizeQuantity > 0) {
      sizes.push({
        label: props.data.mediumSizeLabel,
        quantity: props.data.mediumSizeQuantity,
        name: 'mediumSizeQuantity',
        price: props.data.mediumSizePrice,
      });
    }
    if (props.data.largeSizeQuantity > 0) {
      sizes.push({
        label: props.data.largeSizeLabel,
        quantity: props.data.largeSizeQuantity,
        name: 'largeSizeQuantity',
        price: props.data.largeSizePrice,
      });
    }
    setSelectedSizes(sizes);
  }, [props.data]);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageAndDescriptionBox}>
        <Image source={{uri: props.data.image}} style={styles.leftContainer} resizeMode={'stretch'} />
        <View style={styles.rightContainer}>
          <Text style={styles.headingText}>{props.data.heading}</Text>
          <Text style={styles.descriptionText}>{props.data.description}</Text>
          <View style={{ marginTop: 15 }}>
            <QualityButton label={'Medium Roasted'} />
          </View>
        </View>
      </View>

      {selectedSizes.map((size, index) => (
        <MultipleCardSizeCounter
          index={index}
          label={size.label}
          price={size.price}
          id={props.data.id}
          selectedQuantity={size.quantity}
          selectedSizeName={size.name} />

      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    paddingHorizontal: '3%',
    paddingVertical: '4%',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#262B33',
    marginVertical: 10
  },
  imageAndDescriptionBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  leftContainer: {
    width: '35%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  rightContainer: {
    width: '65%',
    paddingVertical: '1%',
    paddingHorizontal: '6%',
    paddingVertical: '2%'
  },
  headingText: {
    color: constants.colors.white,
    fontSize: 15,
    fontWeight: '600',
    fontFamily  : 'Poppins-Regular',
  },
  descriptionText: {
    color: constants.colors.lightGray,
    fontSize: 12,
    fontFamily  : 'Poppins-Regular',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: '1.5%',
    justifyContent: 'space-between'
  }
});

export default MultipleOrderedSizeCard;
