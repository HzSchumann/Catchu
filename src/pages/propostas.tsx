import { Heading,  Flex, Avatar, Spacer, Text, Box } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import { Button, Center } from '@chakra-ui/react'
import { LogedHeader } from "../components/logedHeader/index";
import CardProposta from "../components/Notificacoes/cardProposta";
import CardPropostaEnviada from "../components/Propostas/cardPropostaEnviada";
import { useRouter } from 'next/router';
import db from "../config/firebase";
import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import AdicionarPropostas from "../pages/adicionarProposta";

export default function Propostas() {
    const router = useRouter();
    const [allCampaigns, setProposta] = useState([]);

    const q = query(collection(db, "Proposta"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const propostas = [];
    querySnapshot.forEach((doc) => {
        propostas.push({...doc.data(), id: doc.id});
    });
    console.log(propostas);


    setProposta(propostas);

    });
    


    async function adicionarProposta(){
        router.push('/adicionarProposta');
        //window.location.reload();
       
    }
    function Item(props){
        return(
            

                    <Flex ml='2rem' p="4"boxShadow='xs' rounded='md' bg='white' >
                            <Avatar src='https://assets-mantosdofutebol.sfo2.digitaloceanspaces.com/wp-content/uploads/2021/12/logo-adidas-2022-pb.jpg' onClick={() => router.push('/perfil-marca')}/>
                            <Box ml='2rem'>
                                
                                <Text fontWeight='bold' id='empre'>
                                {props.proposta.name}
                                </Text>
                                <Text fontSize='sm'>@{props.proposta.usuario}</Text>
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
                mt='2rem'
            >
                <GridItem rowSpan={2}>
                    <Center  h='200px' width='100%' mr="4" boxShadow='xs' rounded='md' bg='white' text-align='center' >
                        <Heading >Propostas</Heading>
                    </Center >
                    <Button
                        flex={1}
                        width={'100%'}
                        mt={'2rem'}
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
                        onClick={() => window.location.href = 'adicionarProposta'}
                        
                        >
                            Adicionar Proposta
                    </Button>
                </GridItem>
                <GridItem colSpan={4}>
                {allCampaigns.map((proposta)=> <Item key={proposta.id} proposta={proposta}/>)}
                

                    

                    
                </GridItem>
                
            </Grid>

            

        </>
    )
}