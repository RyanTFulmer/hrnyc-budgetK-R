import React from 'react';
import ReactDOM from 'react-dom';
import InputBudgetForm from './InputBudgetForm.jsx';
import InputTransactionForm from './InputTransactionForm.jsx';
import MonthlyStatus from './MonthlyStatus.jsx';
import Axios from 'axios';
// import { scaleLinear } from 'd3-scale';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budgetForm: false,
      budget: {},
      transactionTypes: [],
      totalsToDate: {},
      transactions: [],
      inputTransaction: {
        date: '',
        transactionType: '',
        category: '',
        accountName: '',
        description: '',
        amount: ''
      },
      inputBudget: {},
      showGraph: false,
      showBudgetInput: false
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
    let tempObj = Object.assign({}, this.state.inputTransaction);
    tempObj[event.target.name] = event.target.value;
    this.setState({
      inputTransaction: tempObj
    });
  }

  //this function handles changes in the budget input fields
  handleBudgetChange(event) {
    let tempObj = Object.assign({}, this.state.inputBudget);
    tempObj[event.target.name] = event.target.value;
    this.setState({
      inputBudget: tempObj
    });
  }

  //this function handles a new transaction submit
  handleTransactionSubmit() {
    Axios.post('/app/actual', this.state.inputTransaction)
      .then(() => this.getAllCurrentTransactions())
      .catch(err => {
        if (err) console.log(err);
      });
  }

  //this function handles a new budget submit
  handleBudgetSubmit() {
    let newBudgetDataArray = [];
    for (var i in this.state.inputBudget) {
      if (i !== 'month') {
        let eachCategoryObj = {};
        eachCategoryObj['month'] = this.state.inputBudget.month;
        eachCategoryObj['category'] = i;
        eachCategoryObj['amount'] = this.state.inputBudget[i];
        newBudgetDataArray.push(eachCategoryObj);
      } else {
        let eachCategoryObj = {};
        eachCategoryObj['month'] = this.state.inputBudget.month;
        eachCategoryObj['category'] = i;
        eachCategoryObj['amount'] = 0;
        newBudgetDataArray.push(eachCategoryObj);
      }
    }
    let newBudgetDataObj = {};
    newBudgetDataObj.data = newBudgetDataArray;
    console.log('newBudgetDataObj', newBudgetDataObj);
    Axios.post('/app/budget', newBudgetDataArray)
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
    Axios.get('/app/budget')
      .then(data => {
        this.setState({ budget: data });
      })
      .catch(err => {
        if (err)
          console.log('no budget yet OR the current budget error is', err);
      });
  }

  //this function gets all transactions from the database
  getAllCurrentTransactions() {
    Axios.get('/app/actual')
      .then(data => {
        this.setState({ transactions: data });
        let typesArray = [];
        data.data.forEach(eachTransaction => {
          if (!typesArray.includes(eachTransaction.category)) {
            typesArray.push(eachTransaction.category);
          }
        });
        this.setState({ transactionTypes: typesArray });
      })
      .catch(err => {
        if (err) console.log('error from getAllCurrentTransactions is', err);
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

    if (!budgetFormStatus) {
      formToBeShown = (
        <InputBudgetForm
          transactionTypes={this.state.transactionTypes}
          handleBudgetChange={this.handleBudgetChange}
          handleBudgetSubmit={this.handleBudgetSubmit}
        />
      );
      createNewBudgetButton = (
        <button onSubmit={this.handleNewBudgetSubmit}>
          Create a new budget for this month!
        </button>
      );
    } else {
      formToBeShown = (
        <InputTransactionForm
          handleTransactionChange={this.handleTransactionChange}
          handleTransactionSubmit={this.handleTransactionSubmit}
          transactionTypes={this.state.transactionTypes}
        />
      );
    }

    return (
      <div>
        <h1 className="title w3-display-topmiddle w3-panel w3-padding-16">
          Budget
        </h1>
        <br />
        <br />
        <br />
        <div className="w3-container w3-margin-bottom w3-border">
          {createNewBudgetButton}
        </div>
        <br />
        <div>{formToBeShown}</div>
        <br />
        <div>
          <MonthlyStatus
            transactionTypes={this.state.transactionTypes}
            getCurrentSpend={this.getCurrentSpend}
            budget={this.state.budget}
          />
        </div>
        <div>
          <button className="button is-success is-medium is-rounded w3-display-middle">
            Show Graph
          </button>
        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
