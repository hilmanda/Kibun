import React, { useState, useEffect } from "react";
import { Box, Center, Heading, Image, Input, Text, VStack } from "native-base";
import Colors from "../color";
import FontName from "../fonts/fontName";
import Buttone from "../Components/Buttone";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { auth } from "../../firebase";

function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Login");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Box flex={1} bg={Colors.green}>
      <Box position="absolute" w="full" h="full">
        <VStack space={6} alignItems="center">
          <Heading
            fontFamily={FontName.poppins700}
            fontSize={36}
            color={Colors.white}
            mt={90}
          >
            SIGN UP
          </Heading>
          <FontAwesome name="user" size={140} color="black" />

          {/* USERNAME  */}
          <Text
            ml={-200}
            mb={-5}
            fontFamily={FontName.openSans700}
            fontSize={15}
            color={Colors.black}
          >
            Username
          </Text>
          <Input
            w="70%"
            pl={2}
            mb={-5}
            color={Colors.green}
            backgroundColor={Colors.white}
            placeholder="Your Username"
            type="text"
            fontFamily={FontName.openSans400}
            fontSize={14}
            borderRadius={9}
          />

          {/* EMAIL  */}
          <Text
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
            mb={-5}
            pl={2}
            value={email}
            onChangeText={(text) => setEmail(text)}
            color={Colors.green}
            backgroundColor={Colors.white}
            placeholder="Your Email"
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
            mb={-5}
            pl={2}
            value={password}
            onChangeText={(text) => setPassword(text)}
            color={Colors.green}
            backgroundColor={Colors.white}
            placeholder="Your Password"
            secureTextEntry
            fontFamily={FontName.openSans400}
            borderRadius={9}
            fontSize={14}
          />
          {/* VERIF PASSWORD */}
          <Text
            ml={-140}
            mb={-5}
            fontFamily={FontName.openSans700}
            fontSize={15}
            color={Colors.black}
          >
            Confirm Password
          </Text>
          <Input
            w="70%"
            pl={2}
            color={Colors.green}
            backgroundColor={Colors.white}
            placeholder="Confirm Your Password"
            type="password"
            fontFamily={FontName.openSans400}
            borderRadius={9}
            fontSize={14}
          />

          {/* SIGN UP BUTTON */}
          <Buttone
            mt={10}
            bg={Colors.white}
            color={Colors.green}
            w="70%"
            onPress={handleSignUp}
          >
            CREATE NEW ACCOUNT
          </Buttone>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              mt={-5}
              fontFamily={FontName.openSans700}
              fontSize={15}
              color="blue.500"
            >
              Login Now
            </Text>
          </TouchableOpacity>
        </VStack>

        <Center w="full">
          <Image
            source={require("../../assets/Ellipse2.png")}
            justifyContent="flex-end"
            resizeMode="cover"
            mt={5}
            alt="front-image"
          />
        </Center>
      </Box>
    </Box>
  );
}

export default SignUpScreen;
