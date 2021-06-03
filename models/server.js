import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', err => console.log(err))
db.on('connected', () => console.log('Connected to Database'))


export default db