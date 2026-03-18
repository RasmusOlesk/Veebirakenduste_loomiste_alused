//soovin näidata ainult name ja age, aga võetakse kogu objekti sisu
//kuna kasutatake User type
function renderUserdetails(user) {
    console.log(user.name, user.age);
}
var user = {
    id: "ads",
    name: "Kyle",
    age: 123,
    address: {
        street: "sdf",
        city: "London"
    }
};
renderUserdetails(user);
