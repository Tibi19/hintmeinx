import React from 'react'
import { Hint } from '../../model/model'
import DeleteHintDialog from './DeleteHintDialog'
import EditHintDialog from './EditHintDialog'
import HintDialog from './HintDialog'

interface HintsInstanceDialogsProps {
    hint: Hint,
    isHintOpen: boolean,
    isEditOpen: boolean,
    isDeleteOpen: boolean,
    onCloseHint: () => void,
    onCloseEdit: () => void,
    onCloseDelete: () => void,
    onEditHint: (newHint: Hint) => void,
    onDeleteHint: () => void
}

const HintInstanceDialogs = (props: HintsInstanceDialogsProps) => {
    return <>
        <HintDialog
          isOpen={props.isHintOpen}
          onClose={() => props.onCloseHint()}
          hint={props.hint} />
        <EditHintDialog
          hint={props.hint}
          isOpen={props.isEditOpen}
          onClose={() => props.onCloseEdit()}
          onEditHint={newHint => props.onEditHint(newHint)} />
        <DeleteHintDialog
          hint={props.hint}
          isOpen={props.isDeleteOpen}
          onClose={() => props.onCloseDelete()}
          onDelete={() => props.onDeleteHint()} />
    </>
}

export default HintInstanceDialogs