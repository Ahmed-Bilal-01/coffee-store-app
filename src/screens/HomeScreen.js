import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import constants from "../constants/Constants";
import Header from "../components/common/Header";
import CoffeeCategoryOptions from "../components/home/CoffeeCategoryOptions";
import CoffeeCategoryList from "../components/home/CofeeCategoryList";
import BeansCategoryList from "../components/home/BeansCategoryList";
import BottomTab from "../routes/BottomTab";
import SearchBar from "../components/common/SearchBar";

const HomeScreen = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryPress = (index, category) => {
        setSelectedIndex(index);
        setSelectedCategory(category);
    };
    return (
        <View style={styles.mainContainer}>
            <Header />
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <Text style={styles.heading}>Find the best coffee for you</Text>
                <SearchBar />
                <View style={styles.listsContainer}>
                    <CoffeeCategoryOptions pressedCategory={handleCategoryPress} />
                    <CoffeeCategoryList pressedIndex={selectedIndex} pressedCategory={selectedCategory} />
                    <Text style={styles.beansText}>Coffee beans</Text>
                    <BeansCategoryList />
                </View>
            </ScrollView>
            <View style={styles.bottomTab}>
                <BottomTab pressedButton={'HomeScreen'} />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: constants.colors.background
    },
    scrollContainer: {
        backgroundColor: constants.colors.background,
        paddingBottom: 80
    },
    heading: {
        color: constants.colors.white,
        marginTop: '4%',
        fontSize: 28,
        fontWeight: '700',
        width: '60%',
        marginLeft: '5%'
    },
    beansText: {
        color: constants.colors.white,
        fontSize: 16,
        fontWeight: '600',
        marginTop: 15
    },
    bottomTab: {
        position: 'absolute',
        bottom: 0,
    },
    listsContainer: {
        marginLeft: '5%'
    }
})
export default HomeScreen;