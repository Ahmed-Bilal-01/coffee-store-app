import React from "react";
import { View, StyleSheet} from "react-native";
import SizeButtons from "../details-screen/SizeButtons";
import DollarPrice from "../common/DollarPrice";
import OrderedItemCounter from "../common/OrderedItemCounter";

const MultipleCardSizeCounter = (props) => {
    return (
          <View style={styles.buttonsContainer} key={props.index}>
            <SizeButtons label={props.label} customStyle={{ width: 80 }} />
            <DollarPrice price={props.price} />
            <OrderedItemCounter
              id={props.id}
              selectedQuantity={props.selectedQuantity}
              selectedSizeName={props.selectedSizeName}
              customStyle={{ justifyContent: 'space-between' }}
            />
          </View>
    );
  };
const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingVertical: '1.5%',
        justifyContent: 'space-between'
    }
});

export default MultipleCardSizeCounter;
