/**
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
import HintInstanceDialogs from './components/dialog/HintInstanceDialogs';
import { StatusBar } from 'react-native';

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
  const [isHintOpen, setIsHintOpen] = React.useState(false)
  const [isEditOpen, setIsEditOpen] = React.useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = React.useState(false)
  const [hintForDialog, setHintForDialog] = React.useState<Hint>({id: "", domain: "", username: "", hintText: ""})
  const openDialog = (hint: Hint, openDialogByState: () => void) => {
    setHintForDialog(hint)
    openDialogByState()
  }
  const isAnyDialogOpen = () => isHintOpen || isEditOpen || isDeleteOpen

  StatusBar.setBackgroundColor(theme.colors.primary[400])

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
                onOpenHint={() => openDialog(item, () => setIsHintOpen(true))}
                onOpenEdit={() => openDialog(item, () => setIsEditOpen(true))}
                onOpenDelete={() => openDialog(item, () => setIsDeleteOpen(true))}
              />}
            keyExtractor={item => item.id}
            py="2"
            contentContainerStyle={{ paddingBottom: 155 }}
          />
        </Box>

        {isAnyDialogOpen() &&
          <HintInstanceDialogs
            hint={hintForDialog}
            isHintOpen={isHintOpen}
            isEditOpen={isEditOpen}
            isDeleteOpen={isDeleteOpen}
            onCloseHint={() => setIsHintOpen(false)}
            onCloseEdit={() => setIsEditOpen(false)}
            onCloseDelete={() => setIsDeleteOpen(false)}
            onEditHint={newHint => editHint(newHint)}
            onDeleteHint={() => deleteHint(hintForDialog.id)}
          />
        }

        <AddHintDialog
          isOpen={isAddOpen}
          onClose={() => setIsAddOpen(false)}
          onSubmitHint={hint => addHint(hint)} />

        <AddButton setIsAddOpen={(isOpen) => setIsAddOpen(isOpen)} />

      </MenuProvider>
    </NativeBaseProvider>
  );
};

export default App;
