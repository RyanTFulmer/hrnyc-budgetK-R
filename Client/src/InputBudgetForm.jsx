import React from 'react';

const InputBudgetForm = props => {
  return (
    <div>
      <form>
        <label>
          Month:
          <input type="text" name="month" onChange={props.handleBudgetChange} />
        </label>
        {props.TranactionTypes.map(newCategory => {
          return (
            <label>
              {newCategory}
              <input
                type="text"
                name={newCategory}
                onChange={props.handleBudgetChange}
              />
            </label>
          );
        })}
      </form>
      <button onSubmit={props.handleBudgetSubmit}>Submit budget</button>
    </div>
  );
};

module.exports = InputBudgetForm;
