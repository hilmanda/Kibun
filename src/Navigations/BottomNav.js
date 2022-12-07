import React from "react";
import { Center } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BerandaScreen from "../Screens/BerandaScreen";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Colors from "../color";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      backBehavior="main"
      initialRouteName="Main"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Main"
        component={BerandaScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            <Center>
              {focused ? (
                <Entypo name="home" size={24} color={Colors.green} />
              ) : (
                <AntDesign name="home" size={24} color={Colors.white} />
              )}
            </Center>;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: Colors.white,
    heig,
  },
});

export default BottomNav;
