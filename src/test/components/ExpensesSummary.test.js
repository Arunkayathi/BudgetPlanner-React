import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from './../../components/ExpensesSummary';

test("Should correctly render expenses summary with 1 expense",()=>{
    const wrapper=shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>)
    expect(wrapper).toMatchSnapshot();

});

test("Should correctly render expenses summary with multiple expenses ",()=>{
const wrapper=shallow(<ExpensesSummary expenseCount={2} expensesTotal={456}/>);
expect(wrapper).toMatchSnapshot();
});