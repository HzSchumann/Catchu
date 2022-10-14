import { Grid, GridItem } from '@chakra-ui/react'
import { LogedHeader } from "../components/logedHeader/index";

import {
    Icon,
    Text,
    Box,
    Heading,
} from '@chakra-ui/react';
import { AspectRatio } from '@chakra-ui/react'
import { AiOutlinePlayCircle } from "react-icons/ai";



export default function Propostas() {
    return (

        <>
            <LogedHeader></LogedHeader>
            <Grid
                pl="2rem"
                pr="2rem"
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
                mt="2rem"
            >
                <GridItem colSpan={6}>
                <Heading fontSize={'2xl'} fontFamily={'body'} mb='2rem'>
                    Fechando Parceria com Contrato
                </Heading>
                <AspectRatio maxW='5000px' maxH='500px' borderRadius="lg" ratio={1} mb='2rem'>
                    <iframe
                        title='contract'
                        src='/videos/video.mp4'
                        allowFullScreen
                    />
                </AspectRatio>
                

                    
                </GridItem>
                <GridItem colSpan={3}>
                    <Box  height="auto"  boxShadow='xs' rounded='md' p="2rem">
                        <Text as='b' fontSize='18px' color='bluePrimary.600'>Sobre o curso:</Text>
                        <Text>
                        We don’t serve their kind here! What? Your droids. They’ll have to wait outside. We don’t want them here. Listen, why don’t you wait out by the speeder. We don’t want any trouble. I heartily agree with you sir. Negola dewaghi wooldugger?!? He doesn’t like you. I’m sorry. I don’t like you either You just watch yourself. We’re wanted men. I have the death sentence in twelve systems. I’ll be careful than. You’ll be dead. This little one isn’t worth the effort. Come let me buy you something…

                        The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. It’s a small thermal exhaust port, right below the main port. The shaft leads directly to the reactor system. A precise hit will start a chain reaction which should destroy the station. Only a precise hit will set up a chain reaction. The shaft is ray-shielded, so you’ll have to use proton torpedoes. That’s impossible, even for a computer. It’s not impossible. I used to bull’s-eye womp rats in my T-sixteen back home. They’re not much bigger than two meters. Man your ships! And may the Force be with you!

                        Luke? Luke? Luke? Have you seen Luke this morning? He said he had some things to do before he started today, so he left early. Uh? Did he take those two new droids with him? I think so. Well, he’d better have those units in the south range repaired be midday or there’ll be hell to pay! Wait, there’s something dead ahead on the scanner. It looks like our droid…hit the accelerator.

                        There. You see Lord Vader, she can be reasonable. Continue with the operation. You may fire when ready. What? You’re far too trusting. Dantooine is too remote to make an effective demonstration. But don’t worry. We will deal with your Rebel friends soon enough. No! Commence primary ignition.
                        </Text>
                    </Box>
                </GridItem>

                <GridItem colSpan={2}>
                    <Box h='55px' boxShadow='xs' rounded='md' p="1rem">
                        <Text as='b'>
                            1. Apresentação do Conteúdo
                        </Text>
                        <Icon w={6} h={6} float="right" color='bluePrimary.600' as={AiOutlinePlayCircle}></Icon>
                    </Box>
                    <Box h='55px' boxShadow='xs' rounded='md' p="1rem">
                        <Text as='b'>
                            2. Casos Reais
                        </Text>
                        <Icon w={6} h={6} float="right" color='bluePrimary.600' as={AiOutlinePlayCircle}></Icon>
                    </Box>
                    <Box h='55px' boxShadow='xs' rounded='md' p="1rem">
                        <Text as='b'>
                            3. Fechando Parceria
                        </Text>
                        <Icon w={6} h={6} float="right" color='bluePrimary.600' as={AiOutlinePlayCircle}></Icon>
                    </Box>
                    <Box h='55px' boxShadow='xs' rounded='md' p="1rem">
                        <Text as='b'>
                            4. Não Seja Enganado!
                        </Text>
                        <Icon w={6} h={6} float="right" color='bluePrimary.600' as={AiOutlinePlayCircle}></Icon>
                    </Box>
                    <Box h='55px' boxShadow='xs' rounded='md' p="1rem">
                        <Text as='b'>
                            5. Parte Justa
                        </Text>
                        <Icon w={6} h={6} float="right" color='bluePrimary.600' as={AiOutlinePlayCircle}></Icon>
                    </Box>
                    <Box h='55px' boxShadow='xs' rounded='md' p="1rem">
                        <Text as='b'>
                            6. Benefícios
                        </Text>
                        <Icon w={6} h={6} float="right" color='bluePrimary.600' as={AiOutlinePlayCircle}></Icon>
                    </Box>
                    <Box h='55px' boxShadow='xs' rounded='md' p="1rem">
                        <Text as='b'>
                            7. Conclusão
                        </Text>
                        <Icon w={6} h={6} float="right" color='bluePrimary.600' as={AiOutlinePlayCircle}></Icon>
                    </Box>
                    <Box h='55px' boxShadow='xs' rounded='md' p="1rem">
                        <Text as='b'>
                            7. Conclusão
                        </Text>
                        <Icon w={6} h={6} float="right" color='bluePrimary.600' as={AiOutlinePlayCircle}></Icon>
                    </Box>
                    <Box h='55px' boxShadow='xs' rounded='md' p="1rem">
                        <Text as='b'>
                            7. Conclusão
                        </Text>
                        <Icon w={6} h={6} float="right" color='bluePrimary.600' as={AiOutlinePlayCircle}></Icon>
                    </Box>
                    <Box h='55px' boxShadow='xs' rounded='md' p="1rem">
                        <Text as='b'>
                            7. Conclusão
                        </Text>
                        <Icon w={6} h={6} float="right" color='bluePrimary.600' as={AiOutlinePlayCircle}></Icon>
                    </Box>
                </GridItem>
            </Grid>

        </>
    )
}