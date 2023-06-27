import { Box ,Container,Heading,Image, Stack, Text} from '@chakra-ui/react';
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
import img7 from "../assets/img101.webp"

const MyCarousel=()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showArrows={false} showStatus={false} showThumbs={false}>
        <Box w={'full'} h={'100vh'}>
            <Image src={img1} />
            <Heading bg={'blackAlpha.600'} color={'white'} position={'absolute'} left={'50%'} top={'50%'} transform={'translate(-50%,-50%)'} textTransform={'uppercase'} p={'4'} size={'4xl'}>
                Watch the future
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img4} />
            <Heading bg={'blackAlpha.600'} color={'white'} position={'absolute'} left={'50%'} top={'50%'} transform={'translate(-50%,-50%)'} textTransform={'uppercase'} p={'4'} size={'4xl'}>
                Gaming is the future
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img2} />
            <Heading bg={'blackAlpha.600'} color={'white'} position={'absolute'} left={'50%'} top={'50%'} transform={'translate(-50%,-50%)'} textTransform={'uppercase'} p={'4'} size={'4xl'}>
                Gaming on Console
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img3} />
            <Heading bg={'blackAlpha.600'} color={'white'} position={'absolute'} left={'50%'} top={'50%'} transform={'translate(-50%,-50%)'} textTransform={'uppercase'} p={'4'} size={'4xl'}>
                Knight life is cool
            </Heading>
        </Box>

    </Carousel>
)

const Home = () => {
  return(
  <Box >
    <MyCarousel/>
    <Container maxW={'container.xl'} minH={'100vh'} p="16">
      <Heading textTransform={'uppercase'} py={2} w={'fit-content'} borderBottom={'2px solid black'} margin={'auto'}>
        Services
      </Heading>
      <Stack  h="full" p={'4'} alignItems={'center'} direction={['column','row']}>
        <Image src={img7} h={['40','400']} filter={'hue-rotate(-130deg)'}/>
        <Text letterSpacing={'widest'} lineHeight={'190%'} padding={['4','16']} textAlign={'center'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, earum soluta? Similique exercitationem corrupti obcaecati magni nulla voluptate alias, commodi placeat ipsum facere fugiat facilis soluta possimus eligendi pariatur? Asperiores veniam mollitia tempore consequatur blanditiis nisi ut sequi molestiae, voluptates dolore reiciendis aliquid aut aliquam eos quibusdam ducimus quo accusamus. Nam cum eaque perspiciatis reiciendis labore ut corporis alias minima!
        </Text>
      </Stack>
    </Container>
  </Box>);
}

export default Home;