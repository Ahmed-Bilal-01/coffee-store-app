import React, { useEffect, useLayoutEffect, useRef } from "react";
import { StyleSheet, FlatList } from "react-native";
import Data from "../../constants/Data";
import CoffeeDetailsCard from "./CoffeeDetailsCard";
import CoffeeData from "../../constants/CoffeeData";

const CoffeeCategoryList = (props) => {
  const categoryDetails = CoffeeData[props.pressedCategory]?.details;
  const flatListRef = useRef(null);
  useLayoutEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  }, [props.pressedIndex]);

  return (
    <FlatList
      ref={flatListRef}
      horizontal
      contentContainerStyle={styles.scrollContainer}
      data={categoryDetails}
      renderItem={({ item, index }) => (
        <CoffeeDetailsCard
          key={index}
          data={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
});

export default CoffeeCategoryList;
