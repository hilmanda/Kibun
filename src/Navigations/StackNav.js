import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStartedScreen from "../Screens/GetStartedScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import BerandaScreen from "../Screens/BerandaScreen";

const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
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
    </Stack.Navigator>
  );
};

export default StackNav;
