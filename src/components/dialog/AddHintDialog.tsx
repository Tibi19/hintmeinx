import { Button, Input, Text, VStack } from "native-base"
import React from "react"
import { Hint } from "../../model/model"
import 'react-native-get-random-values'
import { nanoid } from 'nanoid'
import Dialog, { DialogControlProps } from "./Dialog"

interface AddHintDialogProps extends DialogControlProps {
    onSubmitHint: (hint: Hint) => void
}

const AddHintDialog = ({ isOpen, onClose, onSubmitHint }: AddHintDialogProps) => {
    const [domain, setDomain] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [hintText, setHintText] = React.useState("")

    const onCloseDialog = () => {
        setDomain("")
        setUsername("")
        setHintText("")
        onClose()
    }
    const onSubmit = () => {
        onSubmitHint({ id: nanoid(), domain, username, hintText })
        onCloseDialog()
    }

    return (
        <Dialog
            isOpen={isOpen}
            onClose={onCloseDialog}
            title="Add a Hint"
            alignChildren="center">
            <VStack width="90%" alignItems="center">
                <Input fontSize="15" variant="underlined" placeholder="Domain" value={domain} onChangeText={text => setDomain(text)} />
                <Input fontSize="15" variant="underlined" placeholder="Username" value={username} onChangeText={text => setUsername(text)} />
                <Input multiline fontSize="15" variant="underlined" placeholder="Hint" value={hintText} onChangeText={text => setHintText(text)} />
                <Button.Group space={4} mt="5">
                    <Button colorScheme="secondary" onPress={onCloseDialog} color="black">
                        <Text color="black">CANCEL</Text>
                    </Button>
                    <Button colorScheme="secondary" onPress={onSubmit}>
                        <Text color="black">SUBMIT</Text>
                    </Button>
                </Button.Group>
            </VStack>
        </Dialog>
    )
}

export default AddHintDialog