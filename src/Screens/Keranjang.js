import React from "react";
import { Box, Text, Center, VStack, Pressable } from "native-base";
import Colors from "../color";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Buttone from "../Components/Buttone";

function Keranjang({ navigation }) {
  return (
    <Box flex={1} safeAreaTop bg={Colors.green} py={10}>
      <VStack pl={5}>
        <Pressable onPress={() => navigation.navigate("Beranda")}>
          <AntDesign pb={-5} name="arrowleft" size={24} color={Colors.white} />
        <Center>
        <Text
            style={{
              fontSize: 20,
              color: Colors.white,
              fontWeight: '400',

            }}>
            Detail Pemesanan
        </Text>
        </Center>
        </Pressable>

      </VStack>
      {/* <Center pb={5}>
      </Center> */}
      <Box h="full" bg={Colors.lightGray} borderTopRadius={15} px={5} marginTop={30}>
        <Text
            style={{
              fontSize: 20,
              color: Colors.black,
              fontWeight: '400',
              marginTop: 12,

            }}>
            Keranjang Saya
        </Text>
        <Text
            style={{
              fontSize: 18,
              color: Colors.black,
              fontWeight: '400',
              marginTop: 20,

            }}>
            Alamat Pengiriman
        </Text>
        <EvilIcons pb={-5} name="location" size={24} color="black" /> Institut Teknologi Sumatera, Jalan Way Huwi, Lampung Selatan

        <Text
            style={{
              fontSize: 18,
              color: Colors.black,
              fontWeight: '400',
              marginTop: 20,

            }}>
            Jasa Pengiriman
        </Text>
        <FontAwesome5 name="car-side" size={24} color="black" /> Standar Kibun

        <Text
            style={{
              fontSize: 18,
              color: Colors.black,
              fontWeight: '400',
              marginTop: 20,

            }}>
            Metode Pembayaran
        </Text>

        <Text
            style={{
              fontSize: 18,
              color: Colors.black,
              fontWeight: '400',
              marginTop: 40,

            }}>
            Rincian Pembayaran
        </Text>
        <Text
            style={{
              fontSize: 15,
              color: Colors.black,
              fontWeight: '400',
              marginTop: 15,

            }}>
            Subtotal
        </Text>

        <Text
            style={{
              fontSize: 15,
              color: Colors.black,
              fontWeight: '400',
              marginTop: 15,

            }}>
            Ongkir
        </Text>

        <Text
            style={{
              fontSize: 15,
              color: Colors.black,
              fontWeight: '400',
              marginTop: 15,

            }}>
            Total
        </Text>

        <Buttone
            mt={15}
            bg={Colors.white}
            color={Colors.green}
            w="100%"
            onPress={() => navigation.navigate("Sukses")}
          >
            BUY
          </Buttone>
      </Box>
    </Box>
  );
}

export default Keranjang;