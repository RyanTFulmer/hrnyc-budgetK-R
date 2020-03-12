import React from "react"


const SubmitTransaction = props => {
  //get create time
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;
  //show user already create new description

  return (
    <div class="card">
  <header class="card-header">
    <p class="card-header-title is-success" >
      Transaction
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
    Description:{props.inputTransaction.description}
        </div>
        <br></br>
        <div class="content">
    category:{props.inputTransaction.category}
        </div>
        <br></br>
        <div class="content">
    amount:{props.inputTransaction.amount}
        </div>
        <br></br>
        <div class="content">
    date:{props.inputTransaction.date}
        </div>
        <br></br>
        <div class="content">
    transactionType:{props.inputTransaction.transactionType}
        </div>
        <br></br>
        <div class="content">
    accountName:{props.inputTransaction.accountName}
        </div>
        <br></br>

        <time>createdTime:{dateTime}</time>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item w3-pink"onClick={props.handleTransactionShow }>Edit</a>
        <a href="#" class="card-footer-item w3-light-green" onClick={props.handleTransactionSubmit}>Save</a>
  </footer>
</div>
  )
}




export default SubmitTransaction