/// <reference path="productCategory.ts" />

interface IProduct {
    name: string
    price: number
    category?: ProductCategory
}

class Initial implements IProduct {
    name = "Please select a product"
    price = 0
}

class CocaCola implements IProduct {
    name: string = "Coca-Cola"
    price = 2.30
    category = new SodaCategory()
}

class Fanta implements IProduct {
    name: string = "Fanta"
    price = 2
    category = new SodaCategory()
}

class Sprite implements IProduct {
    name: string = "Sprite"
    price = 1.80
    category = new SodaCategory()
}

class Peanuts implements IProduct {
    name: string = "Peanuts"
    price = 1.50
    category = new NutsCategory()
}

class Cashews implements IProduct {
    name: string = "Cashews"
    price = 2.80
    category = new NutsCategory()
}

class Plain implements IProduct {
    name: string = "Plain"
    price = 2
    category = new ChipsCategory()
}

class Cheddar implements IProduct {
    name: string = "Cheddar"
    price = 2
    category = new ChipsCategory()
}

class Mints implements IProduct {
    name: string = "Mints"
    price = 1.30
    category = new CandyCategory()
}

class Gummies implements IProduct {
    name: string = "Gummies"
    price = 1.90
    category = new CandyCategory()
}

class Hersey implements IProduct {
    name: string = "Hersey's"
    price = 1.30
    category = new CandyBarCategory()
}

class MilkyWay implements IProduct {
    name: string = "Milky Way"
    price = 1.80
    category = new CandyBarCategory()
}