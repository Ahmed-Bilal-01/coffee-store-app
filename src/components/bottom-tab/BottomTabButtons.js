import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";


  const BottomTabButtons = (props) => {
    const ActiveIcon = props.activeIcon;
    const InActiveIcon = props.inactiveIcon;
  
    return (
      <TouchableOpacity style={styles.button} onPress={() => props.onPress(props.screenName)}>
        <View>
          {props.isPressed ? <ActiveIcon height={25} width={25} /> : <InActiveIcon height={25} width={25} />}
        </View>
      </TouchableOpacity>
    );
  };


const styles = StyleSheet.create({
  button: {
    height: 40,
    width: "22%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BottomTabButtons;
