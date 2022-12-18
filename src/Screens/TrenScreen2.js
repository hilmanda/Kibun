import React from "react";
import { Box, Image, Heading, VStack, Pressable } from "native-base";
import Colors from "../color";
import FontName from "../fonts/fontName";
import Toko2 from "../Components/Toko2";
import { AntDesign } from "@expo/vector-icons"

function TrenScreen2({ navigation }) {
  return (
    <Box flex={1} safeAreaTop bg={Colors.green} py={10}>
      <VStack pl={5}>
        <Pressable onPress={() => navigation.navigate("Beranda")}>
          <AntDesign pb={-5} name="arrowleft" size={24} color={Colors.white} />
        </Pressable>

        <Heading
          fontFamily={FontName.poppins700}
          fontSize={34}
          pl={5}
          pb={5}
          color={Colors.white}
          isTruncated
        >
          Mawar
        </Heading>
        <Image
        source={require("../../assets/Tanaman.png")}
          resizeMode="contain"
          ml={40}
          size="200"
          alt=""
        />

      </VStack>
      {/* <Center pb={5}>
      </Center> */}
      <Box h="full" bg={Colors.lightGray} borderTopRadius={15} px={5}>
        <Box>
          <Toko2/>
        </Box>
      </Box>
    </Box>
  );
}export default TrenScreen2;