const router = require('express').Router()

const { budget, actual} = require('./controllers')

//budget function
router.get('/budget',budget.findAll)
router.post('/budget', budget.create)



//actual function
router.get('/actual', actual.findAll)
router.post('/actual', actual.create)
router.put('/actual:description',actual.update)

module.exports = router