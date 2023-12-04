import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import constants from "../constants/Constants";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectedScreen } from "../redux/actions";
import BottomTabButtons from "../components/bottom-tab/BottomTabButtons";

const BottomTab = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const selectedScreen = useSelector((state) => state.tab.selectedScreen);

  const handlePress = (screenName) => {
    if (selectedScreen !== screenName) {
      dispatch(changeSelectedScreen(screenName));
      navigation.navigate(screenName);
    }
  };
  return (
    <View
      style={
        selectedScreen === "FavoriteScreen"
          ? [styles.mainContainer, { backgroundColor: "rgba(255, 255, 255, 0.65)" }]
          : styles.mainContainer
      }
    >
      <BottomTabButtons
        screenName={"HomeScreen"}
        activeIcon={constants.svg.activeHome}
        inactiveIcon={constants.svg.inactiveHome}
        onPress={handlePress}
        isPressed={selectedScreen === "HomeScreen"}
      />
      <BottomTabButtons
        screenName={"CartScreen"}
        activeIcon={constants.svg.activeCart}
        inactiveIcon={constants.svg.inactiveCart}
        onPress={handlePress}
        isPressed={selectedScreen === "CartScreen"}
      />
      <BottomTabButtons
        screenName={"FavoriteScreen"}
        activeIcon={constants.svg.activeFavorites}
        inactiveIcon={constants.svg.inactiveFavorites}
        onPress={handlePress}
        isPressed={selectedScreen === "FavoriteScreen"}
      />
      <BottomTabButtons
        screenName={"OrderHistoryScreen"}
        activeIcon={constants.svg.activeNotification}
        inactiveIcon={constants.svg.inactiveNotification}
        onPress={handlePress}
        isPressed={selectedScreen === "OrderHistoryScreen"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 70,
    backgroundColor: constants.colors.background,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "6%",
  },
});

export default BottomTab;
