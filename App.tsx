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
  AddIcon,
  AlertDialog,
  Button,
  FormControl,
  Input
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
  fontConfig: {
    Roboto: {
      100: {normal: "roboto_light"},
      200: {normal: "roboto_light"},
      300: {normal: "roboto_light"},
      400: {normal: "roboto"},
      500: {normal: "roboto_medium"},
      600: {normal: "roboto_medium"},
      700: {normal: 'roboto_bold'},
      800: {normal: 'roboto_bold'},
      900: {normal: 'roboto_bold'}
    }
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
    mono: "Roboto",
  },
  config: {
    initialColorMode: 'dark',
  }
});

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

interface AddButtonProps {
  setIsAddOpen: (isOpen: boolean) => void
}
const AddButton = ({setIsAddOpen}: AddButtonProps) => {
  return <Fab
    renderInPortal={false}
    colorScheme="secondary"
    shadow={2}
    size="sm"
    onPress={() => {setIsAddOpen(true)}}
    icon={
      <AddIcon
        size="4"
        color="primary.400" />
    }
  />
};

const AppBar = () => {
  return <>
    <Box safeAreaTop bg={{
      linearGradient: {
        colors: ['secondary.400', 'tertiary.400'],
        start: [0.2, 0],
        end: [1.2, 0]
      }
    }} alignItems="center">
      <Text color="white" fontSize="30" mt="3" mb="3">
        Hint Me In!
      </Text>
    </Box>
  </>
}

interface Hint {
  domain: string,
  username: string,
  hintText: string
}
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
    onSubmitHint({domain, username, hintText})
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
          <Input variant="underlined" placeholder="Domain" value={domain} onChangeText={text => setDomain(text)}/>
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
      <AddHintDialog isOpen={isAddOpen} onClose={() => onCloseAdd()} onSubmitHint={hint => submitHint(hint)} cancelRef={cancelRef}/>
      <AddButton setIsAddOpen={(isOpen) => setIsAddOpen(isOpen)}/>
    </NativeBaseProvider>
  );
};
export default App;
