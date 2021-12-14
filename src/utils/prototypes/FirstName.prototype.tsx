/* eslint-disable no-unused-vars */
export {}

declare global {
    interface String {
        firstName(): string
    }
}

String.prototype.firstName = function (): string {
    const value = this.toString()
    const first = value.split(' ')

    return first[0]
}
