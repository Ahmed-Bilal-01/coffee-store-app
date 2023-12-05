import React,{useEffect} from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import CofeeDetailsScreen from '../screens/CoffeeDetailsScreen';
import BeansDetailsScreen from '../screens/BeanDetailsScreen';
import PaymentScreen from '../screens/PaymentScreen';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import { useNavigation, useRoute } from "@react-navigation/native";


const Stack = createStackNavigator();
const RootStack = () => {

  return (
    <Stack.Navigator
    initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, 
        // cardStyle: { backgroundColor: 'red'},
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="FavoriteScreen" component={FavouritesScreen} />
      <Stack.Screen name="OrderHistoryScreen" component={OrderHistoryScreen} />
      <Stack.Screen name="CofeeDetailsScreen" component={CofeeDetailsScreen} />
      <Stack.Screen name="BeansDetailsScreen" component={BeansDetailsScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
