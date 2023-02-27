import React from 'react'
import { Box, HStack, Text, VStack } from "native-base"
import { Hint } from "../model/model"
import { Menu, MenuOptions, MenuOption, MenuTrigger, renderers} from 'react-native-popup-menu'

interface HintRowProps {
    hint: Hint,
    onOpen: () => void,
    onEdit: () => void,
    onDelete: () => void,
}

const HintRow = (hint: Hint) => {
    return (
        <Box alignSelf="flex-start" rounded="lg" bg="primary.400" my="2" mx="4" pl="5" pr="3" py="3">
            <HStack>
                <VStack mr="5">
                    <Text fontSize="18">{hint.domain}</Text>
                    <Text fontSize="18">{hint.username}</Text>
                </VStack>
                <HintMenu />
            </HStack>
        </Box>
    )
}

const HintMenu = () => {
    return (
        <Menu renderer={renderers.NotAnimatedContextMenu}>
            <MenuTrigger>
                <Text
                    fontSize="21"
                    color="secondary.400"
                    style={{ bottom: 5 }}
                > &#8942; </Text >
            </MenuTrigger>
            <MenuOptions customStyles={{
                optionsContainer: {
                    backgroundColor: '#39404d',
                    borderRadius: 10,
                    padding: 5,
                    marginTop: 25,
                    width: 100
                  }
            }}>
                <MenuOption onSelect={() => console.log(`Edit`)} >
                    <Text fontSize="16">
                        Edit
                    </Text>
                </MenuOption>
                <MenuOption onSelect={() => console.log(`Delete`)} >
                    <Text fontSize="16">
                        Delete
                    </Text>
                </MenuOption>
            </MenuOptions>
        </Menu>
    )
}

export default HintRow