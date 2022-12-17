import React from "react";
import { Box, Center, Heading, Image, Input, Text, VStack } from "native-base";
import Colors from "../color";
import FontName from "../fonts/fontName";
import Buttone from "../Components/Buttone";
import { FontAwesome } from "@expo/vector-icons";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native";


function LoginScreen({ navigation }) {
  return (
    <Box flex={1} bg={Colors.green}>
      <Center w="full">
        <Image
          source={require("../../assets/Ellipse2.png")}
          resizeMode="cover"
          mt={50}
          alt="front-image"
        />
      </Center>
      <Box position="absolute" w="full" h="full">
        <VStack space={6} alignItems="center">
          <Heading
            fontFamily={FontName.poppins700}
            fontSize={36}
            color={Colors.green}
            mt={120}
          >
            LOGIN
          </Heading>
          <FontAwesome name="user" size={140} color="black" />

          {/* EMAIL  */}
          <Text
            mt={10}
            ml={-230}
            mb={-5}
            fontFamily={FontName.openSans700}
            fontSize={15}
            color={Colors.black}
          >
            Email
          </Text>
          <Input
            w="70%"
            pl={2}
            color={Colors.green}
            backgroundColor={Colors.white}
            placeholder="Example : user@email.com"
            type="text"
            fontFamily={FontName.openSans400}
            fontSize={14}
            borderRadius={9}
          />

          {/* PASSWORD */}
          <Text
            ml={-200}
            mb={-5}
            fontFamily={FontName.openSans700}
            fontSize={15}
            color={Colors.black}
          >
            Password
          </Text>
          <Input
            w="70%"
            pl={2}
            color={Colors.green}
            backgroundColor={Colors.white}
            placeholder="Enter Password"
            type="password"
            fontFamily={FontName.openSans400}
            borderRadius={9}
            fontSize={14}
          />
          <Text
            ml={150}
            mt={-5}
            fontFamily={FontName.openSans700}
            fontSize={15}
            color={Colors.black}
          >
            forgot password ?
          </Text>

          {/* LOGIN BUTTON */}
          <Buttone
            mt={10}
            bg={Colors.white}
            color={Colors.green}
            w="70%"
            onPress={() => navigation.navigate("Beranda")}
          >
            LOGIN
          </Buttone>
          
            <Text
              mt={-5}
              fontFamily={FontName.openSans700}
              fontSize={15}
              color={Colors.white}
            >
              Don't Have Account?

          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text
              mt={-5}
              fontFamily={FontName.openSans700}
              fontSize={15}
              color="blue.500"
            >
              Sign Up
            </Text>
          </TouchableOpacity>
            </Text>
        </VStack>
      </Box>
    </Box>
  );
}

export default LoginScreen;
