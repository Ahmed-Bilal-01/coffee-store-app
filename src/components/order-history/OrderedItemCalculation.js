import React from "react";
import { View, StyleSheet, Text } from "react-native";
import constants from "../../constants/Constants";
import DollarPrice from "../common/DollarPrice";

const OrderedItemCalculation = (props) => {
    
    return (
        <View style={styles.quantityAndPriceBox}>
            <View style={styles.labelAndPriceBox}>
                <Text style={styles.labelSizeText}>{props.label}</Text>
                <View style={styles.verticalLine} />
                <DollarPrice price={props.price} />
            </View>
            <View style={styles.multiplyContainer}>
                <Text style={styles.xSignText}>X</Text>
                <Text style={styles.quantityText}>{props.quantity}</Text>
            </View>
            <Text style={styles.calculatedPrice}>{props.quantity*props.price}</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    quantityAndPriceBox: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    labelAndPriceBox: {
        width: 160,
        height: 40,
        backgroundColor: constants.colors.background,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '4%',
        borderRadius: 10,
    },
    labelSizeText: {
        color: 'white',
        width: 55,
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center'
    },
    verticalLine: {
        backgroundColor: constants.colors.darkGray,
        width: 2.5,
        height: 40,
        marginRight:'10%',
        marginLeft:'5%'
    },
    multiplyContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    xSignText: {
        color: constants.colors.lightPeach,
        fontSize: 18,
        fontWeight: '600'
    },
    quantityText: {
        color: constants.colors.white,
        marginLeft: 5,
        fontSize: 18,
        fontWeight: '700'
    },
    calculatedPrice: {
        color: constants.colors.lightPeach,
        marginLeft: 5,
        fontSize: 18,
        fontWeight: '700',
        width: 63,
        textAlign: 'right'
    }
});
export default OrderedItemCalculation;