import { Heading } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import { Button, Center } from '@chakra-ui/react'
import { LogedHeader } from "../components/logedHeader/index";
import PropostaModel from "../Model/PropostaModel";
import { doc, setDoc, deleteDoc, getFirestore } from "firebase/firestore";
import db from '../config/firebase';
import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import {
    FormControl,
    FormLabel,
    Box,
    Text,
    Divider,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';



export default function DescricaoProposta({ navigation }) {
    const router = useRouter();




    /*document.getElementById('empresaNome').value = parseGET('empresa');
    document.getElementById('descri').value = parseGET('descrica');
    document.getElementById('setorAt').value = parseGET('setor');
    document.getElementById('veiculoMidia').value = parseGET('midia');
    document.getElementById('user').value = parseGET('usuario');*/

    const nomeU = new URLSearchParams().get("nome");
    const empresaU = new URLSearchParams().get("empresa");
    const desU = new URLSearchParams().get("descricao");
    const setU = new URLSearchParams().get("setor");
    const midiaU = new URLSearchParams().get("midia");
    const usuarioU = new URLSearchParams().get("usuario");
    const idPropostaU = new URLSearchParams().get("idproposta");

    async function adicionarProposta() {
        router.push('/propostas');
    }

    function deleteCampaign() {


        const docRef = doc(db, "Proposta", idPropostaU);

        deleteDoc(docRef)
            .then(() => {
                console.log("Entire Document has been deleted successfully.")
            })
            .catch(error => {
                console.log(error);
            })
        router.push('/propostas');
    }

    return (

        <>
            <LogedHeader></LogedHeader>
            <Grid
                pl="2rem"
                pr="2rem"
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
                mt='2rem'
            >
                <GridItem rowSpan={2}>
                    <Center pl='2rem' h='200px' width='100%' mr="4" boxShadow='xs' rounded='md' bg='white' text-align='center' >
                        <Heading >Adicionar Proposta</Heading>
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
                    onClick={() => adicionarProposta()}
                >
                    Voltar para propostas
                </Button>
                </GridItem>
                <script>

                </script>

                <GridItem colSpan={4}>
                    <Box height="auto" boxShadow='xs' rounded='md' p="2rem">
                        <FormControl id="userName">
                            <Text>
                                Nome:
                            </Text>
                            <FormLabel id='nome' >{nomeU} </FormLabel>
                        </FormControl>
                        <Divider />
                        <br />

                        <FormControl id="empresaName">
                            <Text>
                                Empresa:
                            </Text>
                            <FormLabel id='empresaNome'>{empresaU}</FormLabel>
                        </FormControl>
                        <Divider />
                        <br />

                        <FormControl id="desc">
                            <Text>
                                Descrição:
                            </Text>
                            <FormLabel id='descri'>{desU}</FormLabel>
                        </FormControl>
                        <Divider />
                        <br />

                        <FormControl id="setor">
                            <Text>
                                Setor de Atuação:
                            </Text>
                            <FormLabel id='setorAt'>{setU}</FormLabel>
                        </FormControl>
                        <Divider />
                        <br />

                        <FormControl id="veiculo">
                            <Text>
                                Plataforma de divulgação:
                            </Text>
                            <FormLabel id='veiculoMidia'>{midiaU}</FormLabel>
                        </FormControl>
                        <Divider />
                        <br />

                        <FormControl id="usuario">
                            <Text>
                                Nome de usuário na plataforma:
                            </Text>
                            <FormLabel id='user'>{usuarioU}</FormLabel>
                        </FormControl>
                        <Divider />

                    </Box>
                </GridItem>
                
                <GridItem colSpan={4}>
                    <Box w='100%' bg='red'>

                        <Button
                            float='right'
                            w='300px'
                            bg={'red.500'}
                            color={'white'}
                            boxShadow={
                                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                            }
                            _hover={{
                                bg: 'red.600',
                            }}
                            _focus={{
                                bg: 'red.600',
                            }}
                            onClick={() => deleteCampaign()}
                        >
                            Cancelar Proposta
                        </Button>
                    </Box>
                </GridItem>
            </Grid>



        </>
    )
}