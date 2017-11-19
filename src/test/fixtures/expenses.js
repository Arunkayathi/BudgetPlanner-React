import moment from 'moment'

export default [{
    id:'1',
    description:'Gum',
    note:'',
    amount:195,
    createdAt:0
},{
    id:'2',
    description:'Rent',
    note:'',
    amount:196,
    createdAt:moment(0).subtract(4,'days').valueOf()
},{
    id:'3',
    description:'Tour',
    note:'',
    amount:197,
    createdAt:moment(0).add(4,'days').valueOf()
},{
    id:'4',
    description:'Credit transaction',
    note:'',
    amount:194,
    createdAt:moment(0).add(7,'days').valueOf()
}]