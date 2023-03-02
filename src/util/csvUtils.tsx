import { Hint } from "../model/model"

const wrapTextContainingComma = (text: string) => text.includes(',') ? "\"$text\"" : text

export const getHintsAsCsvString = (hints: Hint[]) => {
    let csv = "domain,username,hint"
    hints.forEach(hint => {
        const domain = wrapTextContainingComma(hint.domain)
        const username = wrapTextContainingComma(hint.username)
        const hintText = wrapTextContainingComma(hint.hintText)
        const csvLine = `${domain},${username},${hintText}`
        csv += `\n${csvLine}`
    })
    return csv
}