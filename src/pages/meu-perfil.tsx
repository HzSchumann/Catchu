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
        <LogedHeader></LogedHeader>
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
                                    'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                }
                            />
                        </Flex>
                    
                    <Box>
                        <Flex>
                            <Heading>Lucas Leão</Heading>
                        </Flex>
                        <Flex>
                            <Box display="flex">
                                <Icon mt="2px" as={AiFillInstagram} w={5} h={5} mr="4px" color="bluePrimary.500"></Icon>
                                <Text>@lukasleao</Text>
                            </Box>
                        </Flex>
                    </Box>
                </GridItem>

                <GridItem colSpan={4}>

                    <Box height="auto" boxShadow='xs' rounded='md' p="2rem">
                        <Heading size='sm' mb="1rem">Sobre mim:</Heading>
                        <Text>
                            Sou influencer de moda masculina, foco no estilo mais street.
                                <br></br>
                            Estou a procura de marcas de moda para divulgação e patrocínio. 
                        </Text>
                    </Box>

                    

                    <Grid templateColumns='repeat(3, 1fr)' mt='2rem'>
                        <GridItem w='300px' h='300px' mb='1rem'>
                            <Flex bg="gray" borderRadius="lg" >
                                    <Image
                                        w='300px' h='300px'
                                        rounded='md'
                                        objectFit="cover"
                                        
                                        src={
                                            'https://images.pexels.com/photos/4124212/pexels-photo-4124212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                                            'https://images.pexels.com/photos/66757/pexels-photo-66757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                                            'https://images.pexels.com/photos/3757012/pexels-photo-3757012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
                                            'https://images.pexels.com/photos/2766298/pexels-photo-2766298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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