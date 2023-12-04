import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import constants from "../../constants/Constants";
import SizeButtons from "./SizeButtons";

const SizeView = (props) => {
    const [selectedButton, setSelectedButton] = useState('FirstButton')
    const handleSelectedButton = (pressed) => {
        setSelectedButton(pressed);
    }

    return (
        <View style={{ paddingBottom: 30 }}>
            <Text style={styles.sizeHeading}>Size</Text>
            <View style={styles.buttonsContainer}>
                <SizeButtons
                    label={props.buttonOnelabel}
                    pressedButton={() => {
                        handleSelectedButton('FirstButton');
                        props.sizePrice('small', props.buttonOnelabel)
                    }}
                    selected={selectedButton === 'FirstButton'} />
                <SizeButtons
                    label={props.buttonTwolabel}
                    pressedButton={() => {
                        handleSelectedButton('SecondButton');
                        props.sizePrice('medium', props.buttonTwolabel)
                    }}
                    selected={selectedButton === 'SecondButton'} />
                <SizeButtons
                    label={props.buttonThreelabel}
                    pressedButton={() => {
                        handleSelectedButton('ThirdButton');
                        props.sizePrice('large', props.buttonThreelabel)
                    }}
                    selected={selectedButton === 'ThirdButton'} />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    sizeHeading: {
        color: constants.colors.lightGray,
        fontSize: 15,
        fontWeight: '700',
        marginTop: '3%'
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        justifyContent: 'space-between',
        marginTop:'3%'
    }
})
export default SizeView;