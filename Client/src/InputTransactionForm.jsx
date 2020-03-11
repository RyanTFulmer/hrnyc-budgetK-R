import React from 'react';

const InputTransactionForm = props => {
  return (
    <div>
      <form>
        <label>
          Transaction Date:
          <input
            type="text"
            name="TransactionDate"
            onChange={props.handleTransactionChange}
          />
        </label>
        <label>
          {'  '}Description:
          <input
            type="text"
            name="TransactionDescription"
            onChange={props.handleTransactionChange}
          />
        </label>
        <label>
          {'  '}Amount:
          <input
            type="number"
            name="TransactionAmount"
            onChange={props.handleTransactionChange}
          />
        </label>
        <select onChange={props.handleTransactionChange} name="TransactionType">
          <option value="credit">credit</option>
          <option value="debit">debit</option>
        </select>
        <select
          onChange={props.handleTransactionChange}
          name="TransactionCategory"
        >
          {props.transactionTypes.map(newType => {
            return <option value={newType}> {newType} </option>; //might need to change!!
          })}
        </select>
        <label>
          {'  '}Account Name:
          <input
            type="text"
            name="TransactionAccountName"
            onChange={props.handleTransactionChange}
          />
        </label>
      </form>
      <button onSubmit={props.handleTransactionSubmit}>
        Submit transaction
      </button>
    </div>
  );
};

module.exports = InputTransactionForm;
