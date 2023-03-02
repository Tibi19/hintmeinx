import React from 'react'
import { Box, HStack, Pressable, Text, VStack } from "native-base"
import { Hint } from "../model/model"
import { Menu, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu'

interface HintRowProps {
    hint: Hint,
    onOpenHint: () => void,
    onOpenEdit: () => void,
    onOpenDelete: () => void,
}

const HintRow = ({hint, onOpenHint, onOpenEdit, onOpenDelete}: HintRowProps) => {
    return <>
        <Pressable onPress={onOpenHint} my="2" mx="4" alignSelf="flex-start">
            {({ isPressed }) => {
                return (
                    <Box
                        rounded="2xl"
                        bg="primary.400"
                        pl="5"
                        pr="2"
                        py="3"
                        style={{ transform: [{ scale: isPressed ? 0.95 : 1 }] }}>
                        <HStack>
                            <VStack mr="5" space={2}>
                                <Text fontSize="18">{hint.domain}</Text>
                                <Text fontSize="18">{hint.username}</Text>
                            </VStack>
                            <HintMenu
                                onOpenEdit={onOpenEdit}
                                onOpenDelete={onOpenDelete} />
                        </HStack>
                    </Box>
                )
            }}
        </Pressable>
        
    </>
}

interface HintMenuProps {
    onOpenEdit: () => void,
    onOpenDelete: () => void,
}

const HintMenu = ({onOpenEdit, onOpenDelete}: HintMenuProps) => {
    return <>
        <Menu>
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
                    borderRadius: 15,
                    padding: 5,
                    marginTop: 25,
                    width: 100
                  }
            }}>
                <MenuOption onSelect={onOpenEdit} >
                    <Text fontSize="16">
                        Edit
                    </Text>
                </MenuOption>
                <MenuOption onSelect={onOpenDelete} >
                    <Text fontSize="16">
                        Delete
                    </Text>
                </MenuOption>
            </MenuOptions>
        </Menu>
        
    </>
}

export default HintRow