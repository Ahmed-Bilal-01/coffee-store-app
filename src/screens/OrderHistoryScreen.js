import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import constants from "../constants/Constants";
import Header from "../components/common/Header";
import BottomTab from "../routes/BottomTab";
import OrderHistoryCard from "../components/order-history/OrderHistoryCard";
import { useDispatch, useSelector } from "react-redux";


const OrderHistoryScreen = () => {
    const orderData = useSelector((state) => state.orderHistory);

    return (
        <View style={styles.mainContainer}>
            <Header label={'Order History'} />
            <ScrollView style={styles.scrollContainer}>
            {orderData && orderData.items.map((data, index) => (
                <OrderHistoryCard key={index} data={data} />
            ))}
            </ScrollView>
            <View style={styles.bottomTab}>
                <BottomTab/>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: constants.colors.background,
        height: '100%',
        paddingHorizontal:'5%'
    },
    mainContainer: {
        backgroundColor: constants.colors.background,
        flex: 1,
    }
});
export default OrderHistoryScreen;