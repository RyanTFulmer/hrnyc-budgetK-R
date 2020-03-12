import React from 'react';

const ShowAllTransaction = ({ transactions }) => {
  return (
    <body>
      <div class="w3-container">
        <ul class="w3-ul w3-border">
          {transactions.map(transaction => {
            return (
              <li className="w3-sand">
                <section class="section">
                  <div class="container">
                    <h2 class="subtitle">
                      On{' '}
                      <strong className="w3-brown">
                        {transaction.date.slice(0, 10)}
                      </strong>
                      ,you spent{' '}
                      <strong className="w3-brown">{transaction.amount}</strong>
                      dollars on{' '}
                      <strong className="w3-brown">
                        {transaction.description}
                      </strong>{' '}
                      with{' '}
                      <strong className="w3-brown">
                        {transaction.accountName}
                      </strong>
                    </h2>
                  </div>
                </section>
              </li>
            );
          })}
        </ul>
      </div>
    </body>
  );
};

export default ShowAllTransaction;
