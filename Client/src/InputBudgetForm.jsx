import React from 'react';

const InputBudgetForm = props => {
  return (
    <div>
      <form>
        <label>
          Month:
          <input type="text" name="month" onChange={props.handleChange} />
        </label>
        {props.TranactionTypes.map(newCategory => {
          return (
            <label>
              {newCategory}
              <input
                type="text"
                name={newCategory}
                onChange={props.handleChange}
              />
            </label>
          );
        })}
      </form>
      <button onSubmit={props.handleSubmit}>Submit budget</button>
    </div>
  );
};

module.exports = InputBudgetForm;
