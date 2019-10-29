import * as categories from "./productCategory"

export interface IProduct {
    name: string
    price: number
    category?: categories.ProductCategory
}

export class Initial implements IProduct {
    name = "Please select a product"
    price = 0
}

export class CocaCola implements IProduct {
    name: string = "Coca-Cola"
    price = 2.30
    category = new categories.SodaCategory()
}

export class Fanta implements IProduct {
    name: string = "Fanta"
    price = 2
    category = new categories.SodaCategory()
}

export class Sprite implements IProduct {
    name: string = "Sprite"
    price = 1.80
    category = new categories.SodaCategory()
}

export class Peanuts implements IProduct {
    name: string = "Peanuts"
    price = 1.50
    category = new categories.NutsCategory()
}

export class Cashews implements IProduct {
    name: string = "Cashews"
    price = 2.80
    category = new categories.NutsCategory()
}

export class Plain implements IProduct {
    name: string = "Plain"
    price = 2
    category = new categories.ChipsCategory()
}

export class Cheddar implements IProduct {
    name: string = "Cheddar"
    price = 2
    category = new categories.ChipsCategory()
}

export class Mints implements IProduct {
    name: string = "Mints"
    price = 1.30
    category = new categories.CandyCategory()
}

export class Gummies implements IProduct {
    name: string = "Gummies"
    price = 1.90
    category = new categories.CandyCategory()
}

export class Hersey implements IProduct {
    name: string = "Hersey's"
    price = 1.30
    category = new categories.CandyBarCategory()
}

export class MilkyWay implements IProduct {
    name: string = "Milky Way"
    price = 1.80
    category = new categories.CandyBarCategory()
}