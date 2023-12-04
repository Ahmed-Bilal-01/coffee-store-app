import React from "react";
import { View, ImageBackground, StyleSheet, Text, ScrollView } from "react-native";
import constants from "../../constants/Constants";
import { Image } from "react-native-svg";
import TransparentView from "../common/TransparentView";
import Description from "../common/Description";
import FavouriteHeader from "../common/FavouriteHeader";

const FavouritesCard=(props)=>{

  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={{uri: props.image}}
        resizeMode={'stretch'} style={styles.image}>
          <FavouriteHeader data={props} showLeftIcon={false}/>
          <TransparentView
              headingText={props.headingText}
              descriptionText={props.descriptionText}
              leftSmallButtonText={props.leftSmallButtonText}
              rightSmallButtonText={props.rightSmallButtonText}
              leftSmallButtonIcon={props.leftSmallButtonIcon}
              rightSmallButtonIcon={props.rightSmallButtonIcon}
              qualityText={props.qualityText}
              rating={props.rating}
              totalRatings={props.totalRatings}
            />
        </ImageBackground>
      </View>
        <View style={styles.descriptionBox}>
            <Description descriptionText={props.description}/>
        </View>
    </View>
)
};
const styles = StyleSheet.create({
    container:{
      width:'90%',
      borderRadius:20,
      overflow:'hidden',
      paddingBottom:20,
      marginBottom:'5%',
      alignSelf:'center',
      backgroundColor:constants.colors.darkGray
    },
    imageContainer:{
      height: 400,
    },
    image:{
        height:'100%',
        width:'100%',
    },
    descriptionBox:{
       paddingHorizontal:'5%',
       paddingTop:'3%',
       overflow:'hidden',
    }
    });
export default FavouritesCard;