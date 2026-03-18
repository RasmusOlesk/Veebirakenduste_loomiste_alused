//harjutus 1
type user = {
    id: string
    name: string
    age: number
    address: {
        street: string
        city: string
    }
}
//soovin näidata ainult name ja age, aga võetakse kogu objekti sisu
//kuna kasutatake User type
function renderUserdetails(user: User) {
    console.log(user.name, user.age)
}

const user: User = {
    id: "ads",
    name: "Kyle",
    age: 123,
    address: {
        street: "sdf",
        city: "London"
    }
}

renderUserdetails(user)