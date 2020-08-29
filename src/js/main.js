"use strict";

var items = [
  {name: 'bikeA', price: '2000'},
  {name: 'bikeB', price: '1000'},
  {name: 'bikeC', price: '3000'},
  {name: 'bikeD', price: '4000'},
  {name: 'bikeE', price: '5000'},
  {name: 'bikeF', price: '6000'},
  {name: 'bikeG', price: '7000'},
]

const filterItems = items.filter((item)=> {
  return item.price <=4000
})

console.log(items);
console.log(filterItems);
