import React from 'react'
import { Box, Text } from "native-base"

const AppBar = () => {
    return <Box safeAreaTop bg={{
        linearGradient: {
            colors: ['secondary.400', 'tertiary.400'],
            start: [0.1, 0],
            end: [1.0, 0]
        }
    }} alignItems="center">
        <Text color="white" fontSize="30" mt="3" mb="3">
            Hint Me In!
        </Text>
    </Box>
}

export default AppBar