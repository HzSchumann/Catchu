import { Grid, GridItem } from '@chakra-ui/react'
import { LogedHeader } from "../components/logedHeader/index";

import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import router from '../../node_modules/next/router';



export default function Propostas() {
    return (

        <>
            <LogedHeader></LogedHeader>
            <Grid
                pl="2rem"
                pr="2rem"
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
                mt="2rem"
            >
                <GridItem rowSpan={2}>
                    <Center h='200px' mr="4" boxShadow='xs' rounded='md' bg='white' text-align='center'>
                        <Heading >Aprenda</Heading>
                    </Center >
                </GridItem>

                <GridItem colSpan={4}>
                <Center pb="1rem">
                    <Stack
                        borderWidth="1px"
                        borderRadius="lg"
                        w='100%'
                        height='200px'
                        direction={{ base: 'column', md: 'row' }}
                        bg={useColorModeValue('white', 'gray.900')}
                        boxShadow={'2xl'}
                        padding={4}>
                        <Flex bg="gray" borderRadius="lg"  w='250px'>
                            <Image
                                borderRadius="lg"
                                onClick={() => router.push('/perfil-marca')}
                                objectFit="cover"
                                boxSize="100%"
                                src={
                                    'https://images.pexels.com/photos/261679/pexels-photo-261679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                }
                            />
                        </Flex>
                        <Stack
                            flex={1}
                            flexDirection="column"
                            justifyContent="Center"
                            alignItems="left"
                            p={1}
                            pt={2}>
                            <Heading fontSize={'2xl'} fontFamily={'body'}>
                                Fechando Parceria com Contrato
                            </Heading>
                            <Text
                                textAlign={'left'}
                                color={useColorModeValue('gray.700', 'gray.400')}>
                                Saiba quando é um contrato justo para ambas as partes.
                            </Text>
                        </Stack>
                        <Stack
                        alignItems={'center'}
                        justifyContent={'center'}
                        >

                            <Stack
                                width={'300px'}
                                mt={'2rem'}
                                direction={'row'}
                                >
                                <Button
                                    onClick={() => router.push('/contract-course')}
                                    flex={1}
                                    fontSize={'sm'}
                                    bg={'bluePrimary.500'}
                                    color={'white'}
                                    boxShadow={
                                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                    }
                                    _hover={{
                                        bg: 'bluePrimary.600',
                                    }}
                                    _focus={{
                                        bg: 'bluePrimary.600',
                                    }}>
                                    Acessar Conteúdo
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Center>
                    
                </GridItem>

                <GridItem colSpan={4}>
                <Center pb="1rem">
                    <Stack
                        borderWidth="1px"
                        borderRadius="lg"
                        w='100%'
                        height='200px'
                        direction={{ base: 'column', md: 'row' }}
                        bg={useColorModeValue('white', 'gray.900')}
                        boxShadow={'2xl'}
                        padding={4}>
                        <Flex bg="gray" borderRadius="lg" w='250px'>
                            <Image
                                borderRadius="lg"
                                onClick={() => router.push('/perfil-marca')}
                                objectFit="cover"
                                boxSize="100%"
                                src={
                                    'https://images.pexels.com/photos/669622/pexels-photo-669622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                }
                            />
                        </Flex>
                        <Stack
                            flex={1}
                            flexDirection="column"
                            justifyContent="Center"
                            alignItems="left"
                            p={1}
                            pt={2}>
                            <Heading fontSize={'2xl'} fontFamily={'body'}>
                                Alavancando os Números nas Redes Sociais
                            </Heading>
                            <Text
                                textAlign={'left'}
                                color={useColorModeValue('gray.700', 'gray.400')}>
                                Aprenda algumas práticas para alavancar seus números nas principais redes sociais.
                            </Text>
                        </Stack>
                        <Stack
                        alignItems={'center'}
                        justifyContent={'center'}
                        >

                            <Stack
                                width={'300px'}
                                mt={'2rem'}
                                direction={'row'}
                                >
                                <Button
                                    onClick={() => router.push('/numeros-course')}
                                    flex={1}
                                    fontSize={'sm'}
                                    bg={'bluePrimary.500'}
                                    color={'white'}
                                    boxShadow={
                                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                    }
                                    _hover={{
                                        bg: 'bluePrimary.600',
                                    }}
                                    _focus={{
                                        bg: 'bluePrimary.600',
                                    }}>
                                    Acessar Conteúdo
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Center>
                    
                </GridItem>
            </Grid>

        </>
    )
}