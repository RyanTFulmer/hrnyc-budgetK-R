import React from 'react';

const InputTransactionForm = props => {
  return (
    <div>
      <form>
        <label>
          Transaction Date:
          <input
            type="text"
            name="date"
            onChange={props.handleTransactionChange}
          />
        </label>
        <label>
          {'  '}Description:
          <input
            type="text"
            name="description"
            onChange={props.handleTransactionChange}
          />
        </label>
        <label>
          {'  '}Amount:
          <input
            type="number"
            name="amount"
            onChange={props.handleTransactionChange}
          />
        </label>
        <select onChange={props.handleTransactionChange} name="transactionType">
          <option value="credit">credit</option>
          <option value="debit">debit</option>
        </select>
        <select
          onChange={props.handleTransactionChange}
          name="category"
        >
          {props.transactionTypes.map(newType => {
            return <option value={newType}> {newType} </option>; //might need to change!!
          })}
        </select>
        <label>
          {'  '}Account Name:
          <input
            type="text"
            name="accountName"
            onChange={props.handleTransactionChange}
          />
        </label>
      </form>
      <button onClick={props.handleTransactionSubmit}>
        Submit transaction
      </button>
    </div>
  );
};

module.exports = InputTransactionForm;
