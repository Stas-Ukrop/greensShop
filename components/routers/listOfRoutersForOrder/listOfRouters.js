import express from "express"
const router = express.Router()


router.get('/bakedGoods', (req, res) => {
    res.send('baked goods')
})
router.get('/driedFruits', (req, res) => {
    res.send('dried fruit')
})
router.get('/vegetables', (req, res) => {
    res.send('vegetables')
})
router.get('/jamAndPickles', (req, res) => {
    res.send('jamAndPickles')
})
router.get('/sweets', (req, res) => {
    res.send('sweets')
})
router.get('/nuts', (req, res) => {
    res.send('nuts')
})
router.get('/mooshrooms', (req, res) => {
    res.send('mooshrooms')
})
router.get('/greens', (req, res) => {
    res.send('greens')
})
router.get('/berryAndFruits', (req, res) => {
    res.send('berryAndFruits')
})
router.get('/drinks', (req, res) => {
    res.send('drinks')
})
router.get('/milks', (req, res) => {
    res.send('milks')
})
router.get('/fish', (req, res) => {
    res.send('fish')
})
router.get('/meat', (req, res) => {
    res.send('meat')
})
export default router