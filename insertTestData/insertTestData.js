const testdatas = require('./testData.json')
const {actual} = require('../db')

var insertAlldata = function () {
  testdatas.map(data => {
    return actual.findOneAndUpdate(
      {
        amount: data.amount,
        date: data.date},
      {
        transactionType: data.transactionType,
        category: data.category,
        accountName: data.accountName,
        description:data.description
      },
      {
        new: true,
        upsert: true // Make this update into an upsert
      }
    ).exec()
  })
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAlldata()
