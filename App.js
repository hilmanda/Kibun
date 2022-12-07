import React from "react";
import { NativeBaseProvider } from "native-base";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import {
  OpenSans_700Bold,
  OpenSans_400Regular,
} from "@expo-google-fonts/open-sans";
import PageScreen from "./src/Screens/PageScreen";

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
      <PageScreen />
    </NativeBaseProvider>
  );
}
