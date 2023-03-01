import React from 'react'
import { AlertDialog, Text } from "native-base"
import { Hint } from '../model/model'

interface HintDialogProps {
    isOpen: boolean,
    onClose: () => void,
    hint: Hint, 
    cancelRef: React.MutableRefObject<null>
}

const HintDialog = ({ isOpen, onClose, hint, cancelRef }: HintDialogProps) => {
    return <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>{hint.domain + " hint"}</AlertDialog.Header>
            <AlertDialog.Body>
                <Text fontSize="15">{hint.hintText}</Text>
            </AlertDialog.Body>
        </AlertDialog.Content>
    </AlertDialog>
}

export default HintDialog