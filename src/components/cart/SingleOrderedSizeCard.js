import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import constants from "../../constants/Constants";
import SizeButtons from "../details-screen/SizeButtons";
import DollarPrice from "../common/DollarPrice";
import OrderedItemCounter from "../common/OrderedItemCounter";

const SingleOrderedSizeCard = (props) => {
    const [selectedSizeLabel, setSelectedSizeLabel]= useState();
    const [selectedSizeQuantity, setSelectedSizeQuantity]= useState(0);
    const [selectedQuantityName, setSelectedQuantityName]= useState();
    const [totalPrice, setTotalPrice]= useState();
    const handleOrderUpdate = (quantity) => {
        // const totalPrice = quantity * props.data.prices;
        // props.price(totalPrice)
        // return quantity;
    };
    useEffect(()=>{
        if(props.data.smallSizeQuantity > 0 && props.data.mediumSizeQuantity === 0 && props.data.largeSizeQuantity === 0){
            setSelectedSizeLabel(props.data.smallSizeLabel)
            setSelectedSizeQuantity(props.data.smallSizeQuantity)
            setSelectedQuantityName('smallSizeQuantity')
            setTotalPrice(parseFloat(props.data.smallSizeQuantity*props.data.smallSizePrice).toFixed(2))
        }
        else if(props.data.smallSizeQuantity === 0 && props.data.mediumSizeQuantity > 0 && props.data.largeSizeQuantity === 0){
            setSelectedSizeLabel(props.data.mediumSizeLabel)
            setSelectedSizeQuantity(props.data.mediumSizeQuantity)
            setSelectedQuantityName('mediumSizeQuantity')
            setTotalPrice(parseFloat(props.data.mediumSizeQuantity*props.data.mediumSizePrice).toFixed(2))
        } else{
            setSelectedSizeLabel(props.data.largeSizeLabel)
            setSelectedSizeQuantity(props.data.largeSizeQuantity)
            setSelectedQuantityName('largeSizeQuantity')
            setTotalPrice(parseFloat(props.data.largeSizeQuantity*props.data.largeSizePrice).toFixed(2))

        }
    },[props])
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imageAndDescriptionBox}>
                <Image source={{uri:props.data.image}} style={styles.leftContainer} resizeMode={'stretch'} />
                <View style={styles.rightContainer}>
                    <Text style={styles.headingText}>{props.data.heading}</Text>
                    <Text style={styles.descriptionText}>{props.data.description}</Text>
                    <View style={styles.buttonsContainer}>
                        <SizeButtons label={selectedSizeLabel} customStyle={{ width: 80 }} />
                        <DollarPrice price={totalPrice} />
                    </View>
    
                    <OrderedItemCounter
                        id={props.data.id}
                        selectedQuantity={selectedSizeQuantity}
                        selectedSizeName= {selectedQuantityName}
                        handleOrderUpdate={(quantity) => handleOrderUpdate(quantity)}
                        customStyle={{ justifyContent: 'space-between', marginTop:7}}
                    />
                   
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        paddingHorizontal: '3%',
        paddingVertical: '3%',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#262B33',
        marginVertical: 10,
    },
    imageAndDescriptionBox: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftContainer: {
        width: '40%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    rightContainer: {
        width: '60%',
        paddingVertical: '1%',
        paddingLeft: '6%',
        paddingVertical: '2%',
    },
    headingText: {
        color: constants.colors.white,
        fontSize: 15,
        fontWeight: '600'
    },
    descriptionText: {
        color: constants.colors.lightGray,
        fontSize: 12
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: '1.5%',
        marginTop: 12,
        justifyContent:'space-between',
    }
});

export default SingleOrderedSizeCard;
