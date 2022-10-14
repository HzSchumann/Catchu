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





export default function HomePage() {

    return (
        <>
            <LogedHeader></LogedHeader>
            <h6 id='message1' ></h6>
            <Box p="2rem">
                <Heading fontSize={'3xl'} font-weight="bolder" mb="2rem">
                    Olá Lucas, tudo bem?
                </Heading>
                <Carrossel></Carrossel>

                <Heading fontSize={'3xl'} font-weight="bolder" mb="1rem">
                    Recomendações
                </Heading>

                <CardPerfil></CardPerfil>

            </Box>
        </>
    );
}
