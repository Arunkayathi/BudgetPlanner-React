
import { editExpense,addExpense,removeExpense } from './../../actions/expenses';


test('Should setup remove expense action',()=>{
  const action=removeExpense({id:'123abc'});
  expect(action).toEqual({
    type:'REMOVE_EXPENSE',
    id:'123abc'
  });
});

test("Should setup edit expense action",()=>{
  const action=editExpense('1234',{'note':'This is a changed note'});
  expect(action).toEqual({
    type:'EDIT_EXPENSE',
    id:'1234',
    updates:{
      note:'This is a changed note'
    }
  });
});

test("Should setup add expense action object with provided values",()=>{
  const expenseData={
    description :'desc',
    note : 'note',
    amount :1234,
    createdAt :1234
  }
  const result=addExpense(expenseData)
  expect(result).toEqual({
    type:'ADD_EXPENSE',
    expense:{
    ...expenseData,id:expect.any(String)
    }
  })
});
test("Should setup add expense action object with default values",()=>{
  const expenseData={
    description :'',
    note : '',
    amount :0,
    createdAt :0
  }
  const result=addExpense()
  expect(result).toEqual({
    type:'ADD_EXPENSE',
    expense:{
    ...expenseData,id:expect.any(String)
    }
  })
});