import React from "react";
import { Box, Heading, HStack, Image, Text } from "native-base";
import Colors from "../color";
import FontName from "../fonts/fontName";
import { FontAwesome } from "@expo/vector-icons";
import TrenBeranda from "../Components/TrenBeranda";
import pages from "../data/Pages";
import Buttone from "../Components/Buttone";

function BerandaScreen({ navigation }) {
  return (
    <Box flex={1} safeAreaTop bg={Colors.green}>
      <Image
        source={require("../../assets/Logo-Kibun.png")}
        resizeMode="contain"
        ml={5}
        size="170"
        alt="logo-kibun"
      />
      <HStack
        w="full"
        mt={-10}
        mb={5}
        ml={-5}
        justifyContent="flex-end"
        alignItems="center"
        space={2}
      >
        <Heading
          fontFamily={FontName.poppins700}
          fontSize={24}
          pl={5}
          color={Colors.white}
          isTruncated
        >
          Jesika Putri
        </Heading>
        <FontAwesome name="user-circle-o" size={50} color="white" />
      </HStack>
      {/* <Center pb={5}>
      </Center> */}
      <Box h="full" bg={Colors.lightGray} borderTopRadius={15} px={5}>
        <Box>
          <Heading
            fontFamily={FontName.poppins700}
            fontSize={24}
            pt={5}
            pl={5}
            color={Colors.green}
            isTruncated
          >
            {pages.title[3]}
          </Heading>
          <TrenBeranda />
        </Box>

        {/* INFORMASI TANAMAN */}
        <Box>
          <Heading
            fontFamily={FontName.poppins700}
            fontSize={24}
            pt={5}
            pl={5}
            color={Colors.green}
            isTruncated
          >
            Informasi Tanaman
          </Heading>
          <Buttone
            mt={5}
            w="full"
            textAlign="flex-start"
            rounded={15}
            bg={Colors.green}
            color={Colors.white}
            onPress={() => navigation.navigate("TanamanHias")}
          >
            Tanaman Hias
          </Buttone>
          <Buttone
            mt={5}
            w="full"
            textAlign="flex-start"
            rounded={15}
            bg={Colors.green}
            color={Colors.white}
            onPress={() => navigation.navigate("Sayuran")}
          >
            Sayuran
          </Buttone>
          <Buttone
            mt={5}
            w="full"
            textAlign="flex-start"
            rounded={15}
            bg={Colors.green}
            color={Colors.white}
            onPress={() => navigation.navigate("Buah")}
          >
            Buah-buahan
          </Buttone>
        </Box>
      </Box>
    </Box>
  );
}

export default BerandaScreen;
