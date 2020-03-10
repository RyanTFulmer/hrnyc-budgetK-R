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

  handleTransactionChange(event) {
    this.setState({
      inputTransactions: { [event.target.name]: event.target.value }
    });
  }
  handleBudgetChange(event) {
    this.setState({
      inputBudget: { [event.target.name]: event.target.value }
    });
  }
  handleTransactionSubmit() {
    Axios.post('/', this.state.inputTransaction)
      .then(() => this.getAllCurrentTransactions())
      .catch(err => {
        if (err) console.log(err);
      });
  }
  handleBudgetSubmit() {
    //need to change route
    Axios.post('/', this.state.inputBudget)
      .then(() => {
        this.getCurrentBudget();
        this.setState({ budgetForm: true });
      })
      .catch(err => {
        if (err) console.log(err);
      });
  }
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

  //will have to update for different months
  getCurrentBudget() {
    Axios.get('/')
      .then(data => this.setState({ budget: data }))
      .catch(err => {
        if (err) console.log(err);
      });
  }
  getAllCurrentTransactions() {
    Axios.get('/')
      .then(data => this.setState({ transactions: data }))
      .catch(err => {
        if (err) console.log(err);
      });
  }
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
      formToBeShown = <InputBudgetForm props={props} />;
      createNewBudgetButton = (
        <button onSubmit={this.handleNewBudgetSubmit}>
          Create a new budget for this month!
        </button>
      );
    } else {
      formToBeShown = <InputTransactionForm props={props} />;
    }

    return (
      <div>
        <div>{createNewBudgetButton}</div>
        <div>{formToBeShown}</div>
        <div>
          <MonthlyStatus props={props} />
        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);

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
