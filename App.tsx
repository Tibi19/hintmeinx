/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Box,
  extendTheme,
  Fab,
  Icon
} from 'native-base';
import NativeBaseIcon from './src/components/NativeBaseIcon';

// Color Switch Component`
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

const theme = extendTheme({
  colors: {
    primary: {
      "50": "#90acdb",
      "100": "#7896cc",
      "200": "#6282ba",
      "300": "#526fa2",
      "400": "#455e89",
      "500": "#425473",
      "600": "#3e4a5f",
      "700": "#39404d",
      "800": "#32363c",
      "900": "#2a2b2c"
    },
    secondary: {
      "50": "#ffdad2",
      "100": "#ffbaab",
      "200": "#fb9c87",
      "300": "#f48065",
      "400": "#f25f3f",
      "500": "#e95331",
      "600": "#e04623",
      "700": "#c74224",
      "800": "#ad4027",
      "900": "#943c28"
    },
    tertiary: {
      "50": "#e56cb5",
      "100": "#d951a2",
      "200": "#ca3890",
      "300": "#a63478",
      "400": "#892b64",
      "500": "#712a55",
      "600": "#5c2747",
      "700": "#48243a",
      "800": "#361e2d",
      "900": "#251820"
    },
    singletons: {
      "white": "#E0E0E0",
      "black": "#0A171F",
      "lightText": "#ABABAB",
      "darkText": "#181818",
    }
  },
  config: {
    initialColorMode: 'dark',
  },
});

// const addButton = () => {
//   return <Box position="relative" w="100%" h={200}>
//     <Fab right={70} bottom={50} icon= {
//         <Icon color="white" as= {
//             <AntDesign name="plus" />
//           } />
//       } 
//     />
//   </Box>;
// };


const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Center
        _dark={{ bg: 'blueGray.900' }}
        _light={{ bg: 'blueGray.50' }}
        px={4}
        flex={1}>
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="lg">Welcome to NativeBase</Heading>
          <HStack space={2} alignItems="center">
            <Text>Edit</Text>
            <Box
              px={2}
              py={1}
              _dark={{ bg: "blueGray.800" }}
              _light={{ bg: "blueGray.200" }}
            >
              App.js
            </Box>
            <Text>and save to reload.</Text>
          </HStack>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize={'xl'}>
              Learn NativeBase
            </Text>
          </Link>
          <ToggleDarkMode />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};
export default App;
