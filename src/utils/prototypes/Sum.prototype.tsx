/* eslint-disable no-unused-vars */
export {}

declare global {
    interface Array<T> {
        sum(key: string): number
    }
}

Array.prototype.sum = function (key: string): number {
    return this.reduce((acc: number, el: any) => {
        return acc + el[key]
    }, 0)
}
