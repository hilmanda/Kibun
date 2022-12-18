import React from "react";
import { Box, Center, Text, VStack } from "native-base";
import Colors from "../color";
import FontName from "../fonts/fontName";
import Buttone from "../Components/Buttone";
import { AntDesign } from '@expo/vector-icons';

function PembayaranSukses({ navigation }) {
  return (
    <Box flex={1} bg={Colors.green}>
      <Center w="full" mt={90}>
        <AntDesign name="checkcircle" size={340} color="black" />
        {/* <FontAwesome5>Enjoy Your Garden</FontAwesome5> */}
        <Text
          fontFamily={FontName.poppins700}
          fontSize={50}
          textAlign="center"
          color={Colors.white}
          mb={60}
        >
          Pembayaran Sukses
        </Text>
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <Buttone
          bg={Colors.white}
          color={Colors.green}
          onPress={() => navigation.navigate("Beranda")}
        >
          Selesai
        </Buttone>
      </VStack>
    </Box>
  );
}

export default PembayaranSukses;