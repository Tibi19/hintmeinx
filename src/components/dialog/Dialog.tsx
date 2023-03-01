import { AlertDialog } from 'native-base'
import React from 'react'

export interface DialogControlProps {
    isOpen: boolean,
    onClose: () => void
}

interface DialogProps extends DialogControlProps {
    title: string,
    alignChildren?: string,
    children: React.ReactNode
}

const defaultProps: Partial<DialogProps> = {
    alignChildren: "stretch"
}

const Dialog = (props: DialogProps) => {
    props = {...defaultProps, ...props}
    const {isOpen, onClose, title, alignChildren, children} = props
    const cancelRef = React.useRef(null)

    return (
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>{title}</AlertDialog.Header>
            <AlertDialog.Body alignItems={alignChildren}>
                {children}
            </AlertDialog.Body>
        </AlertDialog.Content>
    </AlertDialog>
    )
}

export default Dialog