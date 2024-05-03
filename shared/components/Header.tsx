import React from 'react'
import { Box, Stack,Text } from '@chakra-ui/react'

function Header() {
  return (
    <Box 
    height="100px" 
    p="12px" 
    alignItems="center"
    display="flex" 
    justifyContent={'center'} 
    backgroundColor="#02367b">
        <Text as="h1" fontSize="4xl" color="white">
            To Do App With Redux Toolkit
        </Text>
        

        <Stack direction='row' spacing={4} align='center' as='ul'>
  
  
  </Stack> 
  
  

        </Box>
  )
}

export default Header
