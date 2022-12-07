import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { OpenSans_700Bold, OpenSans_400Regular } from "@expo-google-fonts/open-sans";
import SignUpScreen from "./src/Screens/SignUpScreen";

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
      <SignUpScreen/> 
    </NativeBaseProvider>
  );
}
