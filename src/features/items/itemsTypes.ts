export type ItemType = {
    id: string
    title: string
    description: string
    price: number
    itemImage: string
    isAdded: boolean
}

export type ItemsType = Array<ItemType>