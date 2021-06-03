import express from 'express'
import resolvers from '../resolvers.js'

const router = express.Router()

router.post('/create', (req, res) => {
    const { name, age, gender } = req.body
    const user = resolvers.createPerson({ name, age, gender });
    return res.json(user);
})

router.post('/get', (req, res) => {
    const { id } = req.body

    const user = resolvers.getPerson(id);
    return res.json(user);
})

export default router