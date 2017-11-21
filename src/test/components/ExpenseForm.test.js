import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from './../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test("Should render Expense Form correctly",()=>{
    const wrapper=shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test("Should render Expense Form with Expense data",()=>{
    const wrapper=shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test("Should render error when description is not written ",()=>{
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();

});

test("Should set description on input change",()=>{
    const value="Arun Reddy"
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('description')).toBe(value);
});

test("Should  set on Note text area change",()=>{
    const value="New Note";
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value);
});

test("Should set amount if valid input",()=>{
    const value='12.22';
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('amount')).toBe(value);
});
test("Should set rounded amount if invalid input",()=>{
    const value='12.23456';
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('amount')).toBe('');
});

test("Should call onSubmit prop for valid form submission",()=>{
    const onSubmitSpy=jest.fn();
    const wrapper=shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    });
    expect(wrapper.state('error')).toBe('');
    delete expenses[0].id;
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[0]);
});

test("Should set new Date on date change",()=>{
    const now=moment();
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toBe(now)
});

test("Should set focus on focus change",()=>{
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused:true});
    expect(wrapper.state('calendarFocused')).toBe(true);
});