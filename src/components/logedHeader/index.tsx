import {
    Box,
    Flex,
    Avatar,
    HStack,
    Icon,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Input,
    Image,
    InputGroup,
    InputRightElement,

} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Search2Icon } from '@chakra-ui/icons';
import { AiOutlinePlayCircle, AiOutlineFileDone, AiOutlineBell } from "react-icons/ai";


export function LogedHeader() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const router = useRouter();


    return (
        <>
            <Box 
                bg={useColorModeValue('white', 'gray.800')}
                px={4} h="60px" borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <Box ml="1rem" mt="2px" cursor='pointer' onClick={() => router.push('/home-page')}>
                            <Image src="/images/Catchu.svg" h="1rem"></Image>
                        </Box>
                        
                    </HStack>
                    
                    <Flex alignItems={'center'}>
                            {/* <Input w="600px" variant='filled' placeholder='Buscar' /> */}
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    w="600px"
                                    variant='filled'
                                    placeholder='Buscar'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button leftIcon={<Search2Icon />} h='1.75rem' size='sm' onClick={() => router.push('/busca')}></Button>
                                </InputRightElement>
                            </InputGroup>
                    </Flex>
                        

                        
                    
                    <Flex alignItems={'center'}>
                        <IconButton
                            size={'lg'}
                            mr='1rem'
                            aria-label={'Ranking'}
                            onClick={() => router.push('/ranking')}
                        >
                            <Icon as={AiOutlinePlayCircle}></Icon>
                        </IconButton>

                        <IconButton
                            size={'lg'}
                            mr='1rem'
                            aria-label={'Propostas'}
                            onClick={() => router.push('/propostas')}
                        >
                            <Icon as={AiOutlineFileDone}></Icon>
                        </IconButton>

                        <IconButton
                            size={'lg'}
                            mr='1rem'
                            aria-label={'Notificações'}
                            onClick={() => router.push('/notificacoes')}
                        >
                            <Icon as={AiOutlineBell}></Icon>
                        </IconButton>

                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    mr="1rem"
                                    size={'sm'}
                                    src={
                                        'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem
                                    onClick={() => router.push('/meu-perfil')}
                                >
                                    Perfil
                                </MenuItem>
                                <MenuItem
                                    onClick={() => router.push('/perfil')}
                                >
                                    Configurações
                                </MenuItem>
                                <MenuItem
                                    onClick={() => router.push('/assinatura')}
                                >
                                    Assinatura
                                </MenuItem>
                                <MenuDivider />
                                <MenuItem onClick={() => router.push('/')}>Sair</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}

