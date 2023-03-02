import React from 'react'
import { Box, Toast } from "native-base";

export default function (message: string) {
    Toast.show({
        render: () => {
            return (
                <Box bg="primary.700" px="3" py="2" rounded="xl" mb="2">
                    {message}
                </Box>
            )
        }
    })
}