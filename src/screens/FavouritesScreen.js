import React from "react";
import { View, ImageBackground, StyleSheet, Text, ScrollView } from "react-native";
import constants from "../constants/Constants";
import FavouritesCard from "../components/favorite/FavouritesCard";
import Header from "../components/common/Header";
import BottomTab from "../routes/BottomTab";
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/actions'

const FavouritesScreen = () => {
    const dispatch = useDispatch();
    const favoritesData = useSelector(state => state.favorite.favorites);

    return (
        <View style={styles.mainContainer}>
            <Header label={'Favorites'} />
            <ScrollView style={styles.scrollContainer}>
                {favoritesData && favoritesData.map((data, index) => (
                    <FavouritesCard
                        key={index}  
                        id={data.id}
                        image={data.image}
                        headingText={data.name}
                        descriptionText={data.characteristics}
                        leftSmallButtonText={'Coffee'}
                        rightSmallButtonText={'Milk'}
                        leftSmallButtonIcon={constants.svg.coffeeLogo}
                        rightSmallButtonIcon={constants.svg.milkLogo}
                        qualityText={data.qualityText}
                        rating={data.rating}
                        totalRatings={'6,234'}
                        description={data.description}
                    />
                ))}
            </ScrollView>
            <View style={styles.bottomTab}>
                <BottomTab pressedButton={'FavoriteScreen'} />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: constants.colors.background,
        height: '100%'
    },
    mainContainer: {
        backgroundColor: constants.colors.background,
        flex: 1
    },
    bottomTab: {
        position: 'absolute',
        bottom: 0,
    }
});
export default FavouritesScreen;