import React from 'react'
import { AlertDialog, Text } from "native-base"

interface HintDialogProps {
    isOpen: boolean,
    onClose: () => void,
    hintText: string, 
    cancelRef: React.MutableRefObject<null>
}

const HintDialog = ({ isOpen, onClose, hintText, cancelRef }: HintDialogProps) => {
    return <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Body>
                <Text fontSize="15">{hintText}</Text>
            </AlertDialog.Body>
        </AlertDialog.Content>
    </AlertDialog>
}

export default HintDialog