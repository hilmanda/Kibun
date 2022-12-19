import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { Box, Center, Heading, Image, Input, Text, VStack } from "native-base";
import Colors from "../color";
import FontName from "../fonts/fontName";
import Buttone from "../Components/Buttone";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Bottom");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged In with:", user.email);
      })
      .catch((error) => alert(error.message));
  };
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
            value={email}
            onChangeText={(text) => setEmail(text)}
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
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Enter Password"
            secureTextEntry
            fontFamily={FontName.openSans400}
            borderRadius={9}
            fontSize={14}
          />

          {/* LOGIN BUTTON */}
          <Buttone
            mt={10}
            bg={Colors.white}
            color={Colors.green}
            w="70%"
            // onPress={handleLogIn}
            onPress={() => navigation.navigate("Bottom")}
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
