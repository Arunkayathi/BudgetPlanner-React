import React,{Component} from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';


export class EditExpensePage extends Component {
  onSubmit=(expense)=>
  {
    this.props.onEditExpense(this.props.expense.id,expense);
    this.props.history.push('/');
  }
  onRemove=()=>{
    this.props.onRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }
  render(){
      return (
        <div>
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button onClick={this.onRemove}>Remove</button>
        </div>
      );
    };
} 


const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps=(dispatch,props)=>({
onEditExpense:(id,expense)=>dispatch(editExpense(id,expense)),
onRemoveExpense:(data)=>dispatch(removeExpense(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);
