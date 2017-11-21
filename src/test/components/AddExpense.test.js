import { AddExpensePage } from './../../components/AddExpensePage';
import {shallow} from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';

let onSubmit,history,wrapper;
beforeEach(()=>{
     onSubmit=jest.fn();
     history={
        push:jest.fn()
    }
     wrapper=shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>)
});
test("Should render Add Expense page correctly",()=>{
    
    expect(wrapper).toMatchSnapshot();
});

test("Should handle onSubmit",()=>{

wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
expect(history.push).toHaveBeenLastCalledWith('/');
expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});