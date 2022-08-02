import {
    Box,  
} from '@chakra-ui/react';

import { LogedHeader } from '../components/logedHeader/index';



export default function HomePage() {


    return (
        <>
            <LogedHeader>
            </LogedHeader>

            <Box p={4}>Main Content Here</Box>
            
        </>
    );
}