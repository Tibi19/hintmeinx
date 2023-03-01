import React from 'react'
import { Button, Input, Text, VStack } from "native-base"
import { Hint } from "../../model/model"
import Dialog, { DialogControlProps } from './Dialog'

interface EditHintDialogProps extends DialogControlProps {
    hint: Hint,
    onEditHint: (newHint: Hint) => void
}

const EditHintDialog = ({ isOpen, hint, onClose, onEditHint }: EditHintDialogProps) => {
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

    return (
        <Dialog 
            title="Edit Hint" 
            isOpen={isOpen} 
            onClose={onCancelDialog}
            alignChildren="center"
            >
            <VStack width="90%" alignItems="center">
                    <Input fontSize="15" variant="underlined" placeholder="Domain" value={domain} onChangeText={text => setDomain(text)} />
                    <Input fontSize="15" variant="underlined" placeholder="Username" value={username} onChangeText={text => setUsername(text)} />
                    <Input multiline fontSize="15" variant="underlined" placeholder="Hint" value={hintText} onChangeText={text => setHintText(text)} />
                    <Button.Group space={4} mt="5">
                        <Button colorScheme="secondary" onPress={onCancelDialog} color="black">
                            <Text color="black">CANCEL</Text>
                        </Button>
                        <Button colorScheme="secondary" onPress={onEdit}>
                            <Text color="black">SUBMIT</Text>
                        </Button>
                    </Button.Group>
                </VStack>
        </Dialog>
    )
}

export default EditHintDialog