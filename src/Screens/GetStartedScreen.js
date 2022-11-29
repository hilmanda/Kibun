import React from 'react'
import {Box, Center, Image, Text, VStack } from 'native-base';
import Colors from '../color';
import FontName from '../fonts/fontName';
import Buttone from '../Components/Buttone';
function GetStartedScreen() {


  return (
    <Box flex={1} bg={Colors.green}>
      <Center w="full">
        <Image source={require("../../assets/front_picture.png")}
          resizeMode="contain"
          mt={90}
          size="360"
          alt="front-image"
        />
        {/* <FontAwesome5>Enjoy Your Garden</FontAwesome5> */}
        <Text 
          fontFamily={FontName.poppins700} 
          fontSize={50} 
          textAlign="center" 
          color={Colors.white}
          mb={60}
        >
          Enjoy Your Garden
        </Text>
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <Buttone bg={Colors.white} color={Colors.green}>
          Get Started
        </Buttone>
      </VStack>

    </Box>
  )
}

export default GetStartedScreen
