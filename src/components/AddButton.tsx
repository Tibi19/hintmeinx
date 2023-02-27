import React from 'react';
import { AddIcon, Fab } from "native-base";

interface AddButtonProps {
    setIsAddOpen: (isOpen: boolean) => void
}

const AddButton = ({ setIsAddOpen }: AddButtonProps) => {
    return <Fab
        renderInPortal={false}
        colorScheme="secondary"
        shadow={2}
        size="sm"
        onPress={() => { setIsAddOpen(true) }}
        icon={
            <AddIcon
                size="4"
                color="primary.400" />
        }
    />
};

export default AddButton