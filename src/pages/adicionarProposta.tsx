import { Heading } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import { Button, Center } from '@chakra-ui/react'
import { LogedHeader } from "../components/logedHeader/index";
import PropostaModel from "../Model/PropostaModel";
import { doc, setDoc } from "firebase/firestore";
import db from '../config/firebase';
import {
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function AdicionarPropostas() {
    const router = useRouter();

    async function adicionarProposta(){
        let propostaModel = PropostaModel();
        propostaModel.descricao = document.getElementById("desc").value;
        propostaModel.empresa = document.getElementById("empresaName").value;
        propostaModel.name = document.getElementById("userName").value;
        propostaModel.setorAtuacao = document.getElementById("setor").value;
        propostaModel.veiculoMidiaticoPrincipal = document.getElementById("veiculo").value;
        propostaModel.usuarioPlataforma = document.getElementById("usuario").value;

        const docData = {
            descricao: propostaModel.descricao,
            empresa: propostaModel.empresa,
            setorAtuacao: propostaModel.setorAtuacao,
            midia: propostaModel.veiculoMidiaticoPrincipal,
            name: propostaModel.name,
            usuario: propostaModel.usuarioPlataforma
        };

        await setDoc(doc(db, "Proposta", `Empresa ${propostaModel.empresa}`), docData);
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
                        <Heading >Adicionar Proposta</Heading>
                    </Center >
                </GridItem>

                <GridItem colSpan={4}>
                <FormControl id="userName">
                        <FormLabel>Seu Nome</FormLabel>
                        <Input
                            placeholder="Seu Nome"
                            _placeholder={{ color: 'gray.500' }}
                            type="text" />
                    </FormControl>
                    <br/>
                <FormControl id="empresaName">
                        <FormLabel>Nome da Empresa</FormLabel>
                        <Input
                            placeholder="Nome da Empresa"
                            _placeholder={{ color: 'gray.500' }}
                            type="text" />
                    </FormControl>
                    <br/>
                    <FormControl id="desc">
                        <FormLabel>Descrição</FormLabel>
                        <Input
                            placeholder="Sua descrição"
                            _placeholder={{ color: 'gray.500' }}
                            type="text" />
                    </FormControl>
                    <br/>
                    <FormControl id="setor">
                        <FormLabel>Setor de atuação</FormLabel>
                        <Input
                            placeholder="Informe o seu setor de atuação"
                            _placeholder={{ color: 'gray.500' }}
                            type="text" />
                    </FormControl>
                    <br/>
                    <FormControl id="veiculo">
                        <FormLabel>Veículo midiatico principal</FormLabel>
                        <Input
                            placeholder="Informe a sua rede social principal"
                            _placeholder={{ color: 'gray.500' }}
                            type="text" />
                    </FormControl>
                    <br/>
                    <FormControl id="usuario">
                        <FormLabel>Seu nome de usuário na plataforma</FormLabel>
                        <Input
                            placeholder="Informe o seu usuário na rede social"
                            _placeholder={{ color: 'gray.500' }}
                            type="text" />
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
                                Salvar Proposta
                            </Button>
            </Grid>

            

        </>
    )
}