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
    Text,
    Box,
    Divider,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';



export default function DescricaoProposta({ navigation }) {
    const router = useRouter();

    const empresaU = new URLSearchParams().get("empresa");
    const desU = new URLSearchParams().get("descricao");
    const setU = new URLSearchParams().get("setor");
    const usuarioU = new URLSearchParams().get("usuarioEmpresa");
    const aceitoU = new URLSearchParams().get("aceito");
    const idU = new URLSearchParams().get("idproposta");
    async function atualizarProposta() {
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

    async function atualizarNaoProposta() {
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

    async function adicionarProposta() {
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
                    <Center h='200px' width='100%' mr="4" boxShadow='xs' rounded='md' bg='white' text-align='center' >
                        <Heading >Descrição da Proposta</Heading>
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

                    <br />
                </GridItem>
                <script>

                </script>

                <GridItem colSpan={4}>
                    <Box height="auto" boxShadow='xs' rounded='md' p="2rem">
                        <FormControl id="empresaName">
                            <Text>
                                Nome da Empresa:
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
                                Setor de atuação:
                            </Text>
                            <FormLabel id='setorAt'>{setU}</FormLabel>
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
                        <br />

                        <FormControl id="usuario">
                            <Text>
                                Proposta Aceita:
                            </Text>
                            <FormLabel id='user'>{aceitoU}</FormLabel>
                        </FormControl>
                        <Divider />
                    </Box>
                </GridItem>
                
                <GridItem colSpan={4}>
                    <Box w='100%'>

                        <Button
                            mr='2rem'
                            ml='12rem'
                            w='30%'
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
                            w='30%'
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
                    </Box>
                </GridItem>
            </Grid>



        </>
    )
}