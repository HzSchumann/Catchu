import { Heading } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import { Button, Center } from '@chakra-ui/react'
import { LogedHeader } from "../components/logedHeader/index";
import CardProposta from "../components/Notificacoes/cardProposta";
import CardPropostaEnviada from "../components/Propostas/cardPropostaEnviada";
import { useRouter } from 'next/router';
export default function Propostas() {
    
const router = useRouter();
    function adicionarProposta(){
        
        router.push('/adicionarProposta');
    }

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
                <GridItem rowSpan={2}>
                    <Center  h='200px' mr="4" boxShadow='xs' rounded='md' bg='white' text-align='center'>
                        <Heading >Propostas</Heading>
                    </Center >
                </GridItem>

                <GridItem colSpan={4}>
                    <CardProposta></CardProposta>
                    <CardPropostaEnviada></CardPropostaEnviada>
                    <CardProposta></CardProposta>
                    <CardProposta></CardProposta>
                    <CardPropostaEnviada></CardPropostaEnviada>
                    <CardProposta></CardProposta>

                    
                </GridItem>
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
                            onClick={() => adicionarProposta()}
                                    onPress={() => {
                                        adicionarProposta()
                                    }}
                            >
                                Adicionar Proposta
                            </Button>
            </Grid>

            

        </>
    )
}