import React from 'react'
import { Button } from "native-base"
import { Hint } from '../model/model'
import RNFetchBlob from 'rn-fetch-blob'
import showToast from '../util/showToast'
import { getHintsAsCsvString } from '../util/csvUtils'
import { getTodayAsYYYYMMDD } from '../util/dateUtils'
import { nanoid } from 'nanoid'

interface ExportButonProps {
    hints: Hint[]
}

const ExportButton = ({ hints }: ExportButonProps) => {

    const resolveHintsCsvPath = (fileTitle: string, copiesExisting: number, onPathFound: (path: string) => void) => {
        const fileSpecifier = copiesExisting <= 0 ? "" : `(${copiesExisting})`
        const path = RNFetchBlob.fs.dirs.DownloadDir + "/" + fileTitle + fileSpecifier + ".csv"
        RNFetchBlob
            .fs
            .exists(path)
            .then(fileExists => {
                if (fileExists) {
                    resolveHintsCsvPath(fileTitle, copiesExisting + 1, onPathFound)
                } else {
                    onPathFound(path)
                }
            })
            .catch(error => showToast(error.message))
    }

    const exportHints = () => {
        const hintsCsvTitle = `hints${getTodayAsYYYYMMDD()}`
        const hintsCsv = getHintsAsCsvString(hints)
        const exportWithPath = (path: string) => {
            RNFetchBlob
                .fs
                .createFile(path, hintsCsv, 'utf8')
                .then(() => showToast("Exported to downloads"))
                .catch(error => {
                    // Sometimes after deleting a file, rn-fetch-blob will still consider that it exists
                    // It will wrongly throw an "already exists" error
                    // In this case, we run a workaround to write a file with a random unique name
                    if (error.message.includes("already exists")) {
                        exportHintsWithUniqueNameWorkaround(hintsCsvTitle, hintsCsv)
                    } else {
                        showToast(error.message)
                    }
                })
        } 
        resolveHintsCsvPath(hintsCsvTitle, 0, exportWithPath)
    }

    const exportHintsWithUniqueNameWorkaround = (fileTitle: string, hintsCsv: string) => {
        const path = RNFetchBlob.fs.dirs.DownloadDir + "/" + fileTitle + "_" + nanoid() + ".csv"
        RNFetchBlob
            .fs
            .createFile(path, hintsCsv, 'utf8')
            .then(() => showToast("Exported to downloads"))
            .catch(error => showToast(error.message))
    }

    return (
        <Button
            my="2"
            mx="4"
            variant="outline"
            colorScheme="secondary"
            alignSelf="flex-start"
            borderRadius="2xl"
            borderColor="secondary.400"
            onPress={exportHints}>
            EXPORT
        </Button>
    )
}

export default ExportButton