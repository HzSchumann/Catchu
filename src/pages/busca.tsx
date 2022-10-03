import CardPerfil from '../components/Card/card';
import Carrossel from '../components/Carrossel/index';

import { LogedHeader } from '../components/logedHeader/index';
import { preencherDados } from "../pages/login";
import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Box,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import router from '../../node_modules/next/router';







export default function Busca() {

    console.log('teste ' + preencherDados.idUser);
    return (
        <>
            <LogedHeader>
            </LogedHeader>
            <h6 id='message1' ></h6>
            <Box p="2rem">
                <Heading fontSize={'3xl'} font-weight="bolder" mb="1rem">
                    Esporte
                </Heading>

                <CardPerfil>
                </CardPerfil>

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
                                    '/images/maratona.png'
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
                                Maratona
                            </Heading>
                            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                                @maratona
                            </Text>
                            <Text
                                textAlign={'left'}
                                color={useColorModeValue('gray.700', 'gray.400')}>
                                A Maratona realiza os principais eventos de running do Brasil.
                            </Text>
                            <Stack align={'center'} justify={'left'} direction={'row'} mt={6}>
                                <Badge
                                    px={2}
                                    py={1}
                                    bg={useColorModeValue('gray.50', 'gray.800')}
                                    fontWeight={'400'}>
                                    #Corrida
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
                                    '/images/drive.png'
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
                                Drive Spin
                            </Heading>
                            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                                @drivespin
                            </Text>
                            <Text
                                textAlign={'left'}
                                color={useColorModeValue('gray.700', 'gray.400')}>
                                A Drive Spin vendo os melhores produtos de tênis.
                            </Text>
                            <Stack align={'center'} justify={'left'} direction={'row'} mt={6}>
                                <Badge
                                    px={2}
                                    py={1}
                                    bg={useColorModeValue('gray.50', 'gray.800')}
                                    fontWeight={'400'}>
                                    #Tênis
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
                                    '/images/atividade.png'
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
                                Atividade
                            </Heading>
                            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                                @atividade
                            </Text>
                            <Text
                                textAlign={'left'}
                                color={useColorModeValue('gray.700', 'gray.400')}>
                                A Atividade traz produtos para ter mais conforto e estilo nos seus treinos.
                            </Text>
                            <Stack align={'center'} justify={'left'} direction={'row'} mt={6}>
                                <Badge
                                    px={2}
                                    py={1}
                                    bg={useColorModeValue('gray.50', 'gray.800')}
                                    fontWeight={'400'}>
                                    #Treino
                                </Badge>
                                <Badge
                                    px={2}
                                    py={1}
                                    bg={useColorModeValue('gray.50', 'gray.800')}
                                    fontWeight={'400'}>
                                    #Academia
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
                                    '/images/runs.png'
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
                                Runs
                            </Heading>
                            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                                @runs
                            </Text>
                            <Text
                                textAlign={'left'}
                                color={useColorModeValue('gray.700', 'gray.400')}>
                                A Runs traz produtos para ter mais performance e estilo nas suas corridas.
                            </Text>
                            <Stack align={'center'} justify={'left'} direction={'row'} mt={6}>
                                <Badge
                                    px={2}
                                    py={1}
                                    bg={useColorModeValue('gray.50', 'gray.800')}
                                    fontWeight={'400'}>
                                    #Corrida
                                </Badge>
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

            </Box>
        </>
    );
}