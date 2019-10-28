abstract class Coin {
    constructor(public value: number) {
        this.value = value;
    }

    abstract getImageUrl(): string
}

class Quarter extends Coin {
    constructor() {
        super(.25);
    }

    getImageUrl(): string {
        return "/img/Quarter.png";
    }
}

class Dime extends Coin {
    constructor() {
        super(.10);
    }

    getImageUrl(): string {
        return "/img/Dime.png";
    }
}

class Half extends Coin {
    constructor(){
        super(.5)
    }

    getImageUrl(): string {
        return "/img/Half.png";
    }
}

class Dollar extends Coin {
    constructor() {
        super(1)
    }

    getImageUrl(): string {
        return "/img/Dollar.jpg";
    }
}