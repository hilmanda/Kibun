import React from "react";
import { Box, Center, Image, Text, VStack } from "native-base";
import Colors from "../color";
import FontName from "../fonts/fontName";
import Buttone from "../Components/Buttone";
function WelcomeScreen({ navigation }) {
  return (
    <Box flex={1} bg={Colors.green}>
      <Center w="full">
        <Text
          mt={90}
          fontFamily={FontName.poppins700}
          fontSize={36}
          textAlign="center"
          color={Colors.white}
        >
          WELCOME
        </Text>
        <Image
          source={require("../../assets/WELCOME-IMAGE.png")}
          resizeMode="contain"
          ml={5}
          mb={-20}
          size="360"
          alt="welcome-image"
        />
        <Image
          source={require("../../assets/Logo-Kibun.png")}
          resizeMode="contain"
          ml={10}
          size="200"
          alt="logo-kibun"
        />
      </Center>
      <VStack space={10} px={5} alignItems="center">
        <Buttone
          bg={Colors.white}
          color={Colors.green}
          onPress={() => navigation.navigate("Login")}
        >
          LOGIN
        </Buttone>
        <Buttone
          bg={Colors.darkGreen}
          color={Colors.white}
          onPress={() => navigation.navigate("SignUp")}
        >
          SIGN UP
        </Buttone>
      </VStack>
    </Box>
  );
}

export default WelcomeScreen;
