import React from "react";
import { Box, Heading, VStack } from "native-base";
import Colors from "../color";
import FontName from "../fonts/fontName";
import { AntDesign } from "@expo/vector-icons";
import pages from "../data/Pages";
import Sayuran from "../Components/Sayuran";

function SayuranScreen() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.green} py={10}>
      <VStack pl={5}>
        <AntDesign pb={-5} name="arrowleft" size={24} color={Colors.white} />
        <Heading
          fontFamily={FontName.poppins700}
          fontSize={24}
          pl={5}
          pb={5}
          color={Colors.white}
          isTruncated
        >
          {pages.title[1]}
        </Heading>
      </VStack>
      {/* <Center pb={5}>
      </Center> */}
      <Box h="full" bg={Colors.lightGray} borderTopRadius={15} px={5}>
        <Box>
          <Sayuran />
        </Box>
      </Box>
    </Box>
  );
}

export default SayuranScreen;
