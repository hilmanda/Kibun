import React from "react";
import { Box, Center, FlatList, Image, Pressable, Text } from "native-base";
import Colors from "../color";
import products from "../data/Products";

function TrenBeranda() {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={products}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <Pressable>
          <Box
            mt={3}
            mr={3}
            p={2}
            alignItems="center"
            bg={Colors.white}
            shadow={1}
            rounded={10}
            overflow="hidden"
          >
            <Center w="full">
              <Image
                source={item.image}
                alt={item.name}
                w={24}
                h={24}
                resizeMode="contain"
                bg={Colors.lightGray}
                rounded={10}
              />
            </Center>
            <Text color={Colors.black} bold fontSize={15}>
              {item.name}
            </Text>
          </Box>
        </Pressable>
      )}
    />
  );
}

export default TrenBeranda;
