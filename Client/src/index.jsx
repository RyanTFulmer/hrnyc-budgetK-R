import React from 'react';
import ReactDOM from 'react-dom';
import InputBudgetForm from './InputBudgetForm.jsx';
import InputTransactionForm from './InputTransactionForm.jsx';
import MonthlyStatus from './MonthlyStatus.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budgetForm: false,
      budget: {},
      transactionTypes: transTypes,
      totalsToDate: {},
      transactions: [],
      inputTransaction: {},
      inputBudget: {}
    };
    this.handleTransactionChange = this.handleTransactionChange.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
    this.handleTransactionSubmit = this.handleTransactionSubmit.bind(this);
    this.handleBudgetSubmit = this.handleBudgetSubmit.bind(this);
    this.getCurrentSpend = this.getCurrentSpend.bind(this);
    this.getCurrentBudget = this.getCurrentBudget.bind(this);
    this.getAllCurrentTransactions = this.getAllCurrentTransactions.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleNewBudgetSubmit = this.handleNewBudgetSubmit.bind(this);
  }

  //this function handles changes in the transaction input fields
  handleTransactionChange(event) {
    this.setState({
      inputTransactions: { [event.target.name]: event.target.value }
    });
  }

  //this function handles changes in the budget input fields
  handleBudgetChange(event) {
    this.setState({
      inputBudget: { [event.target.name]: event.target.value }
    });
  }

  //this function handles a new transaction submit
  handleTransactionSubmit() {
    Axios.post('/actual', this.state.inputTransaction)
      .then(() => this.getAllCurrentTransactions())
      .catch(err => {
        if (err) console.log(err);
      });
  }

  //this function handles a new budget submit
  handleBudgetSubmit() {
    Axios.post('/budget', this.state.inputBudget)
      .then(() => {
        this.getCurrentBudget();
        this.setState({ budgetForm: true });
      })
      .catch(err => {
        if (err) console.log(err);
      });
  }

  //this function iterates through our state transactions to calculate the current spend for each
  getCurrentSpend(catName) {
    let total = 0;
    //iterate over the current transactions
    for (let i = 0; i < this.state.transactions.length; i++) {
      //if it matches the catName, add to total
      if (this.state.transactions[i].name === catName) {
        total += this.state.transactions[i].amount;
      }
    }
    //set state equal to the new total
    this.setState({ totalsToDate: { catName: total } });
  }

  //this function gets the current budget from our database
  //will have to update for different months
  getCurrentBudget() {
    Axios.get('/budget')
      .then(data => {
        console.log('data back from server is ', data);
        this.setState({ budget: data });
      })
      .catch(err => {
        if (err) console.log(err);
      });
  }

  //this function gets all transactions from the database
  getAllCurrentTransactions() {
    Axios.get('/actual')
      .then(data => this.setState({ transactions: data }))
      .catch(err => {
        if (err) console.log(err);
      });
  }

  //once everything mounts, we pull the budget and all transactions
  componentDidMount() {
    this.getAllCurrentTransactions();
    this.getCurrentBudget();
  }
  handleNewBudgetSubmit() {
    this.setState({ budgetForm: true });
  }

  render() {
    //conditional rendering
    const budgetFormStatus = this.state.budgetForm;
    let formToBeShown;
    let createNewBudgetButton;

    if (budgetFormStatus) {
      formToBeShown = <InputBudgetForm transactionTypes = {this.state.transactionTypes} handleBudgetChange = {this.handleBudgetChange} handleBudgetSubmit = {this.handleBudgetSubmit} />;
      createNewBudgetButton = (
        <button onSubmit={this.handleNewBudgetSubmit}>
          Create a new budget for this month!
        </button>
      );
    } else {
      formToBeShown = <InputTransactionForm handleTransactionChange={this.handleTransactionChange} handleTransactionSubmit={this.handleTransactionSubmit} transactionTypes={this.state.transactionTypes}/>;
    }
    var transTypes = [
      'Air Travel',
      'Alcohol & Bars',
      'Amusement',
      'ATM Fee',
      'Cash & ATM',
      'Clothing',
      'Coffee Shops',
      'Electronics & Software',
      'Entertainment',
      'Fast Food',
      'Food & Dining',
      'Furnishings',
      'Gifts & Donations',
      'Groceries',
      'Gym',
      'Health & Fitness',
      'Home Services',
      'Internet',
      'Local Tax',
      'Mortgage & Rent',
      'Movies & DVDs',
      'Music',
      'Office Supplies',
      'Parking',
      'Paycheck',
      'Personal Care',
      'Pharmacy',
      'Public Transportation',
      'Rental Car & Taxi',
      'Restaurants',
      'Service Fee',
      'Shopping',
      'Sporting Goods',
      'State Tax',
      'Taxes',
      'Transfer',
      'Travel',
      'Utilities',
      'Vacation'
    ];

    return (
      <div>
        <div>{createNewBudgetButton}</div>
        <div>{formToBeShown}</div>
        <div>
          <MonthlyStatus transactionTypes={this.state.transactionTypes} getCurrentSpend={this.getCurrentSpend} budget={this.state.budget}/>
        </div>
      </div>
    );
  }
}





var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);