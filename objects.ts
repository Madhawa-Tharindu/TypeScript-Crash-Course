// Objects in TS

// here is the normal JS Object

let person1 = {
    name: "Madhawa",
    age: "27"
}

//this is its TS version. we need to give the type for every key.

let person2 : {name: string; age: number} = {
    name: "Madhawa",
    age: 27
}

// Now I make a similar object again.

let person3 : {name: string; age: number} = {
    name: "Kamal",
    age: 30
}

// Now you can see person 1 & person 3 Object is same. In this example we can create a custom type like below

type Person = {
    name: string,
    age: number
}

//Now we can re-use it in our objects

let person4 : Person = {
    name: "Madhawa",
    age: 27
}

let person5 : Person = {
    name: "Kamal",
    age: 30
}