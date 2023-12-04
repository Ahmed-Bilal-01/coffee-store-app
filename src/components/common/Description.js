import React from "react";
import { View, StyleSheet, Text } from "react-native";
import constants from "../../constants/Constants";

const Description = (props) => {
    return (
        <View>
            <Text style={styles.descriptionHeading}>Description</Text>
            <Text style={styles.descriptionText}>{props.descriptionText}</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    descriptionHeading: {
        color: constants.colors.lightGray,
        fontSize: 15,
        fontWeight: '700'
    },
    descriptionText: {
        color: constants.colors.white,
        fontSize: 12,
        marginTop: '2%'
    }
})
export default Description;