import { useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage'
import showToast from "../util/showToast"

export function useLocalStorage<T>(key: string, initial: T | (() => T)) {
  const initialValue = typeof initial === "function" ? (initial as () => T)() : initial
  const [value, setValue] = useState<T>(initialValue)

  useEffect(() => {
    if (value == initialValue) {
        initializeItemAsync(key, setValue)
    } else {
        const valueAsString = JSON.stringify(value)
        saveItemAsync(key, valueAsString)
    }
  }, [value, key])

  return [value, setValue] as [T, typeof setValue]
}

async function initializeItemAsync<T>(key: string, setValue: (value: T) => void) {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        if (jsonValue === null) return
        setValue(JSON.parse(jsonValue))
    } catch (error) {
        showToast('Error initializing from storage item with key ' + key)
    }
}

async function saveItemAsync(key: string, value: string) {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (error) {
        showToast('Error saving item with key ' + key)
    }
}