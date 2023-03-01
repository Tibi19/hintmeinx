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
  NativeBaseProvider,
  FlatList,
  Box
} from 'native-base';
import config from './config/config';
import theme from './config/theme';
import AppBar from './components/AppBar';
import AddHintDialog from './components/dialog/AddHintDialog';
import AddButton from './components/AddButton';
import { Hint } from './model/model';
import { useLocalStorage } from './hook/useLocalStorage';
import HintRow from './components/HintRow';
import { MenuProvider } from 'react-native-popup-menu';

const App = () => {
  const [hints, setHints] = useLocalStorage<Hint[]>("hints", [])
  const addHint = (hint: Hint) => {
    setHints(current => [...current, hint])
  }
  const editHint = (newHint: Hint) => {
    setHints(current => {
      const newHints = current.map(hint => {
        if(hint.id === newHint.id) {
          return newHint
        }
        return hint
      })
      return newHints
    })
  }
  const deleteHint = (hintId: string) => {
    setHints(current => {
      return current.filter(hint => hint.id !== hintId)
    })
  }

  const [isAddOpen, setIsAddOpen] = React.useState(false)
  const onCloseAdd = () => setIsAddOpen(false)
  const cancelRef = React.useRef(null)

  return (
    <NativeBaseProvider config={config} theme={theme}>
      <MenuProvider>

        <AppBar />
        <Box bg="singletons.black" height="100%" >
          <FlatList
            data={hints}
            renderItem={({ item }) =>
              <HintRow
                hint={item}
                onEditHint={newHint => editHint(newHint)}
                onDeleteHint={() => deleteHint(item.id)}
              />}
            keyExtractor={item => item.id}
            py="2"
            contentContainerStyle={{ paddingBottom: 150 }}
          />
        </Box>
        <AddHintDialog
          isOpen={isAddOpen}
          onClose={() => onCloseAdd()}
          onSubmitHint={hint => addHint(hint)} />
        <AddButton setIsAddOpen={(isOpen) => setIsAddOpen(isOpen)} />

      </MenuProvider>
    </NativeBaseProvider>
  );
};

export default App;
