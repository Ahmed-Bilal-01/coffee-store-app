import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import constants from "../../constants/Constants";
import DollarPrice from "../common/DollarPrice";
import OrderedItemCalculation from "./OrderedItemCalculation";

const OrderDetailsCard = (props) => {
    const [totalPrice, setTotalPrice]= useState(0)
    const quantities = [
        {
            label: props.data.smallSizeLabel,
            quantity: props.data.smallSizeQuantity,
            price: props.data.smallSizePrice,
        },
        {
            label: props.data.mediumSizeLabel,
            quantity: props.data.mediumSizeQuantity,
            price: props.data.mediumSizePrice,
        },
        {
            label: props.data.largeSizeLabel,
            quantity: props.data.largeSizeQuantity,
            price: props.data.largeSizePrice,
        },
    ];
    useEffect(() => {
        // Calculate the total price when the component mounts
        calculateTotalPrice();
    }, []);

    const calculateTotalPrice = () => {

        let itemTotalPrice = 0;

        quantities.forEach((item) => {
            itemTotalPrice += item.quantity * item.price;
        });

        // Update the state with the total price
        setTotalPrice(itemTotalPrice);
    };

    const renderOrderedItemCalculations = () => {

        return quantities.map((item, index) => {
            if (item.quantity > 0) {
                return (
                    <OrderedItemCalculation
                        key={index}
                        label={item.label}
                        price={item.price}
                        quantity={item.quantity}
                    />
                );
            } else {
                return null;
            }
        });
    };

    return (
        <View style={styles.card}>
            <View style={styles.imageAndPriceBox}>
                <View style={styles.imageAndHeadingBox}>
                <Image source={{ uri: props.data.image }}
                    style={{ height: 70, width: '30%', borderRadius: 20 }} />
                <View style={styles.textContainer}>
                    <Text  style={styles.headingText}>{props.data.heading}</Text>
                    <Text style={styles.descriptionText}>{props.data.description}</Text>
                </View>
                </View>
                <DollarPrice price={totalPrice}/>
            </View>
            {renderOrderedItemCalculations()}
        </View>
    )
};
const styles = StyleSheet.create({
    card: {
        paddingHorizontal: '3%',
        paddingVertical: '4%',
        backgroundColor: constants.colors.darkGray,
        borderRadius: 20,
        marginTop: 15
    },
    imageAndPriceBox: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    imageAndHeadingBox:{
        flexDirection:'row', 
        width:'72%', 
        alignItems:'center'
    },
    textContainer: {
        width:'70%',
        paddingLeft:'6%'
    },
    headingText:{
        fontSize:15,
        fontWeight:'600',
        color: constants.colors.white
    },
    descriptionText:{
        fontSize:12,
        fontWeight:'300',
        color: constants.colors.white,
        marginTop:3
    },
    quantityAndPriceBox:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:15,
    },
    labelAndPriceBox:{
        width:160,
        height:40,
        backgroundColor: constants.colors.background,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: '4%',
        justifyContent:'space-between',
        borderRadius:10,
    },
    labelSizeText:{
        color:'white', 
        width:55, 
        fontSize:15, 
        fontWeight:'500', 
        textAlign:'center'
    },
    verticalLine:{
        backgroundColor:constants.colors.darkGray, 
        width:2.5, 
        height:40
    }
});
export default OrderDetailsCard