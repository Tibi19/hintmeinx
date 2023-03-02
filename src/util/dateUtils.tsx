
export const getTodayAsYYYYMMDD = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const day = today.getDate()
    const monthString = month < 10 ? `0${month}` : month.toString()
    const dayString = day < 10 ? `0${day}` : day.toString()
    return `${year}${monthString}${dayString}`
}