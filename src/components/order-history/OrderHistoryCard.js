import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import constants from "../../constants/Constants";
import OrderDetailsCard from "./OrderedDetailsCard";

const OrderHistoryCard = (props) => {

    return (
        <View style={styles.cardContainer}>
            <View style={styles.rowContainers}>
                <Text style={styles.headingText}>Order Date</Text>
                <Text style={styles.headingText}>Total Amount</Text>
            </View>
            <View style={styles.rowContainers}>
                <Text style={styles.dateText}>{props.data[0].orderDate}</Text>
                <Text style={styles.priceText}>$ {parseFloat(props.data[0].totalPrice).toFixed(2)}</Text>
            </View>
            {props.data && props.data[0].item.map((data, index) => (
                <OrderDetailsCard key={index} data={data} />
            ))}

        </View>
    )
};
const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        paddingVertical: 20,
        backgroundColor: constants.colors.background,
        paddingVertical: '2%',
        marginTop:12
    },
    rowContainers: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },
    headingText: {
        color: constants.colors.white,
        fontSize: 16,
        fontWeight: '700'
    },
    dateText: {
        color: constants.colors.white,
        fontSize: 14,
        fontWeight: '300'
    },
    priceText: {
        color: constants.colors.lightPeach,
        fontSize: 14,
        fontWeight: '300'
    }
});

export default OrderHistoryCard;
