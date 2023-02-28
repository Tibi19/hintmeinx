import React from 'react'
import { AlertDialog, Button, Text, VStack } from "native-base"
import { Hint } from "../model/model"

interface DeleteHintDialogProps {
    isOpen: boolean,
    hint: Hint
    onClose: () => void,
    onDelete: () => void,
    cancelRef: React.MutableRefObject<null>
}

const DeleteHintDialog = ({ isOpen, hint, onClose, onDelete, cancelRef }: DeleteHintDialogProps) => {
    const onConfirmDelete = () => {
        onDelete()
        onClose()
    }

    return <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Delete Hint</AlertDialog.Header>
            <AlertDialog.Body alignItems="center">
                <VStack width="90%" alignItems="center">
                    <Text fontSize="15">Are you sure you want to delete the hint for {hint.domain}?</Text>
                    <Button.Group space={4} mt="5">
                        <Button colorScheme="secondary" onPress={onConfirmDelete} minWidth="100">
                            <Text color="black">YES</Text>
                        </Button>
                        <Button colorScheme="secondary" onPress={onClose} ref={cancelRef} color="black" minWidth="100">
                            <Text color="black">NO</Text>
                        </Button>
                    </Button.Group>
                </VStack>
            </AlertDialog.Body>
        </AlertDialog.Content>
    </AlertDialog>
}

export default DeleteHintDialog