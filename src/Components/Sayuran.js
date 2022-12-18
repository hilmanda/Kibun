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
import products from "../data/Products";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";

function Sayuran({ navigation }) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={products}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigation.navigate("")}>
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
                  source={item.image}
                  alt={item.name}
                  w="full"
                  h={24}
                  resizeMode="contain"
                  bg={Colors.lightGray}
                  rounded={10}
                />
              </Center>
              <VStack w="60%" px={2}>
                <Text isTruencated color={Colors.black} bold fontSize={15}>
                  {item.name}
                </Text>

                <Text isTruencated color={Colors.gray} fontSize={12}>
                  <FontAwesome5 name="clock" size={12} color="black" />
                  {" " + item.age}
                </Text>
                <Text isTruencated color={Colors.gray} fontSize={12}>
                  <Ionicons name="water-outline" size={12} color="black" />
                  {" " + item.water}
                </Text>
              </VStack>
              <Text isTruencated color={Colors.black} bold fontSize={15}>
                <FontAwesome name="heart" size={24} color="red" />
                {" " + item.rating}
              </Text>
            </HStack>
          </Box>
        </Pressable>
      )}
    />
  );
}

export default Sayuran;
