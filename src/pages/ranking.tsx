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
            <LogedHeader>
            </LogedHeader>
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
                        <Heading >Ranking</Heading>
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
                        <Flex bg="gray" borderRadius="lg">
                            <Image
                                
                                onClick={() => router.push('/perfil-marca')}
                                objectFit="cover"
                                boxSize="100%"
                                src={
                                    '/images/SportStore.png'
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
                                SportStore
                            </Heading>
                            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                                @sportstore
                            </Text>
                            <Text
                                textAlign={'left'}
                                color={useColorModeValue('gray.700', 'gray.400')}>
                                A SportStore nasceu para facilitar a vidas das pessoas por meio de acessórios funcionais e tecnológicos.
                            </Text>
                            <Stack align={'center'} justify={'left'} direction={'row'} mt={6}>
                                <Badge
                                    px={2}
                                    py={1}
                                    bg={useColorModeValue('gray.50', 'gray.800')}
                                    fontWeight={'400'}>
                                    #Estilo
                                </Badge>
                                <Badge
                                    px={2}
                                    py={1}
                                    bg={useColorModeValue('gray.50', 'gray.800')}
                                    fontWeight={'400'}>
                                    #Esporte
                                </Badge>
                                <Badge
                                    px={2}
                                    py={1}
                                    bg={useColorModeValue('gray.50', 'gray.800')}
                                    fontWeight={'400'}>
                                    #Performance
                                </Badge>
                            </Stack>

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
                                    onClick={() => router.push('/perfil-marca')}
                                    flex={1}
                                    fontSize={'sm'}
                                    _focus={{
                                        bg: 'gray.200',
                                    }}>
                                    Perfil
                                </Button>
                                <Button
                                    onClick={() => router.push('/propostas')}
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
                                    Enviar Proposta
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
                        <Flex bg="gray" borderRadius="lg">
                            <Image
                                
                                onClick={() => router.push('/perfil-marca')}
                                objectFit="cover"
                                boxSize="100%"
                                src={
                                    '/images/SportStore.png'
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
                                SportStore
                            </Heading>
                            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                                @sportstore
                            </Text>
                            <Text
                                textAlign={'left'}
                                color={useColorModeValue('gray.700', 'gray.400')}>
                                A SportStore nasceu para facilitar a vidas das pessoas por meio de acessórios funcionais e tecnológicos.
                            </Text>
                            <Stack align={'center'} justify={'left'} direction={'row'} mt={6}>
                                <Badge
                                    px={2}
                                    py={1}
                                    bg={useColorModeValue('gray.50', 'gray.800')}
                                    fontWeight={'400'}>
                                    #Estilo
                                </Badge>
                                <Badge
                                    px={2}
                                    py={1}
                                    bg={useColorModeValue('gray.50', 'gray.800')}
                                    fontWeight={'400'}>
                                    #Esporte
                                </Badge>
                                <Badge
                                    px={2}
                                    py={1}
                                    bg={useColorModeValue('gray.50', 'gray.800')}
                                    fontWeight={'400'}>
                                    #Performance
                                </Badge>
                            </Stack>

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
                                    onClick={() => router.push('/perfil-marca')}
                                    flex={1}
                                    fontSize={'sm'}
                                    _focus={{
                                        bg: 'gray.200',
                                    }}>
                                    Perfil
                                </Button>
                                <Button
                                    onClick={() => router.push('/propostas')}
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
                                    Enviar Proposta
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