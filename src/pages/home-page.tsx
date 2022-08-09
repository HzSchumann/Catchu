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

            <Box p={4}>
                <Carrossel>
                </Carrossel>

                <Text fontSize='2xl' font-weight="bolder">
                    Recomendações
                </Text>

            </Box>
            <CardPerfil>
            </CardPerfil>

            <CardPerfil>
            </CardPerfil>

            <CardPerfil>
            </CardPerfil>
        </>
    );
}
