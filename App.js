import React from "react";
import { NativeBaseProvider } from "native-base";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import {
  OpenSans_700Bold,
  OpenSans_400Regular,
} from "@expo-google-fonts/open-sans";
import TanamanHiasScreen from "./src/Screens/TanamanHiasScreen";
import TrenScreen from "./src/Screens/TrenScreen";

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
      <TrenScreen />
    </NativeBaseProvider>
  );
}
