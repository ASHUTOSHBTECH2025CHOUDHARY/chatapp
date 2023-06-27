import { Box, Button, HStack, Heading, Input, Stack, VStack, Text } from '@chakra-ui/react';
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column','row']}>
                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading size={'md'} textTransform={'uppercase'}>
                        Subscribe to get updates
                    </Heading>
                
                    <HStack borderBottom={'2px solid white'}>

                        <Input placeholder='Enter Email here...' border={'none'} borderRadius={'none'} focusBorderColor='none' outline={'none'}/>
                        <Button p={'0'}
                            colorScheme='purple'
                            borderRadius={"0 20px 20px 0px"}
                            variant={'ghost'}
                        >
                            <AiOutlineSend size={'20'}/>
                        </Button>
                    </HStack>
                </VStack>
                <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
                <Heading textTransform={'uppercase'} alignItems={'center'}>
                    VIDEOS HUB
                </Heading>
                <Text>
                    All right recived
                </Text>
                </VStack>
                <VStack w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
                            Social Media
                    </Heading>
                    <Button variant={'Link'} colorScheme='white'>
                        <a href='https://youtube.com' target={'_blank'}>YouTube</a>
                    </Button>
                    <Button variant={'Link'} colorScheme='white'>
                    <a href='https://instagram.com' target={'_blank'}>InstaGram</a>
                    </Button>
                    <Button variant={'Link'} colorScheme='white'>
                    <a href='#' target={'_blank'}>GitHub</a>
                    </Button>
                </VStack>
        </Stack>
    </Box>
  )
}

export default Footer;