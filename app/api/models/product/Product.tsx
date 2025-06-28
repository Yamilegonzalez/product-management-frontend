export class Product {
    id: number
    name: string
    description: string
    price: number
    imageURL: string
    categoryId: string


    constructor(data: any) {
        this.id = data.id
        this.name = data.name
        this.price = data.price
        this.description = data.description
        this.imageURL = data.imageUrl
        this.categoryId = data.category
    }

    get formattedPrice(): string {
        return `$${this.price.toFixed(2)}`
    }
}
