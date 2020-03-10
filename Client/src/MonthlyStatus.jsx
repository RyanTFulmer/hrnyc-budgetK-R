import React from 'react';

const MonthlyStatus = props => {
  return (
    <div>
      Monthly Budget and Amount Spent
      {props.state.transactionTypes.map(eachBudgetType => {
        return (
          <div>
            <span>{eachBudgetType + '    '}</span>
            <span>
              {eachBudgetType => props.getCurrentSpend(eachBudgetType) + '    '}
            </span>
            <span>{this.state.budget[eachBudgetType]}</span>
          </div>
        );
      })}
    </div>
  );
};

module.exports = MonthlyStatus;
