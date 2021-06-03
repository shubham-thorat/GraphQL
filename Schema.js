import { buildSchema } from 'graphql'

const UserSchema = buildSchema(`
    type Person {
        id : ID!
        name : String,
        age : Int,
        gender : Gender
    }
    enum Gender {
        MALE,
        FEMALE,
        OTHER
    }
    
    input PersonInput {
        name : String,
        age : Int,
        gender : Gender
    }

    type Mutation {
        createPerson(input : PersonInput) : Person
    }

    type Query {
        getPerson(id : ID) : Person
    }
`)

export default UserSchema
