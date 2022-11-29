import { Button } from 'native-base'
import React from 'react'

function Buttone({mt,bg,color,children,onPress}) {
  return (
    <Button 
        w={200}
        h={55} 
        mt={mt} 
        rounded="full" 
        bg={bg}
        _text={{
            color:color, 
            fontWeight:'bold',
            fontSize:"lg",
        }}
        _pressed={{bg:color}}
        onPress={onPress}
    >
        {children}
    </Button>
  );
}

export default Buttone;
