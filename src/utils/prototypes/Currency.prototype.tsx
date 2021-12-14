/* eslint-disable no-unused-vars */
export {}

declare global {
    interface Number {
        currency(type?: string): string
    }
}

Number.prototype.currency = function (type: string = 'brl'): string {
    const currencyFormat = new Intl.NumberFormat('id', {
        style: 'currency',
        currency: type.toUpperCase(),
    }).format(+this)
    return currencyFormat
}
