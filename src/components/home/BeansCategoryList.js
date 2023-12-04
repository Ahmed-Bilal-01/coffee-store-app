import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Data from "../../constants/Data";
import BeansDetailsCard from "./BeansDetailsCard";
import coffeeBeanData from "../../constants/BeansData";

const BeansCategoryList = (props) => {
    return (
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        {coffeeBeanData && coffeeBeanData.details.map((data, index) => (
          <BeansDetailsCard
            key={index}
            data={data}
            characteristics={data.characteristics}
          />
        ))}
      </ScrollView>
    );
  };

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
});

export default BeansCategoryList;
