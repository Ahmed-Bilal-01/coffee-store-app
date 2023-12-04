import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import constants from "../constants/Constants";
import Header from "../components/common/Header";
import MultipleOrderedSizeCard from "../components/cart/MultipleOrderedSizeCard";
import SingleOrderedSizeCard from "../components/cart/SingleOrderedSizeCard";
import Footer from "../components/common/Footer";
import BottomTab from "../routes/BottomTab";
import {useSelector } from "react-redux";
import {useNavigation} from '@react-navigation/native';


const CartScreen = () => {
    const navigation = useNavigation();
    const cartData = useSelector((state) => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);

    const handlePay = () => {
        if(totalPrice >0 ){
            navigation.navigate('PaymentScreen',{totalPrice: totalPrice});
        }
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartData.items.forEach((item) => {
            const smallSizeTotal = item.smallSizeQuantity * item.smallSizePrice;
            const mediumSizeTotal = item.mediumSizeQuantity * item.mediumSizePrice;
            const largeSizeTotal = item.largeSizeQuantity * item.largeSizePrice;
            totalPrice += smallSizeTotal + mediumSizeTotal + largeSizeTotal;
        });
        setTotalPrice(totalPrice);
    };
    const renderOrderedSizeCard = (item) => {
        const multipleSizeConditions =
            item.smallSizeQuantity > 0 && item.mediumSizeQuantity > 0 ||
            item.mediumSizeQuantity > 0 && item.largeSizeQuantity > 0 ||
            item.largeSizeQuantity > 0 && item.smallSizeQuantity > 0;

        const singleSizeConditions =
            (item.smallSizeQuantity > 0 && item.mediumSizeQuantity === 0 && item.largeSizeQuantity === 0) ||
            (item.smallSizeQuantity === 0 && item.mediumSizeQuantity > 0 && item.largeSizeQuantity === 0) ||
            (item.smallSizeQuantity === 0 && item.mediumSizeQuantity === 0 && item.largeSizeQuantity > 0) ||
            (item.smallSizeQuantity > 0 && item.mediumSizeQuantity > 0 && item.largeSizeQuantity === 0) ||
            (item.smallSizeQuantity > 0 && item.mediumSizeQuantity === 0 && item.largeSizeQuantity > 0) ||
            (item.smallSizeQuantity === 0 && item.mediumSizeQuantity > 0 && item.largeSizeQuantity > 0);

        if (multipleSizeConditions) {
            return (
                <MultipleOrderedSizeCard
                    key={item.id}
                    data={item}
                />
            );
        } else if (singleSizeConditions) {
            return (
                <SingleOrderedSizeCard
                    key={item.id}
                    data={item}
                />
            );
        } else {
            return null;
        }
    };
    useEffect(() => {
        calculateTotalPrice();

    }, [cartData])

    return (
        <View style={styles.mainContainer}>
            <Header label={'Cart'} />
            <ScrollView style={styles.scrollContainer}>
                {/* Check if cartData is an array before using map */}
                {cartData && cartData?.items.map((item) => renderOrderedSizeCard(item))}
            </ScrollView>
            <Footer
                showBar={false}
                buttonLabel={'Pay'}
                price={parseFloat(totalPrice).toFixed(2)}
                functionOnPress={handlePay} />
            <View>
                <BottomTab pressedButton={'CartScreen'} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: constants.colors.background,
        flex: 1
    },
    scrollContainer: {
        backgroundColor: constants.colors.background,
        paddingHorizontal: '5%',
    },
});

export default CartScreen;
