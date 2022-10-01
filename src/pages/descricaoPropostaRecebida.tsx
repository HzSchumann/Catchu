import { Heading } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import { Button, Center } from '@chakra-ui/react'
import { LogedHeader } from "../components/logedHeader/index";
import PropostaModel from "../Model/PropostaModel";
import { doc, setDoc } from "firebase/firestore";
import db from '../config/firebase';
import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import {
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react';
import { useRouter } from 'next/router';



export default function DescricaoProposta({ navigation }) {
    const router = useRouter();

    const empresaU = new URLSearchParams(window.location.search).get("empresa");
    const desU = new URLSearchParams(window.location.search).get("descricao");
    const setU = new URLSearchParams(window.location.search).get("setor");
    const usuarioU = new URLSearchParams(window.location.search).get("usuarioEmpresa");
    const aceitoU = new URLSearchParams(window.location.search).get("aceito");
    const idU = new URLSearchParams(window.location.search).get("idproposta");
    async function atualizarProposta(){
        let propostaModel = PropostaModel();

        const docData = {
            empresa: empresaU,
            descricao: desU,
            setorAtuacao: setU,
            usuarioEmpresa: usuarioU,
            aceito: 'Sim'
        };

        await setDoc(doc(db, "PropostaRecebida", idU), docData);
        router.push('/propostas');
    }

    async function atualizarNaoProposta(){
        let propostaModel = PropostaModel();

        const docData = {
            empresa: empresaU,
            descricao: desU,
            setorAtuacao: setU,
            usuarioEmpresa: usuarioU,
            aceito: 'Não'
        };

        await setDoc(doc(db, "PropostaRecebida", idU), docData);
        router.push('/propostas');
    }

        
    /*document.getElementById('empresaNome').value = parseGET('empresa');
    document.getElementById('descri').value = parseGET('descrica');
    document.getElementById('setorAt').value = parseGET('setor');
    document.getElementById('veiculoMidia').value = parseGET('midia');
    document.getElementById('user').value = parseGET('usuario');*/


    async function adicionarProposta(){
        router.push('/propostas');
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
                        <Heading >Descrição da Proposta</Heading>
                    </Center >
                </GridItem>
                <script>
                    
                </script>

                <GridItem colSpan={4}>
                <FormControl id="empresaName">
                        <FormLabel id='empresaNome'>Nome da Empresa: {empresaU}</FormLabel>
                        
                    </FormControl>
                    <br/>
                    <FormControl id="desc">
                        <FormLabel id='descri'>Descrição: {desU}</FormLabel>
                        
                    </FormControl>
                    <br/>
                    <FormControl id="setor">
                        <FormLabel id='setorAt'>Setor de atuação: {setU}o</FormLabel>
                        
                    </FormControl>
                    <br/>
                    <FormControl id="usuario">
                        <FormLabel id='user'>Nome de usuário na plataforma {usuarioU}</FormLabel>
                       
                    </FormControl>
                    <br/>
                    <FormControl id="usuario">
                        <FormLabel id='user'>Proposta Aceita? {aceitoU}</FormLabel>
                       
                    </FormControl>
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
                                Voltar para propostas
                            </Button>
                            <br/>
                            <Button
                                bg={'green.500'} 
                                color={'white'}
                                boxShadow={
                                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                }
                                _hover={{
                                    bg: 'green.600',
                                }}
                                _focus={{
                                    bg: 'green.600',
                                }}
                                onClick={() => atualizarProposta()}
                                >
                                    Aceitar
                                </Button>
                                <Button
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
                                onClick={() => atualizarNaoProposta()}
                                >
                                    Recusar
                                </Button>
            </Grid>

            

        </>
    )
}