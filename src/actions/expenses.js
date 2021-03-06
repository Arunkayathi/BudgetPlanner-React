import uuid from 'uuid';
import database from '../firebase/firebase'
// ADD_EXPENSE
export const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
export const startAddExpense=( {
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {})=>{
    return (dispatch)=>{
      const expense={description,note,amount,createdAt};
      database.ref('expenses')
    };
};
// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
