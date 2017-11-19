import filterReducer from '../../reducers/filters';
import moment from 'moment';



test("Should set up default filter values",()=>{
  const state=filterReducer(undefined,{type:'@@INIT'});
  expect(state).toEqual({
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')

  })

});


test("should set sort by amount",()=>{
  const state=filterReducer(undefined,{type:'SORT_BY_AMOUNT'});
  expect(state).toEqual({
    text:'',
    sortBy:'amount',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
  })
})


test("should set sort by date",()=>{
  const state=filterReducer(undefined,{type:'SORT_BY_DATE'});
  expect(state.sortBy).toBe('date');
});

test("should set sort by text",()=>{
  const state=filterReducer(undefined,{type:'SET_TEXT_FILTER',text:'arun'});
  expect(state.text).toBe('arun');
});

test("should set start date",()=>{
  const startDate=moment();
  const state=filterReducer(undefined,{type:'SET_START_DATE',startDate:startDate})
  expect(state.startDate).toBe(startDate);
});

test("should set end date",()=>{
  const endDate=moment();
  const state=filterReducer(undefined,{type:'SET_END_DATE',endDate:endDate})
  expect(state.endDate).toBe(endDate);
  })