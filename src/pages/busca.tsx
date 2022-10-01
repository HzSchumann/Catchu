import {
    Box,
    Text,
    Heading,

} from '@chakra-ui/react';
import CardPerfil from '../components/Card/card';
import Carrossel from '../components/Carrossel/index';

import { LogedHeader } from '../components/logedHeader/index';
import { preencherDados } from "../pages/login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import idUser from '../pages/login';





export default function Busca() {

    console.log('teste ' + preencherDados.idUser);
    return (
        <>
            <LogedHeader>
            </LogedHeader>
            <h6 id='message1' ></h6>
            <Box p="2rem">
                <Heading fontSize={'3xl'} font-weight="bolder" mb="1rem">
                    Esporte
                </Heading>

                <CardPerfil>
                </CardPerfil>

                <CardPerfil>
                </CardPerfil>

                <CardPerfil>
                </CardPerfil>

                <CardPerfil>
                </CardPerfil>

            </Box>
        </>
    );
}