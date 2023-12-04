import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import constants from "../../constants/Constants";
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/actions'

const FavouriteHeader = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favoritesData = useSelector(state => state.favorite.favorites);
  const isFavourite = favoritesData.some(item => item?.id === props.data.id);

  const handleFavourite = () => {
    if (!isFavourite) {
      // Add to favorites
      dispatch(addToFavorites(props.data));
    } else {
      // Remove from favorites
      dispatch(removeFromFavorites(props.data.id));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      {props.showLeftIcon !== false ? <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('HomeScreen') }}>
          <constants.svg.backIcon />
        </TouchableOpacity> :
          <View style={{ height: 1, }} />}
        <TouchableOpacity style={styles.button} onPress={handleFavourite}>
          {!isFavourite ?
            <constants.svg.inactiveHeart height={15} width={20} />
            :
            <constants.svg.activeHeart height={23} width={21} />
          }
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%'
  },
  button: {
    backgroundColor: constants.colors.buttonColor,
    height: 34,
    width: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  }
});

export default FavouriteHeader;
