import { Flex, Avatar, Spacer, Text, Box } from "@chakra-ui/react";
import { Button} from '@chakra-ui/react'



export default function CardProposta() {
    return (

        <>   
                    <Flex ml='2rem' p="4" mr="4" boxShadow='xs' rounded='md' bg='white'>
                        <Avatar src='https://assets-mantosdofutebol.sfo2.digitaloceanspaces.com/wp-content/uploads/2021/12/logo-adidas-2022-pb.jpg' />
                        <Box ml='2rem'>
                            <Text fontWeight='bold'>
                                Adidas
                            </Text>
                            <Text fontSize='sm'>@adidas</Text>
                        </Box>
                        <Spacer />
                        <Box
                        ml='2rem' display="flex" float="right"
                        >
                            <Button colorScheme='blue'>Ver proposta</Button>
                        </Box>
                    </Flex>
        </>
    )
}