import { Heading, Flex, Avatar, Spacer, Text, Box } from "@chakra-ui/react";
import { Grid, GridItem, Stack } from '@chakra-ui/react'
import { Button, ButtonGroup, Center } from '@chakra-ui/react'
import { LogedHeader } from "../components/logedHeader/index";
import CardProposta from "../components/Notificacoes/cardProposta";
import CardVizualizou from "../components/Notificacoes/cardVizualizou";
import db2 from "../config/firebase";
import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useRouter } from 'next/router';


export default function Notificacoes() {
    const router = useRouter();

    const [todasEmpresas, setEmpresa] = useState([]);

    const q2 = query(collection(db2, "PropostaRecebida"));
    const unsubscribe2 = onSnapshot(q2, (querySnapshot) => {
    const propostas2 = [];
    
        querySnapshot.forEach((doc) => {
            propostas2.push({...doc.data(), id: doc.id});
            unsubscribe2()
        });
        console.log(propostas2);
    

        setEmpresa(propostas2);

    });
    if(todasEmpresas.length > 0){
        unsubscribe2()
        console.log(todasEmpresas.length)
    }

    function Item2(props2){
        return(
            

                    <Flex ml='2rem' p="4" boxShadow='xs' rounded='md' bg='white'>
                <Avatar src='/images/receive.png' onClick={() => router.push('/perfil-marca')} />

                <Box ml='2rem'>

                    <Text fontWeight='bold' id='empre'>
                        Proposta recebida de {props2.proposta2.empresa}
                    </Text>
                    <Text fontSize='sm'>@{props2.proposta2.empresa}</Text>
                </Box>
                <Spacer />
                <Box
                    ml='2rem' display="flex" float="right"
                >
                    <Button
                        bg={'bluePrimary.500'}
                        color={'white'}
                        boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}
                        _hover={{
                            bg: 'bluePrimary.600',
                        }}
                        _focus={{
                            bg: 'bluePrimary.600',
                        }}
                        onClick={() => router.push('/descricaoPropostaRecebida?idproposta=' + props2.proposta2.id + '&empresa=' + props2.proposta2.empresa + '&descricao=' + props2.proposta2.descricao + '&setor=' + props2.proposta2.setorAtuacao + '&usuarioEmpresa=' + props2.proposta2.usuarioEmpresa + '&aceito=' + props2.proposta2.aceito)}
                    >
                        Ver proposta
                    </Button>

                </Box>
            </Flex>
                    
                
        )
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
                mt="2rem"
            >
                <GridItem rowSpan={2}>
                    <Center h='200px' mr="4" boxShadow='xs' rounded='md' bg='white' text-align='center'>
                        <Heading >Suas Notificações</Heading>
                    </Center >
                </GridItem>

                <GridItem colSpan={4}>
                    {todasEmpresas.map((proposta2)=> <Item2 key={proposta2.id} proposta2={proposta2}/>)}
                    <CardVizualizou></CardVizualizou>
                </GridItem>
            </Grid>

        </>
    )
}