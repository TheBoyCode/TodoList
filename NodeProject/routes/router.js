const {Router} = require('express')
const Test = require('../models/Test')
const router = Router()
router.get('/', async(req,res) => {
    const tests  = await Test.find({})
    res.render('index',{
        title: 'List',
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
router.post('/create', async (req, res) => {
    const todo = new Test({
        title: req.body.title
    })
  
    await todo.save()
    res.redirect('/')
})
router.post('/completed', async (req, res) => {
    const todo = await Test.findById(req.body.id)
    todo.completed = !!req.body.completed
    await todo.save()
    res.redirect('/')
})
module.exports = router
