import React from "react";
import { Box, Center, Heading, VStack, Pressable } from "native-base";
import Colors from "../color";
import FontName from "../fonts/fontName";
import Artikel from "../Components/Artikel";
import { AntDesign } from "@expo/vector-icons";

function ArtikelScreen({ navigation }) {
  return (
    <Box flex={1} safeAreaTop bg={Colors.green} py={10}>
      <VStack pl={5}>
        <Pressable onPress={() => navigation.navigate("Bottom")}>
          <AntDesign pb={-5} name="arrowleft" size={24} color={Colors.white} />
        </Pressable>

        <Center>
          <Heading
            fontFamily={FontName.poppins700}
            fontSize={48}
            mt={10}
            color={Colors.white}
            isTruncated
            alignItems="center"
          >
            ARTIKEL
          </Heading>
        </Center>
      </VStack>
      {/* <Center pb={5}>
      </Center> */}
      <Box h="full" bg={Colors.lightGray} borderTopRadius={15} px={5}>
        <Box>
          <Artikel />
        </Box>
      </Box>
    </Box>
  );
}

export default ArtikelScreen;
