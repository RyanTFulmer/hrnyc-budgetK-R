import React from 'react';

const InputBudgetForm = props => {
  return (
    <div>
      <form>
        <label>
          Month:
          <input type="text" name="month" onChange={props.handleBudgetChange} />
        </label>
        {props.transactionTypes.map(newCategory => {
          return (
            <div>
              <label>
                {newCategory}
                <input
                  type="number"
                  name={newCategory}
                  onChange={props.handleBudgetChange}
                />
              </label>
            </div>
          );
        })}
      </form>
      <button onClick={props.handleBudgetSubmit}>Submit budget</button>
    </div>
  );
};

module.exports = InputBudgetForm;

// {props.transactionTypes.map(newCategory => {
//   return (
//     <div>
//       <label>
//         {newCategory}
//         <input
//           type="number"
//           name={newCategory}
//           onChange={props.handleBudgetChange}
//         />
//       </label>
//     </div>
//   );
// })}