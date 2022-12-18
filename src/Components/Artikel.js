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
import DataArtikel from "../data/DataArtikel";
import Buttone from "../Components/Buttone";

function Artikel({ navigation }) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={DataArtikel}
      renderItem={({ item }) => (
        <Pressable>
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
                <Image
                  source={item.image}
                  alt={item.name}
                  w="full"
                  h={20}
                  resizeMode="contain"
                  bg={Colors.lightGray}
                  rounded={10}
                />
              </Center>
              <VStack w="60%" px={2}>
                <Text isTruencated color={Colors.black} bold fontSize={15}>
                  {item.name}
                </Text>
              </VStack>
            </HStack>
          </Box>
        </Pressable>
      )}
    />
    
  );
}

export default Artikel;