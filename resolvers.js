import { nanoid } from "nanoid"

class Person {
    constructor(id, { name, age, gender }) {
        this.id = id;
        this.name = name
        this.age = age
        this.gender = gender
    }
}

const personHolder = {}
const resolvers = {
    createPerson: (input) => {
        let id = nanoid();
        personHolder[id] = input
        return new Person(id, input);
    },
    getPerson: (id) => {
        if (!personHolder[id]) throw new Error(`Person with ID ${id} doesn't exists`);
        return new Person(id, personHolder[id]);
    }
}

export default resolvers