import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import constants from "../constants/Constants";
import CreditCard from "../components/payment/CreditCard";
import PaymentoptionButtons from "../components/payment/PaymentOptionButtons";
import Footer from "../components/common/Footer";
import { useRoute, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";

const PaymentScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const totalPrice = route.params.totalPrice
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cart);

    const formatOrdinal = (number) => {
        const suffixes = ["th", "st", "nd", "rd"];
        const v = number % 100;
        return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
    };

    const formatDateTime = (date) => {
        const options = {
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
        };

        const formattedDate = new Date(date).toLocaleString('en-US', options);
        const [month, day, time] = formattedDate.split(' ');

        return `${month} ${formatOrdinal(parseInt(day))} ${time}`;
    }

    const handlePayment = () => {
        const currentDate = new Date();
    
        const orderItems = cartData.items.map(item => ({ ...item }));
        
        dispatch({
            type: 'ADD_TO_ORDER_HISTORY',
            payload: [{ item: orderItems, orderDate: formatDateTime(currentDate), totalPrice: totalPrice }],
        });
    
        dispatch({
            type: 'CLEAR_CART',
        });
        navigation.navigate('OrderHistoryScreen')
    }
        
    return (
        <View style={styles.mainContainer}>
            <View style={styles.bodyContainer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={() => { navigation.navigate('CartScreen') }}>
                        <constants.svg.backIcon />
                    </TouchableOpacity>
                    <View style={styles.paymentContainer}>
                        <Text style={styles.paymentText}>Payment</Text>
                    </View>

                </View>
                <Text style={styles.creditCardText}>CreditCard</Text>
                <CreditCard />
                <View style={{ marginTop: 12 }}>
                    <PaymentoptionButtons label={'Wallet'} icon={constants.svg.wallet} balance={'$ 131.12'} />
                    <PaymentoptionButtons label={'Google Pay'} icon={constants.svg.googlePay} />
                    <PaymentoptionButtons label={'Apple Pay'} icon={constants.svg.applePay} />
                    <PaymentoptionButtons label={'Amazon Pay'} icon={constants.svg.amazonPay} />
                </View>
            </View>
            <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                <Footer
                    price={parseFloat(totalPrice).toFixed(2)}
                    buttonLabel={'Pay from Credit Card'}
                    functionOnPress={handlePayment} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: constants.colors.background,
        flex: 1,
    },
    bodyContainer: {
        paddingHorizontal: '5%'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        width: '100%',
    },
    backButton: {
        backgroundColor: constants.colors.darkGray,
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    creditCardText: {
        color: constants.colors.white,
        marginBottom: 10,
        fontSize: 15,
        fontWeight: '700'
    },
    paymentContainer: {
        alignSelf: 'center',
        width: '100%',
        right: 10
    },
    paymentText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '700'
    }
});

export default PaymentScreen;
