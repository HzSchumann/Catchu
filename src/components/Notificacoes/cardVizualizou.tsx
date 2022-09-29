import { Flex, Avatar, Spacer, Text, Box } from "@chakra-ui/react";
import { Button} from '@chakra-ui/react'



export default function CardVizualizou() {
    return (

        <>   
                    <Flex ml='2rem' p="4" boxShadow='xs' rounded='md' bg='white'>
                        <Avatar src='/images/streetart.png' />
                        <Box ml='2rem'>
                            <Text fontWeight='bold'>
                                Street Art
                            </Text>
                            <Text fontSize='sm'>@streetart</Text>
                        </Box>
                        <Box>
                        <Text fontWeight='bold' ml='2rem' mt="8px" color="bluePrimary.500">
                                Vizualizou seu perfil!
                            </Text>
                        </Box>
                        <Spacer />
                        <Box
                        ml='2rem' display="flex" float="right"
                        >
                            <Button
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
                            }}
                            >
                                Ver perfil
                            </Button>
                        </Box>
                    </Flex>
        </>
    )
}