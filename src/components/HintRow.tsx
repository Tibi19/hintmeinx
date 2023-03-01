import React from 'react'
import { Box, HStack, Pressable, Text, VStack } from "native-base"
import { Hint } from "../model/model"
import { Menu, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu'
import EditHintDialog from './dialog/EditHintDialog'
import DeleteHintDialog from './dialog/DeleteHintDialog'
import HintDialog from './dialog/HintDialog'

interface HintRowProps {
    hint: Hint,
    onEditHint: (newHint: Hint) => void,
    onDeleteHint: () => void,
}

const HintRow = ({hint, onEditHint, onDeleteHint}: HintRowProps) => {
    const [isHintOpen, setIsHintOpen] = React.useState(false)
    const onCloseHint = () => setIsHintOpen(false)

    return <>
        <Pressable onPress={() => setIsHintOpen(true)} my="2" mx="4" alignSelf="flex-start">
            {({ isPressed }) => {
                return (
                    <Box
                        rounded="lg"
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
                                hint={hint}
                                onEditHint={newHint => onEditHint(newHint)}
                                onDeleteHint={() => onDeleteHint()} />
                        </HStack>
                    </Box>
                )
            }}
        </Pressable>
        <HintDialog
            isOpen={isHintOpen}
            onClose={() => onCloseHint()}
            hint={hint} />
    </>
}

interface HintMenuProps {
    hint: Hint,
    onEditHint: (newHint: Hint) => void,
    onDeleteHint: () => void,
}

const HintMenu = ({hint, onEditHint, onDeleteHint}: HintMenuProps) => {
    const [isEditOpen, setIsEditOpen] = React.useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = React.useState(false)
    const onCloseEdit = () => setIsEditOpen(false)
    const onCloseDelete = () => setIsDeleteOpen(false)

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
                    borderRadius: 10,
                    padding: 5,
                    marginTop: 25,
                    width: 100
                  }
            }}>
                <MenuOption onSelect={() => setIsEditOpen(true)} >
                    <Text fontSize="16">
                        Edit
                    </Text>
                </MenuOption>
                <MenuOption onSelect={() => setIsDeleteOpen(true)} >
                    <Text fontSize="16">
                        Delete
                    </Text>
                </MenuOption>
            </MenuOptions>
        </Menu>
        <EditHintDialog 
            hint = {hint}
            isOpen = {isEditOpen}
            onClose = {() => onCloseEdit()}
            onEditHint = {newHint => onEditHint(newHint)}
        />
        <DeleteHintDialog 
            hint = {hint}
            isOpen = {isDeleteOpen}
            onClose = {() => onCloseDelete()}
            onDelete = {() => onDeleteHint()}
        />
    </>
}

export default HintRow