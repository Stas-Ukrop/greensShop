import express from "express"
const router = express.Router()
import bakedGoods from "../listGoods/bakedGoods/bakedGoods.js"
import driedFruit from '../listGoods/driedFruits/driedFruits.js'
import vegetable from "../listGoods/vegetables/vegetables.js"
import jamAndPickle from '../listGoods/jamAndPickles/jamAndPickles.js'
import sweet from '../listGoods/sweets/sweets.js'
import nut from '../listGoods/nuts/nuts.js'
import mooshroom from '../listGoods/mooshrooms/mooshrooms.js'
import greens from '../listGoods/greens/greens.js'
import berryAndFruit from '../listGoods/berryAndFruits/berryAndFruits.js'
import drink from '../listGoods/drinks/drinks.js'

router.use('/bakedGoods', bakedGoods)
router.use('/driedFruits', driedFruit)
router.use('/vegetables', vegetable)
router.use('/jamAndPickles', jamAndPickle)
router.use('/sweets', sweet)
router.use('/nuts', nut)
router.use('/mooshrooms', mooshroom)
router.use('/greens', greens)
router.use('/berryAndFruits', berryAndFruit)
router.use('/drinks', drink)

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