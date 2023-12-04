import React from "react";
import { View, StyleSheet, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import constants from "../../constants/Constants";

const CreditCard = () => {
    return (
        <LinearGradient
            colors={['#262B33', '#0C0F14']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1.7, y: 0 }}
            style={styles.cardContainer}
        >
            <View style={styles.chipAndVisa}>
                <constants.svg.cardChip />
                <Text style={styles.VisaText}>VISA</Text>
            </View>
            <Text style={styles.cardNumberText}>1234   5678   9876   5432</Text>
            <View style={styles.nameAndEpireContainer}>
                <Text style={styles.nameAndEpireText}>Card Holder Name</Text>
                <Text style={styles.nameAndEpireText}>Expiry Date</Text>
            </View>
            <View style={styles.nameAndDateContainer}>
                <Text style={styles.nameAndDateText}>Robert Evans</Text>
                <Text style={styles.nameAndDateText}>02/12</Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 20,
        padding: 12,
        height: 170,
        width: '100%',
    },
    chipAndVisa: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    VisaText: {
        color: constants.colors.white,
        fontSize: 20,
        fontWeight: '800',
    },
    cardNumberText: {
        color: constants.colors.white,
        fontSize: 16,
        fontWeight: '700',
        marginTop: '8%',
    },
    nameAndEpireContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: '11%',
    },
    nameAndEpireText: {
        color: constants.colors.lightGray,
        fontSize: 12,
    },
    nameAndDateContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    nameAndDateText: {
        color: constants.colors.white,
        fontSize: 16,
        fontWeight: '700',
    },
});

export default CreditCard;
