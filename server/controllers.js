
const { actual, budget } = require('./model')


module.exports = {
  budget: {
    findAll: (req, res) => {
      budget.findAll()
        .then(response => res.status(201).json(response))
      .catch(err=>{console.log(err);res.sendStatus(410)
      })
    },
    create: (req, res) => {
      const params = {
        category: req.body.category,
        month: req.body.month,
        amount: req.body.amount
      }
      budget.create(params)
      .then(response => res.status(202).json(response))
    .catch(err=>{console.log(err);res.sendStatus(420)
    })
    }


  },
  actual: {
    findAll: (req, res) => {
      actual.findAll()
      .then(response => res.status(203).json(response))
    .catch(err=>{console.log(err);res.sendStatus(430)
    })
    },

    create: (req, res) => {
      const params = {
        date: req.body.date,
        amount: req.body.amount,
        transactionType: req.body.transactionType,
        category: req.body.category,
        accountName: req.body.accountName,
        description:req.body.description
      }
      actual.create(params)
      .then(response => res.status(201).json(response))
    .catch(err=>{console.log(err);res.sendStatus(440)
    })
    },

    update: (req, res) => {
      actual.update(params)
      .then(response => res.status(201).json(response))
    .catch(err=>{console.log(err);res.sendStatus(450)
    })
    }

  }
}