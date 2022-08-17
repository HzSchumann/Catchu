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
    Stack,
    Image,

} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BellIcon, CopyIcon, DragHandleIcon } from '@chakra-ui/icons';
import { AiOutlineTrophy, AiOutlineFileDone, AiOutlineBell } from "react-icons/ai";


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
                        <IconButton
                            size={'lg'}
                            mr='1rem'
                            aria-label={'Ranking'}
                            onClick={() => router.push('/ranking')}
                        >
                            <Icon as={AiOutlineTrophy}></Icon>
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
                                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                            </MenuButton>
                            <MenuList>
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

