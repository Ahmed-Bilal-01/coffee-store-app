import React,{useEffect} from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store, persistor } from './src/redux/store'
import RootStack from "./src/routes/RootStack";
import { NavigationContainer } from '@react-navigation/native';
import  SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide()
    },2000)
  },[])

  return (
    <SafeAreaProvider style={{backgroundColor:'black'}}>
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
