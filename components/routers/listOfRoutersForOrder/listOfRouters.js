import express from "express"
const router = express.Router()
import bakedGoods from "../listGoods/bakedGoods/bakedGoods.js"
import driedFruit from '../listGoods/driedFruits/driedFruits.js'
import vegetable from "../listGoods/vegetables/vegetables.js"
import jamAndPickle from '../listGoods/jamAndPickles/jamAndPickles.js'
import sweet from '../listGoods/sweets/sweets.js'

router.use('/bakedGoods', bakedGoods)
router.use('/driedFruits', driedFruit)
router.use('/vegetables', vegetable)
router.use('/jamAndPickles', jamAndPickle)
router.use('/sweets', sweet)
router.use('/nuts', (req, res) => {
    res.send('nuts')
})
router.use('/mooshrooms', (req, res) => {
    res.send('mooshrooms')
})
router.use('/greens', (req, res) => {
    res.send('greens')
})
router.use('/berryAndFruits', (req, res) => {
    res.send('berryAndFruits')
})
router.use('/drinks', (req, res) => {
    res.send('drinks')
})
router.use('/milks', (req, res) => {
    res.send('milks')
})
router.use('/fish', (req, res) => {
    res.send('fish')
})
router.use('/meat', (req, res) => {
    res.send('meat')
})
export default router