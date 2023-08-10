type UserType = {
    name: string
    age: number
    address: {title: string}
}

function icreaseAge(u: UserType) {
    u.age++
}

test("reference type test", () => {

    let user: UserType = {
        name: "Daniil",
        age: 25,
        address: {
            title: "Astrakhan"
        }

    }

    icreaseAge(user)

    expect(user.age).toBe(26)

    const daredevil = user

    daredevil.age = 64

    expect(user.age).toBe(64)
})

test("array type test", () => {

    let users = [
        {
            name: "Daniil",
            age: 25
        },
        {
            name: "Daniil",
            age: 25
        }
    ]

    let admins = users

    admins.push({name: "Vova", age: 6})

    expect(users[2]).toEqual({name: "Vova", age: 6})

})

test("value type test", () => {

    let usersCount = 100

    let adminsCount = usersCount

    ++adminsCount

    expect(adminsCount).toEqual(101)

})

test("reference type test", () => {

    let address = {
        title: "Astrakhan"
    }

    let user: UserType = {
        name: "Daniil",
        age: 25,
        address: address
    }

    let user2: UserType = {
        name: "Ksenia",
        age: 24,
        address: address
    }

    user2.address.title = "Astrakhan City"

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe("Astrakhan City")

})

test("reference type array test", () => {

    let address = {
        title: "Astrakhan"
    }

    let user: UserType = {
        name: "Daniil",
        age: 25,
        address: address
    }

    let user2: UserType = {
        name: "Ksenia",
        age: 24,
        address: address
    }

    let users = [user, user2, {name: "Diamond", age: 2, address: address}]

    let admins = [user, user2]

    admins[0].name = "Danila"

    expect(users[0].name).toBe("Danila")
    expect(user.name).toBe("Danila")

})