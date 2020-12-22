export type CartItemType = {
    id: string
    title: string
    description: string
    price: number
    itemImage: string
    count: number
}

export type CartItemsType = Array<CartItemType>

export type CustomerDataType = {
    name: string
    surname: string
    address: string
    email: string
}