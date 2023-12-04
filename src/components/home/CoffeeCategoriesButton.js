// CoffeeCategoriesButton.js
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import constants from "../../constants/Constants";

const CoffeeCategoriesButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.pressedOption}
    >
      <Text style={[styles.label, props.selected && { color: constants.colors.lightPeach }]}>
        {props.label}
      </Text>
      {props.selected && (
        <View style={styles.activeCircle} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 20,
  },
  label: {
    color: constants.colors.gray,
    fontSize: 15,
    fontWeight: '700',
  },
  activeCircle: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: constants.colors.lightPeach,
    alignSelf: 'center',
    marginTop: 7,
  },
});

export default CoffeeCategoriesButton;
