import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../../actions/filters';
import moment from 'moment';


test("should setup textFilter action",()=>{
    const result=setTextFilter('Arun');

    expect(result).toEqual({
        type:'SET_TEXT_FILTER',
        text:'Arun'
    });

})
test("should setup sortByDate action",()=>{
    const result=sortByDate();

    expect(result).toEqual({
        type:'SORT_BY_DATE'
    });

})
test("should setup sortByAmount action",()=>{
    const result=sortByAmount();

    expect(result).toEqual({
        type:'SORT_BY_AMOUNT'
    });

})
test("should setup setStartDate  action",()=>{
    const startDate=moment();
    const result=setStartDate(startDate);

    expect(result).toEqual({
        type:'SET_START_DATE',
        startDate
    });

})
test("should setup setEndDate  action",()=>{
    const endDate=moment();
    const result=setEndDate(endDate);

    expect(result).toEqual({
        type:'SET_END_DATE',
        endDate
    });

})