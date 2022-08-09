import { Heading, Flex, Avatar, Badge, Text, Box } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import { Button, ButtonGroup, Center } from '@chakra-ui/react'
import { LogedHeader } from "../components/logedHeader/index";


export default function Propostas() {
    return (

        <>
            <LogedHeader>
            </LogedHeader>
            <Grid
                h='100%'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
            >
                <GridItem rowSpan={2} ml='2rem' mt='2rem' h='200px' mr="4" boxShadow='xs' rounded='md' bg='white' >
                    <Center>
                        <Heading text-align='center'>Ranking</Heading>
                    </Center>
                </GridItem>

                <GridItem colSpan={4}>
                    <Flex ml='2rem' mt='2rem' p="4" mr="4" boxShadow='xs' rounded='md' bg='white'>
                        <Text fontWeight='bold' display='center'>
                            1
                        </Text>
                        <Avatar src='https://bit.ly/sage-adebayo' />
                        <Box ml='2rem' >
                            <Text fontWeight='bold'>
                                Segun Adebayo
                                <Badge ml='1' colorScheme='blue'>
                                    top 1
                                </Badge>
                            </Text>
                            <Text fontSize='sm'>Cozinheiro</Text>
                        </Box>
                            <Button colorScheme='blue'>Ver proposta</Button>   
                    </Flex>
                    <Flex ml='2rem'  p="4" mr="4" border='1px' borderColor='gray.200' borderRadius="6px">
                        <Text fontWeight='bold' display='center'>
                            2
                        </Text>
                        <Avatar src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
                        <Box ml='2rem' >
                            <Text fontWeight='bold'>
                                Sara Guedes
                                <Badge ml='1' colorScheme='purple'>
                                    top 2
                                </Badge>
                            </Text>
                            <Text fontSize='sm'>Atleta</Text>
                        </Box>
                    </Flex>
                    <Flex ml='2rem'  p="4" mr="4" border='1px' borderColor='gray.200' borderRadius="6px">
                        <Text fontWeight='bold' display='center' color='blue '>
                            3
                        </Text>
                        <Avatar src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
                        <Box ml='2rem' >
                            <Text fontWeight='bold'>
                                Lucas Oliveira
                                <Badge ml='1' colorScheme='pink'>
                                    top 3
                                </Badge>
                            </Text>
                            <Text fontSize='sm'>Programador</Text>
                        </Box>
                    </Flex>
                    <Flex ml='2rem'  p="4" mr="4" border='1px' borderColor='gray.200' borderRadius="6px">
                        <Text fontWeight='bold' display='center'>
                            4
                        </Text>
                        <Avatar src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
                        <Box ml='2rem' >
                            <Text fontWeight='bold'>
                                Segun Adebayo
                                <Badge ml='1' colorScheme='green'>
                                    New
                                </Badge>
                            </Text>
                            <Text fontSize='sm'>UI Engineer</Text>
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>

        </>
    )
}