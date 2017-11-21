import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export const AddExpensePage = (props) => {
  function onSubmit(expense){
      props.onSubmit(expense);
      props.history.push('/');
  }
  return  (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense)=>onSubmit(expense)}
    />
  </div>
)
};
const mapDispatchToProps=(dispatch)=>({
  onSubmit:(expense)=>dispatch(addExpense(expense))
})
export default connect(null,mapDispatchToProps)(AddExpensePage);
