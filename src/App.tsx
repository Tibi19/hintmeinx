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
  Box
} from 'native-base';
import NativeBaseIcon from './components/NativeBaseIcon';
import config from './config/config';
import theme from './config/theme';
import AppBar from './components/AppBar';
import AddHintDialog from './components/AddHintDialog';
import AddButton from './components/AddButton';
import { Hint } from './model/model';

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

const App = () => {
  const [isAddOpen, setIsAddOpen] = React.useState(false)
  const onCloseAdd = () => setIsAddOpen(false)
  const cancelRef = React.useRef(null)

  const submitHint = (hint: Hint) => {
    console.log("hint with domain: " + hint.domain + " user: " + hint.username + " text: " + hint.hintText)
  }

  return (
    <NativeBaseProvider config={config} theme={theme}>
      <AppBar />
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
      <AddHintDialog isOpen={isAddOpen} onClose={() => onCloseAdd()} onSubmitHint={hint => submitHint(hint)} cancelRef={cancelRef} />
      <AddButton setIsAddOpen={(isOpen) => setIsAddOpen(isOpen)} />
    </NativeBaseProvider>
  );
};

export default App;
