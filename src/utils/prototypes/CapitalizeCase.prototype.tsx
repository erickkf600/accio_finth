/* eslint-disable no-unused-vars */
export {}

declare global {
    interface String {
        captalizeCase(): string
    }
}

String.prototype.captalizeCase = function (): string {
    const value = this?.toString()
    if (!value) return ''
    const words: RegExp = /\b(?!de|da|do|dos|das|of)[A-zÀ-ú]+/g
    const newVal: string = value.replace(words, match => {
        return match.replace(
            /^\w/,
            word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(),
        )
    })
    return newVal.charAt(0).toUpperCase() + newVal.substr(1)
}
