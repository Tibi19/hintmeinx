import { AlertDialog, Button, Input, Text, VStack } from "native-base"
import React from "react"
import { Hint } from "../model/model"
import 'react-native-get-random-values'
import { nanoid } from 'nanoid'

interface AddHintDialogProps {
    isOpen: boolean,
    onClose: () => void,
    onSubmitHint: (hint: Hint) => void,
    cancelRef: React.MutableRefObject<null>
}

const AddHintDialog = ({ isOpen, onClose, onSubmitHint, cancelRef }: AddHintDialogProps) => {
    const [domain, setDomain] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [hintText, setHintText] = React.useState("")

    const onSubmit = () => {
        onSubmitHint({ id: nanoid(), domain, username, hintText })
        setDomain("")
        setUsername("")
        setHintText("")
        onClose()
    }

    return <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Add a Hint</AlertDialog.Header>
            <AlertDialog.Body>
                <VStack width="90%" alignItems="center">
                    <Input variant="underlined" placeholder="Domain" value={domain} onChangeText={text => setDomain(text)} />
                    <Input variant="underlined" placeholder="Username" value={username} onChangeText={text => setUsername(text)} />
                    <Input variant="underlined" placeholder="Hint" value={hintText} onChangeText={text => setHintText(text)} />
                    <Button.Group space={4} mt="5">
                        <Button colorScheme="secondary" onPress={onClose} ref={cancelRef} color="black">
                            <Text color="black">CANCEL</Text>
                        </Button>
                        <Button colorScheme="secondary" onPress={onSubmit}>
                            <Text color="black">SUBMIT</Text>
                        </Button>
                    </Button.Group>
                </VStack>
            </AlertDialog.Body>
        </AlertDialog.Content>
    </AlertDialog>
}

export default AddHintDialog