import React from 'react';
import { Box, Flex, Heading, IconButton, Menu, MenuButton, MenuList, MenuItem, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import TaskList from './TaskList';

const HeaderPage = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.200", "gray.700")

  return (
    <Box>
      <Flex justifyContent="left" alignItems="center" px={9} mx="auto" maxW="100%" background={formBackground}>
        <Heading as="h1" size="2lg"  textAlign="left">
          Aplicación de tareas personalizada
        </Heading>
        <Menu>
          <MenuButton as={IconButton} aria-label="Menu" icon={<FiMenu />} 
          color="blue" variant="ghost" fontSize="36px" textAlign="right"/>
          <MenuList>
            <MenuItem color="black" fontSize="32px">Que es</MenuItem>
            <MenuItem color="black" fontSize="32px">Qué hace</MenuItem>
            <MenuItem color="black" fontSize="32px">Cómo funciona</MenuItem>
          </MenuList>
        </Menu>
        <Button onClick={toggleColorMode}>
         color
        </Button>
      </Flex>
    </Box>
  );
};

export default HeaderPage;
