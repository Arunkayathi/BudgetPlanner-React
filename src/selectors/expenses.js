import moment from 'moment';
export default (expenses,{text,startDate,endDate,sortBy})=>{
    return expenses.filter((expense)=>{
        const createdMoment=moment(expense.createdAt);
        const startDateMatch=startDate?startDate.isSameOrBefore(createdMoment,'day'):true;
         const endDateMatch=endDate?endDate.isSameOrAfter(createdMoment,'day'):true;
      
        const textMatch=text?expense.description.toLowerCase().includes(text.toLowerCase()):true;

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy==='date'){
  
            return a.createdAt<b.createdAt?1:-1;
        }else if(sortBy==='amount'){
            return a.amount<b.amount?1:-1;
        }
    })
} 