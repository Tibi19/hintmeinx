import React from 'react'
import { Text } from "native-base"
import { Hint } from '../../model/model'
import Dialog, { DialogControlProps } from './Dialog'

interface HintDialogProps extends DialogControlProps {
    hint: Hint
}

const HintDialog = ({ isOpen, onClose, hint }: HintDialogProps) => {
    return (
        <Dialog
            isOpen={isOpen}
            onClose={onClose}
            title={hint.domain + " hint"}>
            <Text fontSize="15">{hint.hintText}</Text>
        </Dialog>
    )
}

export default HintDialog