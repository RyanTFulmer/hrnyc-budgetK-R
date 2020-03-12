import React from "react";

const InputTransactionForm = props => {
  return (
    <div>
      <form>
        <label>
          Transaction Date:
          <input
            placeholder="Loading input"
            type="text"
            name="date"
            onChange={props.handleTransactionChange}
          />
        </label>
        <br></br>
        <label>
          Description:
          <input
            placeholder="Loading input"
            type="text"
            name="description"
            onChange={props.handleTransactionChange}
          />
        </label>
        <br></br>
        <label>
          Amount:
          <input
            placeholder="Loading input"
            type="number"
            name="amount"
            onChange={props.handleTransactionChange}
          />
        </label>
        <br></br>
            Transaction:Type:
        <div class="field">
          <div class="control">
            <div class="select is-primary is-small">
              <select
                onChange={props.handleTransactionChange}
                name="transactionType">
                <option value="credit">credit</option>
                <option value="debit">debit</option>
              </select>
            </div>
          </div>
        </div>
            category:
                <br></br>
        <div class="field">
          <div class="control">
            <div class="select is-primary is-small">
              <select
                class="select"
                onChange={props.handleTransactionChange}
                name="category"
              >
                {props.transactionTypes.map(newType => {
                  return <option value={newType}> {newType} </option>; //might need to change!!
                })}
              </select>
            </div>
          </div>
        </div>
        <label>
          Account Name:
          <input
            placeholder="Loading input"
            type="text"
            name="accountName"
            onChange={props.handleTransactionChange}
          />
        </label>
      </form>
      <br></br>
      <i class="fa fa-arrow-right"></i>
      <button
        onClick={props.handleTransactionShow}
        class="button is-success is-inverted">
        Check transaction
      </button>
    </div>
  );
};

module.exports = InputTransactionForm;
