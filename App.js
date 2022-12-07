import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import {
  OpenSans_700Bold,
  OpenSans_400Regular,
} from "@expo-google-fonts/open-sans";
import GetStartedScreen from "./src/Screens/GetStartedScreen";
import WelcomeScreen from "./src/Screens/WelcomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import SignUpScreen from "./src/Screens/SignUpScreen";
import BerandaScreen from "./src/Screens/BerandaScreen";
import TanamanHiasScreen from "./src/Screens/TanamanHiasScreen";
import SayuranScreen from "./src/Screens/SayuranScreen";
import BuahScreen from "./src/Screens/BuahScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    OpenSans_700Bold,
    OpenSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator
          initialRouteName="GetStarted"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="GetStarted" component={GetStartedScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Beranda" component={BerandaScreen} />
          <Stack.Screen name="TanamanHias" component={TanamanHiasScreen} />
          <Stack.Screen name="Sayuran" component={SayuranScreen} />
          <Stack.Screen name="Buah" component={BuahScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
