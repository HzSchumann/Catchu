import {
    Box,
    Text,
    Heading,

} from '@chakra-ui/react';
import CardPerfil from '../components/Card/card';
import Carrossel from '../components/Carrossel/index';

import { LogedHeader } from '../components/logedHeader/index';
import { preencherDados } from "../pages/login";




export default function HomePage() {

    console.log('teste ' + preencherDados.idUser);
    return (
        <>
            <LogedHeader>
            </LogedHeader>
            <h6>teste</h6>
            <Box p="2rem">
                <Carrossel>
                </Carrossel>

                <Heading fontSize={'3xl'} font-weight="bolder" mb="1rem">
                    Recomendações
                </Heading>

                <CardPerfil>
                </CardPerfil>

            </Box>
        </>
    );
}
