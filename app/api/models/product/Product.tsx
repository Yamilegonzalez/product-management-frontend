export class Product {
    id: number
    name: string
    description: string
    price: number
    imageUrl: string
    categoryId: string
    category?: string

    constructor(data: any) {
        this.id = data.id
        this.name = data.name
        this.price = data.price
        this.description = data.description
        this.imageUrl = data.imageUrl
        this.categoryId = data.categoryId
    }

    get formattedPrice(): string {
        return `$${this.price.toFixed(2)}`
    }
}
