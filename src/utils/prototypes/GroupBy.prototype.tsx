/* eslint-disable no-unused-vars */
export {}

declare global {
    interface Array<T> {
        groupBy(key: string): Array<T>
    }
}

Array.prototype.groupBy = function (key: string): Array<any> {
    const reduced: any[] = this.reduce((rv: any, x: any) => {
        ;(rv[x[key]] = rv[x[key]] || []).push(x)
        return rv
    }, {})
    return Object.keys(reduced).map((el: any) => {
        return {
            key: el,
            data: reduced[el],
        }
    })
}
