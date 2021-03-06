import React,{Component}from 'react';
import { connect } from 'react-redux';
import {DateRangePicker} from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate,setEndDate } from '../actions/filters';



export class ExpenseListFilters extends Component{

  state={
      calendarFocused:null
  }
  onDateChange=({ startDate, endDate }) =>{
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onTextChange=(e) => {
    this.props.setTextFilter(e.target.value);
  }
  onSortChange=(e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  }
  onFocusChange=calendarFocused => this.setState({ calendarFocused })
  render(){
    return (
      <div>
      <input
        type="text"
        value={this.props.filters.text}
        onChange={this.onTextChange}
      />
      <select
        value={this.props.filters.sortBy}
        onChange={this.onSortChange}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
  
      <DateRangePicker
      startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
      endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
      onDatesChange={this.onDateChange} // PropTypes.func.isRequired,
      focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
      showClearDates={true}
      numberOfMonths={1}
      isOutsideRange={()=>false}
    />
    </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps=(dispatch)=>({
  sortByDate:()=>dispatch(sortByDate()),
  sortByAmount:()=>dispatch(sortByAmount()),
  setTextFilter:(text)=>dispatch(setTextFilter(text)),
  setStartDate:(startDate)=>dispatch(setStartDate(startDate)),
  setEndDate:(endDate)=>dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);
