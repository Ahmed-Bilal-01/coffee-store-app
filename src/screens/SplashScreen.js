import React,{useEffect} from "react";
import { View, ImageBackground, StyleSheet, Text, ScrollView } from "react-native";
import constants from "../constants/Constants";
import {useNavigation} from '@react-navigation/native';

const SplashScreen =()=>{
    const navigation= useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.replace('HomeScreen');
        }, 2000);
        return () => clearTimeout(timer); 
      }, [navigation]);
    return(
        <View style={styles.mainContainer}>
         <constants.svg.splashIcon/>
        </View>
    )
};
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: constants.colors.background,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})
export default SplashScreen;