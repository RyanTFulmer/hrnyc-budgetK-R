import React from 'react';

const MonthlyStatus = props => {
  return (
    <div>
      <i class="fa fa-search"></i>Monthly Budget and Amount Spent
      {props.transactionTypes.map(eachBudgetType => {
        return (
          <div>
            <span>{eachBudgetType + '    '}</span>
            <span>
              {eachBudgetType => props.getCurrentSpend(eachBudgetType) + '    '}
            </span>
            <span>{props.budget[eachBudgetType]}</span>
          </div>
        );
      })}
    </div>
  );
};

module.exports = MonthlyStatus;
