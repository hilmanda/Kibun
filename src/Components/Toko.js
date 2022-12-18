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
import Buttone from "../Components/Buttone";

function Toko({ navigation }) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={ProductsToko}
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
                <Text isTruencated color={Colors.gray} bold fontSize={15}>
                  {item.spesifikasi}
                </Text>
                <Text isTruencated color={Colors.gray} bold fontSize={15}>
                  {item.spesifikasisekop}
                </Text>
                <Text isTruencated color={Colors.gray} bold fontSize={15}>
                  {item.spesifikasipot}
                </Text>
                <Text isTruencated color={Colors.gray} bold fontSize={15}>
                  {item.spesifikasi}
                </Text>
                <Text isTruencated color={Colors.gray} bold fontSize={15}>
                  {item.spesifikasi}
                </Text>
                <Text isTruencated color={Colors.gray} bold fontSize={15}>
                  {item.spesifikasi}
                </Text>
                <Text isTruencated color={Colors.gray} bold fontSize={15}>
                  {item.spesifikasi}
                </Text>
                <Text isTruencated color={Colors.black} mt={10} bold fontSize={15}>
                  {item.price}
                </Text>
              </VStack>
            </HStack>
          </Box>

          <Box mt={3}>
            <HStack
              p={2}
              alignItems="center"
              bg={Colors.white}
              shadow={1}
              rounded={10}
              overflow="hidden"
            >
              <Center w="25%">
                <Image
                  source={item.images}
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
                  {item.names}
                </Text>
                <Text isTruencated color={Colors.black} mt={10} bold fontSize={15}>
                  {item.price}
                </Text>
              </VStack>
            </HStack>
          </Box>
        
        <Box mt={3}>
            <HStack
              p={2}
              alignItems="center"
              bg={Colors.white}
              shadow={1}
              rounded={10}
              overflow="hidden"
            >
              <Center w="25%">
                <Image
                  source={item.images}
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
                  {item.names}
                </Text>
                <Text isTruencated color={Colors.black} mt={10} bold fontSize={15}>
                  {item.price}
                </Text>
              </VStack>
            </HStack>
        </Box>
    
        <Box mt={3}>
            <HStack
              p={2}
              alignItems="center"
              bg={Colors.white}
              shadow={1}
              rounded={10}
              overflow="hidden"
            >
              <Center w="25%">
                <Image
                  source={item.images}
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
                  {item.names}
                </Text>
                <Text isTruencated color={Colors.black} mt={10} bold fontSize={15}>
                  {item.price}
                </Text>
              </VStack>
            </HStack>
          </Box>
        </Pressable>
      )}
    />
  );
}

export default Toko;