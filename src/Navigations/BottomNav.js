import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BerandaScreen from "../Screens/BerandaScreen";
import BuahScreen from "../Screens/BuahScreen";
import { auth } from "../../firebase";
import Colors from "../color";
import TokoScreen from "../Screens/TokoScreen";

const Tab = createBottomTabNavigator();

function BottomNav({ navigation }) {
  const HandleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        tabBarActiveTintColor: Colors.green,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Main"
        component={BerandaScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chart"
        component={BuahScreen}
        options={{
          tabBarLabel: "Chart",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="basket" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Toko"
        component={TokoScreen}
        options={{
          tabBarLabel: "Toko",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LogOut"
        component={HandleSignOut}
        options={{
          tabBarLabel: "Log Out",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNav;
