class UserCode {
    name: string

    constructor(name: string) {
        this.name = name
    }

    //teha constructor

}

type G = ConstructorParameters<typeof UserCode>