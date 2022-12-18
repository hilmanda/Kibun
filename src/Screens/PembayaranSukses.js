import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOURS } from "../color";
import Buttone from "../Components/Buttone";
import Colors from "../color";

export default function PembayaranSukses({navigation}) {
    return (
      <ImageBackground
          style={styles.background}
          source={require("../../assets/coba.png")}
          >
            <View 
            style={styles.loginButton}
            >
            <Buttone 
            bg={Colors.white}
            color={Colors.green}
            onPress={() => navigation.navigate("Beranda")}
            >
            <TouchableOpacity onPress={() => navigation.navigate("Beranda")}>
            <Text style={styles.textButton}>Selesai</Text>
            </TouchableOpacity>
            </Buttone>
            </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loginButton: {
      width: "70%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 40,
      margin: 20,
      top:"35%",
    },
    textButton: {
      color: COLOURS.black,
      fontWeight: "bold",
    },
})