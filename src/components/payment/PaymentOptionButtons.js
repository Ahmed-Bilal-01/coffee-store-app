import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import constants from "../../constants/Constants";

const PaymentoptionButtons=(props)=>{
    const Icon= props.icon
return(
    <TouchableOpacity style={styles.button}>
         <LinearGradient
            colors={['#262B33', '#0C0F14']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1.7, y: 0 }}
            style={styles.button}
        >
        <View style={styles.rowContainer}>
         <View style={styles.iconAndLabelBox}>
           {props.icon &&
            <Icon height={25} width={25}/>
            }
           <Text style={styles.labelText}>{props.label}</Text>
         </View>
         <Text style={{paddingHorizontal:2, color:'white'}}>{props.balance}</Text>
        </View>
        </LinearGradient>
    </TouchableOpacity>
    
)
};
const styles = StyleSheet.create({
    button: {
     height:50,
     width:'100%',
     borderRadius:30,
     alignItems:'center',
     justifyContent:'center',
     marginVertical:8
    },
    rowContainer:{
     flexDirection:'row',
     paddingHorizontal: 15,
     alignItems:'center',
     justifyContent:'space-between',
     width:'100%'
    },
     iconAndLabelBox:{
        flexDirection:'row',
        alignItems:'center',
     },
     labelText:{
        color: constants.colors.white,
        fontSize:15,
        fontWeight:'500',
        marginLeft:10
     }
})
export default PaymentoptionButtons;