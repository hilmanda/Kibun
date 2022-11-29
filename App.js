import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import GetStartedScreen from "./src/Screens/GetStartedScreen";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { OpenSans_700Bold, OpenSans_400Regular } from "@expo-google-fonts/open-sans";

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
      <GetStartedScreen/> 
    </NativeBaseProvider>
  );
}
