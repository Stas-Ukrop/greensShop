import express from "express"
const router = express.Router()
import bakedGoods from "../listGoods/bakedGoods/bakedGoods.js"


router.use('/bakedGoods', bakedGoods)
router.use('/driedFruits', (req, res) => {
    res.send('dried fruit')
})
router.use('/vegetables', (req, res) => {
    res.send('vegetables')
})
router.use('/jamAndPickles', (req, res) => {
    res.send('jamAndPickles')
})
router.use('/sweets', (req, res) => {
    res.send('sweets')
})
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