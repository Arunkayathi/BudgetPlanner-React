import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test("Should setup default expense values",()=>{
    const state=expensesReducer([],{type:"@@INIT"});
    expect(state).toEqual([]);

});
test("Should setup Add Expense",()=>{
  const expense=  {
        description:'desc',
        note:'arun',
        amount:145,
        createdAt:moment()
      }
    const state=expensesReducer([],{type:'ADD_EXPENSE',expense})
    expect(state).toEqual([{...expense}]);
});

test("Should setup Remove Expense",()=>{
    const state=expensesReducer(expenses,{type:'REMOVE_EXPENSE',id:'1'})
    expect(state).toEqual([expenses[1],expenses[2],expenses[3]]);
})

test("Should setup edit Expense",()=>{
    const action={
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{
            amount:1200
        }
    }
    const state=expensesReducer(expenses,action)
    
    expect(state[1].amount).toBe(1200);
});

test("Should not edit expense if expense not found",()=>{
    const action={
        type:'EDIT_EXPENSE',
        id:'12345',
        updates:{
            amount:1200
        }
    }
    const state=expensesReducer(expenses,action)
    expect(state).toEqual(expenses);
});