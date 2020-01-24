const {Router} = require('express')
const Test = require('../models/Test')
const router = Router()
router.get('/', async(req,res) => {
    const tests  = await Test.find({})
    res.render('index',{
        title: 'Test',
        isIndex: true,
        tests
    })
})
router.get('/create',(req,res) => {
    res.render('create',{
        title: 'Creating',
        isCreate: true
    })
})
module.exports = router
