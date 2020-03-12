import React from 'react';

const InputBudgetForm = props => {
  return (
    <div>
      <form>
        <label>
          Month:
          <input type="text" name="month" onChange={props.handleBudgetChange} />
        </label>
<<<<<<< HEAD

=======
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
>>>>>>> 362815f07588caef670de0ce31527966728fd752
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