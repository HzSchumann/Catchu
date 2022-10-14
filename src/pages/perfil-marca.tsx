import {
    Text,
    Flex,
    Box,
    Icon,
    Heading,
    Button,
    Stack,
    useColorModeValue,
    Grid,
    GridItem,
    Image,
    IconButton,
    Center,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { LogedHeader } from '../components/logedHeader/index';
import { AiFillInstagram} from "react-icons/ai";


export default function UserProfileEdit(): JSX.Element {
    const router = useRouter();
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
                mt='2rem'
            >
                <GridItem rowSpan={1}>
                    
                        <Flex bg="gray" borderRadius="lg" h='250px' w='250px'>
                            <Image
                                rounded='md'
                                objectFit="cover"
                                boxSize="100%"
                                src={
                                    '/images/SportStore.png'
                                }
                            />
                        </Flex>
                    
                    <Box>
                        <Flex>
                            <Heading>SportStore</Heading>
                        </Flex>
                        <Flex>
                            <Box display="flex">
                                <Icon mt="2px" as={AiFillInstagram} w={5} h={5} mr="4px" color="bluePrimary.500"></Icon>
                                <Text>@sportstore</Text>
                            </Box>
                        </Flex>
                    </Box>
                </GridItem>

                <GridItem colSpan={4}>

                    <Box height="auto" boxShadow='xs' rounded='md' p="2rem">
                        <Heading size='sm' mb="1rem">Sobre a empresa:</Heading>
                        <Text>
                            A SportStore nasceu para facilitar a vidas das pessoas por meio de acessórios funcionais e tecnológicos.

                            Estamos a procura de pessoas que queiram praticidade e qualidade. Enviamos peças para os influencer e cupons de desconto para seus seguidores.
                        </Text>
                    </Box>

                    <Box>
                    <Stack
                alignItems={'center'}
                justifyContent={'center'}
                >

                    <Stack
                        width={'100%'}
                        mt={'2rem'}
                        direction={'row'}
                        >
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
                    </Box>

                    <Grid templateColumns='repeat(3, 1fr)' mt='2rem'>
                        <GridItem w='300px' h='300px' mb='1rem'>
                            <Flex bg="gray" borderRadius="lg" >
                                    <Image
                                        w='300px' h='300px'
                                        rounded='md'
                                        objectFit="cover"
                                        
                                        src={
                                            'https://images.pexels.com/photos/4115034/pexels-photo-4115034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                        }
                                    />
                            </Flex>
                        </GridItem>

                        <GridItem w='300px' h='300px' mb='1rem'>
                            <Flex bg="gray" borderRadius="lg" >
                                    <Image
                                        w='300px' h='300px'
                                        rounded='md'
                                        objectFit="cover"
                                        
                                        src={
                                            'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                        }
                                    />
                            </Flex>
                        </GridItem>

                        <GridItem w='300px' h='300px' mb='1rem'>
                            <Flex bg="gray" borderRadius="lg" >
                                    <Image
                                        w='300px' h='300px'
                                        rounded='md'
                                        objectFit="cover"
                                        
                                        src={
                                            'https://images.pexels.com/photos/11820084/pexels-photo-11820084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                        }
                                    />
                            </Flex>
                        </GridItem>

                        <GridItem w='300px' h='300px' mb='1rem'>
                            <Flex bg="gray" borderRadius="lg" >
                                    <Image
                                        w='300px' h='300px'
                                        rounded='md'
                                        objectFit="cover"
                                        
                                        src={
                                            'https://images.pexels.com/photos/8609130/pexels-photo-8609130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                        }
                                    />
                            </Flex>
                        </GridItem>

                        
                    </Grid>


                </GridItem>
            </Grid>

        </>
    );
}