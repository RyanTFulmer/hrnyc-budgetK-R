var mongoose = require('mongoose');

//check if env.MONGODB_URI exists or not

if(process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI)
} else{
  mongoose.connect('mongodb://localhost:27017/BudgetApp', { useNewUrlParser: true });
}
//check comnnection
mongoose.connection.on('connected', function(){
  console.log("Mongoose default connection is open to mongodb://localhost:27017/BudgetApp");
});

mongoose.connection.on('error', function(err){
  console.log("Mongoose default connection has occured "+err+" error");
});

mongoose.connection.on('disconnected', function(){
  console.log("Mongoose default connection is disconnected");
});

  var Schema = mongoose.Schema;

  var ActualSchema = new Schema({
    description:{ type: String},
    date: { type:String },
    amount: Number,
    transactionType: String,
    category: String,
    accountName: String,
  });

var actual = mongoose.model('actual', ActualSchema);

var BudgetSchema = new Schema({
  category:{ type: String},
  month:{ type: Number, min: 1, max: 12 },
  amount: Number,
});
var budget = mongoose.model('budget', BudgetSchema);
module.exports.actual = actual

module.exports.budget = budget
