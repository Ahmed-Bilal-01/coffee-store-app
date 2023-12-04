import React from "react";
import { View, StyleSheet, Text } from "react-native";
import constants from "../../constants/Constants";
import CoffeeOrBeanButton from "../details-screen/CoffeeOrBeanButton";
import QualityButton from "../details-screen/QualityButton";

const TransparentView = (props) => {
    return (
        <View style={styles.transparentContainer}>
            <View style={styles.headingAndButtonsBox}>
                <View>
                    <Text style={styles.headingText}>{props.headingText}</Text>
                    <Text style={styles.descriptionText}>{props.descriptionText}</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <CoffeeOrBeanButton label={props.leftSmallButtonText} icon={props.leftSmallButtonIcon} />
                    <CoffeeOrBeanButton label={props.rightSmallButtonText} icon={props.rightSmallButtonIcon} />
                </View>
            </View>
            <View style={styles.ratingAndQualityBox}>
                <View style={styles.ratingContainer}>
                    <constants.svg.star height={20} width={20} />
                    <Text style={styles.ratingText}>{props.rating}</Text>
                    <Text style={styles.totalRatingsText}>({props.totalRatings})</Text>
                </View>
                <QualityButton label={props.qualityText} />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    transparentContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        bottom: 0,
        height: 140,
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: '5%',
        paddingTop: 15,
    },
    headingAndButtonsBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    headingText: {
        color: constants.colors.white,
        fontSize: 20,
        fontWeight: '600',
        width:150
    },
    descriptionText: {
        color: constants.colors.lightGray,
        fontSize: 12
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: 115,
        height: 50,
        justifyContent: 'space-between'
    },
    ratingAndQualityBox: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '6%',
    },
    ratingContainer: {
        height: 30,
        width: 90,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingText: {
        fontSize: 17,
        color: constants.colors.white,
        fontWeight: '600',
        marginLeft: 5
    },
    totalRatingsText: {
        color: constants.colors.lightGray,
        fontSize: 10,
        fontWeight: '700',
        marginLeft: 6
    }
});
export default TransparentView;