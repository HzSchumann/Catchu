import { Heading, Flex, Avatar, Badge, Text, Box } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import { Button, ButtonGroup, Center } from '@chakra-ui/react'
import { LogedHeader } from "../components/logedHeader/index";
import CardProposta from "../components/Notificacoes/cardProposta";


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
                mt='2rem'
            >
                <GridItem rowSpan={2} ml='2rem' h='200px' mr="4" boxShadow='xs' rounded='md' bg='white' >
                    <Center>
                        <Heading text-align='center'>Suas Propostas</Heading>
                    </Center>
                </GridItem>

                <GridItem colSpan={4}>
                    <CardProposta></CardProposta>
                    <CardProposta></CardProposta>
                    <CardProposta></CardProposta>
                    <CardProposta></CardProposta>
                </GridItem>
            </Grid>

        </>
    )
}