import React, { useState,useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import CoffeeCategoriesButton from "./CoffeeCategoriesButton";
import constants from "../../constants/Constants";
import Data from "../../constants/Data";
import CoffeeData from "../../constants/CoffeeData";

const CoffeeCategoryOptions = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryPress = (category, index) => {
    setSelectedCategory(category);
    props.pressedCategory(index, category)
  };

  return (
    <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
      {CoffeeData && CoffeeData.categories.map((data, index) => (
        <CoffeeCategoriesButton
          key={index}
          label={data.name}
          pressedIndex={index}
          selected={selectedCategory === data.name}
          pressedOption={()=>handleCategoryPress(data.name, index)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    height: 40,
    marginTop: 20,
    flexDirection: 'row',
    paddingRight: 30,
  },
});

export default CoffeeCategoryOptions;
