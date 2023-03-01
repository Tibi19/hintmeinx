import React from 'react'
import { Button, Text, VStack } from "native-base"
import { Hint } from "../../model/model"
import Dialog, { DialogControlProps } from './Dialog'

interface DeleteHintDialogProps extends DialogControlProps {
    hint: Hint,
    onDelete: () => void
}

const DeleteHintDialog = ({ isOpen, hint, onClose, onDelete }: DeleteHintDialogProps) => {
    const onConfirmDelete = () => {
        onDelete()
        onClose()
    }

    return (
        <Dialog
            isOpen={isOpen}
            onClose={onClose}
            title="Delete Hint"
            alignChildren="center"
            >
                <VStack width="90%" alignItems="center">
                    <Text fontSize="15">Are you sure you want to delete the hint for {hint.domain}?</Text>
                    <Button.Group space={4} mt="5">
                        <Button colorScheme="secondary" onPress={onConfirmDelete} minWidth="100">
                            <Text color="black">YES</Text>
                        </Button>
                        <Button colorScheme="secondary" onPress={onClose} color="black" minWidth="100">
                            <Text color="black">NO</Text>
                        </Button>
                    </Button.Group>
                </VStack>
        </Dialog>
    )
}

export default DeleteHintDialog