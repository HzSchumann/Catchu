import {
    Box,
    Text,
    Heading,

} from '@chakra-ui/react';
import CardPerfil from '../components/Card/card';
import Carrossel from '../components/Carrossel/index';

import { LogedHeader } from '../components/logedHeader/index';



export default function HomePage() {


    return (
        <>
            <LogedHeader>
            </LogedHeader>

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
