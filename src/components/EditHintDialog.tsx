import React from 'react'
import { AlertDialog, Button, Input, Text, VStack } from "native-base"
import { Hint } from "../model/model"

interface EditHintDialogProps {
    isOpen: boolean,
    hint: Hint,
    onClose: () => void,
    onEditHint: (newHint: Hint) => void,
    cancelRef: React.MutableRefObject<null>
}

const EditHintDialog = ({ isOpen, hint, onClose, onEditHint, cancelRef }: EditHintDialogProps) => {
    const [domain, setDomain] = React.useState(hint.domain)
    const [username, setUsername] = React.useState(hint.username)
    const [hintText, setHintText] = React.useState(hint.hintText)

    const onCancelDialog = () => {
        setDomain(hint.domain)
        setUsername(hint.username)
        setHintText(hint.hintText)
        onClose()
    }
    const onEdit = () => {
        const id = hint.id
        onEditHint({id, domain, username, hintText})
        onClose()
    }

    return <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onCancelDialog}>
        <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Edit Hint</AlertDialog.Header>
            <AlertDialog.Body alignItems="center">
                <VStack width="90%" alignItems="center">
                    <Input fontSize="15" variant="underlined" placeholder="Domain" value={domain} onChangeText={text => setDomain(text)} />
                    <Input fontSize="15" variant="underlined" placeholder="Username" value={username} onChangeText={text => setUsername(text)} />
                    <Input multiline fontSize="15" variant="underlined" placeholder="Hint" value={hintText} onChangeText={text => setHintText(text)} />
                    <Button.Group space={4} mt="5">
                        <Button colorScheme="secondary" onPress={onCancelDialog} ref={cancelRef} color="black">
                            <Text color="black">CANCEL</Text>
                        </Button>
                        <Button colorScheme="secondary" onPress={onEdit}>
                            <Text color="black">SUBMIT</Text>
                        </Button>
                    </Button.Group>
                </VStack>
            </AlertDialog.Body>
        </AlertDialog.Content>
    </AlertDialog>
}

export default EditHintDialog