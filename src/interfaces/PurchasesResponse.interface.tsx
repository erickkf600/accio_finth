export interface Purchases {
    id: number
    buy_name: string
    instalment_num: number
    total_instalments: number
    instalment_value: number
    card: {
        id: number
        name: string
    }
}
