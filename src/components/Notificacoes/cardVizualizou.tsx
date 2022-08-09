import { Flex, Avatar, Spacer, Text, Box } from "@chakra-ui/react";
import { Button} from '@chakra-ui/react'



export default function CardVizualizou() {
    return (

        <>   
                    <Flex ml='2rem' p="4" mr="4" boxShadow='xs' rounded='md' bg='white'>
                        <Avatar src='https://seeklogo.com/images/C/Coca-Cola-logo-56985C1769-seeklogo.com.png' />
                        <Box ml='2rem'>
                            <Text fontWeight='bold'>
                                Coca-Cola
                            </Text>
                            <Text fontSize='sm'>@cocacola</Text>
                        </Box>
                        <Box>
                        <Text fontWeight='bold' ml='2rem' color="bluePrimary.500">
                                Vizualizou seu perfil
                            </Text>
                        </Box>
                        <Spacer />
                        <Box
                        ml='2rem' display="flex" float="right"
                        >
                            <Button colorScheme='blue'>Ver perfil</Button>
                        </Box>
                    </Flex>
        </>
    )
}