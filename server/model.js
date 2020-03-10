const {actual,budget} = require('../db')

module.exports = {
  budget: {
    create: (data) => {
      return budget.findOneAndUpdate(
        { category: data.category },
        {
          month: data.month,
          amount: data.amount
        },
        {
          new: true,
          upsert: true
        })
        .exec()

    },
    findAll: () => {
      return budget.find({}).exec()
    }
  },
  actual: {
    create: (data) => {
      return actual.findOneAndUpdate(
        {amount: data.amount},
        {
          description: data.description,
          date: data.date,

          transactionType: data.transactionType,
          category: data.category,
          accountName: data.accountName
        },
        {
          new: true,
          upsert: true,
        })
        .exec()
    },
    findAll: () => {
      return actual.find({}).exec()
    },

    update: (data) => {
      return actual.findOneAndUpdate(
        { description: data.description },
        {
          amount: data.amount,
        },
        {
          new: true,
          upsert: true
        })
        .exec()
    },

  }

}