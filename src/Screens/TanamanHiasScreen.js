import React from "react";
import { Box, Heading, VStack, Pressable } from "native-base";
import Colors from "../color";
import FontName from "../fonts/fontName";
import TanamanHias from "../Components/TanamanHias";
import { AntDesign } from "@expo/vector-icons";
import pages from "../data/Pages";

function TanamanHiasScreen({ navigation }) {
  return (
    <Box flex={1} safeAreaTop bg={Colors.green} py={10}>
      <VStack pl={5}>
        <Pressable onPress={() => navigation.navigate("Bottom")}>
          <AntDesign pb={-5} name="arrowleft" size={24} color={Colors.white} />
        </Pressable>
        <Heading
          fontFamily={FontName.poppins700}
          fontSize={24}
          pl={5}
          pb={5}
          color={Colors.white}
          isTruncated
        >
          {pages.title[0]}
        </Heading>
      </VStack>
      {/* <Center pb={5}>
      </Center> */}
      <Box h="full" bg={Colors.lightGray} borderTopRadius={15} px={5}>
        <Box>
          <TanamanHias />
        </Box>
      </Box>
    </Box>
  );
}

export default TanamanHiasScreen;
