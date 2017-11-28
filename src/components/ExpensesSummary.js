import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenes from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpensesSummary=({expenseCount,expensesTotal})=>{

    const expenseWord=expenseCount===1?'expense':'expenses';
    const formattedExpensesTotal=numeral(expensesTotal/100).format('$0,0.00');
    return (
        <div>
            {expenseCount>=1?(<h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal} </h1>):''}
        </div>
    )

};

const mapStateToProps=({expenses,filters})=>{
    const visibileExpenses=selectExpenes(expenses,filters);
    console.log(visibileExpenses);
    return {
        expenseCount:visibileExpenses.length,
        expensesTotal:selectExpensesTotal(visibileExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary)