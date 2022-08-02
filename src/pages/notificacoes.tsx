import { Heading, Flex, Avatar, Badge, Text, Box } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import { Button, ButtonGroup, Center } from '@chakra-ui/react'
import { LogedHeader } from "../components/logedHeader/index";


export default function Notificacoes() {
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
                        <Heading text-align='center'>Suas Notificações</Heading>
                    </Center>
                </GridItem>

                <GridItem colSpan={4}>
                    <Flex ml='2rem' mt='2rem' p="4" mr="4" boxShadow='xs' rounded='md' bg='white'>
                        <Avatar src='https://bit.ly/sage-adebayo' />
                        <Box ml='2rem' >
                            <Text fontWeight='bold'>
                                Segun Adebayo
                                <Badge ml='1' colorScheme='green'>
                                    New
                                </Badge>
                            </Text>
                            <Text fontSize='sm'>UI Engineer</Text>
                        </Box>
                            <Button colorScheme='blue'>Ver proposta</Button>   
                    </Flex>
                    <Flex ml='2rem'  p="4" mr="4" border='1px' borderColor='gray.200' borderRadius="6px">
                        <Avatar src='https://bit.ly/sage-adebayo' />
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
                    <Flex ml='2rem'  p="4" mr="4" border='1px' borderColor='gray.200' borderRadius="6px">
                        <Avatar src='https://bit.ly/sage-adebayo' />
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
                    <Flex ml='2rem'  p="4" mr="4" border='1px' borderColor='gray.200' borderRadius="6px">
                        <Avatar src='https://bit.ly/sage-adebayo' />
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