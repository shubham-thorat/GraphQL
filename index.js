import express from 'express'
import dotenv from 'dotenv'
import resolvers from './resolvers.js'
import schema from './Schema.js'
import { graphqlHTTP } from 'express-graphql'
import user from './routes/user.js'
import initDB from './models/server.js'

dotenv.config()
const app = express()
const root = resolvers

app.use(express.json({ urlencoded: true, limit: "50mb" }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.use('/', user);

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

