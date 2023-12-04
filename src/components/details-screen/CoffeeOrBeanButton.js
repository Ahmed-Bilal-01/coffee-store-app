import React from "react";
import { View, StyleSheet, Text } from "react-native";
import constants from "../../constants/Constants";

const CoffeeOrBeanButton =(props)=>{
    const Icon= props.icon;
    return(
        <View style={styles.container}>
          <Icon height={27} width={27}/>
          <Text style={styles.labelText}>{props.label}</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
     alignItems:'center',
     justifyContent:'center',
     height: 50,
     width:50,
     backgroundColor: constants.colors.darkGray,
     borderRadius:8,
    },
    labelText:{
    color:constants.colors.lightGray,
    fontSize:11
    }
  });
export default CoffeeOrBeanButton;