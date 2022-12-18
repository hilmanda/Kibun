import React from "react";
import {
  Box,
  Center,
  FlatList,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import Colors from "../color";
import ProductsToko from "../data/ProductsToko";

function Tokokedua() {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={ProductsToko}
      renderItem={({ item }) => (
        <Pressable>
        <Box mt={3}>
        <HStack
              p={0}
              alignItems="center"
              bg={Colors.white}
              shadow={1}
              rounded={10}
              overflow="hidden"
            >
        <VStack w="20%" px={2}>
        <Image
          source={require("../../assets/water.png")}
            resizeMode="contain"
            ml={0}
            size="20"
            alt=""
        />
        </VStack>
        <Text  color={Colors.black} bold fontSize={15}
        >Air 3X Sehari</Text>
        <Text  color={Colors.black} bold fontSize={15} ml={31}
        >3-5 Tahun Usia</Text>
        </HStack>
        </Box>
          <Box mt={3}>
            <HStack
              p={5}
              alignItems="center"
              bg={Colors.white}
              shadow={1}
              rounded={10}
              overflow="hidden"
            >
              <Center w="25%">
              </Center>
              <VStack w="60%" px={2}>
                <Text isTruencated color={Colors.black} bold fontSize={15}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed 
                dictum lacus purus. Tristique accumsan, 
                nibh non blandit libero, sit aenean amet tellus. Eleifend eu cras accumsan, ultrices amet, vitae. Convallis congue facilisis ultrices vel aliquet maecenas lacus pulvinar. Amet integer ultrices nibh libero eu lectus. Vitae diam, et, orci mi tortor sapien. Eget nulla pharetra et nec bibendum cursus odio. Erat in proin platea neque. Egestas varius et neque sagittis, pretium eget vitae. Tempor egestas vel ut interdum. Netus vestibulum, commodo odio donec id nulla purus. Aenean malesuada tellus et facilisis nisi nisl. In eu et dignissim pretium ligula. Blandit vulputate vitae egestas amet.
                </Text>
              </VStack>
            </HStack>
          </Box>
        </Pressable>
      )}
    />
  );
}

export default Tokokedua;