import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Radio,
    RadioGroup,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import React from 'react';
import { useRouter } from 'next/router';
import { Header } from '../components/Header/index';

export default function Cadastro() {
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = React.useState('1')
    const router = useRouter();

    return (
        <>
        <Header>
        </Header>
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            backgroundImage={"/images/loginbg.jpg"}
            bgPosition={'center'}
            bgRepeat="no-repeat"
        >
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} color={'white'}>
                            Cadastro
                        </Heading>
                        {/* <Text fontSize={'lg'} color={'gray.600'}>
        to enjoy all of our cool features ✌️
    </Text> */}
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>


                            <FormControl id="firstName" isRequired>
                                <FormLabel>Nome</FormLabel>
                                <Input type="text" />
                            </FormControl>


                            <FormControl id="email" isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Senha</FormLabel>
                                <InputGroup>
                                    <Input type={showPassword ? 'text' : 'password'} />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>

                            <RadioGroup onChange={setValue} value={value}>
                                <Stack direction='row'>
                                    <Radio value='1'>Sou Influencer</Radio>
                                    <Radio value='2'>Sou Patrocinador</Radio>
                                </Stack>
                            </RadioGroup>

                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'blue.400'}
                                    color={'white'}
                                    onClick={() => router.push('/home-page')}
                                    _hover={{
                                        bg: 'blue.500',
                                        
                                    }}>
                                    Cadastrar
                                </Button>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    Já tem conta?<Link color={'blue.400'} onClick={() => router.push('/login')}>Login</Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex></>
    );
}