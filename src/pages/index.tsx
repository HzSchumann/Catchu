import { Stack } from '@chakra-ui/react'
import { Flex, Heading, Text, useBreakpointValue, Button, Image } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Header } from '../components/Header/index';

export default function Home() {
  
  return (
    <>
      <Header>
      </Header>

      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'bluePrimary.500',
                  zIndex: -1,
                }}
              >
                <br />{' '}
                <Text color={'bluePrimary.500'} as={'span'}>
                  Olá, bem-vindo(a)
                </Text>{' '}
                Encontre ajuda para seu sucesso
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded="6px"
                size="lg"
                bg={'bluePrimary.500'}
                color={'white'}
                _hover={{
                  bg: 'bluePrimary.600',
                }}>
                Saiba mais!
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src="/images/homeimg.svg"
          />
      </Flex>

      </Stack>

      {/* <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Olá, bem-vindx</span>
          <h1>Encontre ajuda para seu <span>sucesso</span>!</h1>
          <SaibaMaisButton />
          
        </section>

        <img src="/images/homeimg.svg" alt="Garota Influencer"/>
      </main> */}
    </>
  )
}
