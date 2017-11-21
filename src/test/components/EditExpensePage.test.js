import React from 'react';
import {shallow} from 'enzyme';
import { EditExpensePage } from './../../components/EditExpensePage';
import expenses from '../fixtures/expenses';


let editExpense,removeExpense,history,wrapper;
beforeEach(()=>{
    editExpense=jest.fn();
    history={
        push:jest.fn()
    }
    removeExpense=jest.fn();
     wrapper=shallow(<EditExpensePage onEditExpense={editExpense} onRemoveExpense={removeExpense} 
        history={history} expense={expenses[1]}
        />)

})
test("Should render Edit Expense page correctly",()=>{
    expect(wrapper).toMatchSnapshot();
});

test("Should handle onEdit",()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test("Should handle onRemove",()=>{
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[1].id});
    expect(history.push).toHaveBeenLastCalledWith('/');
});