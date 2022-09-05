const { store } = require('./features/store');
const coffeeActions = require('./features/slices/coffeeSlice').coffeeActions;
const coffeeBeanActions = require('./features/slices/coffeeBeanSlice').coffeeBeanActions;
const cakeActions = require('./features/slices/cakeSlice').cakeActions;

console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('更新', store.getState()));

// store.dispatch(coffeeActions.coffeeOrdered({qty: 1, money: 10}));
// store.dispatch(coffeeActions.coffeeOrdered({qty: 4, money: 40}));
// store.dispatch(coffeeActions.coffeeRestocked({qty: 10, money: 20}));
store.dispatch(coffeeBeanActions.coffeeBeanOrdered({qty: 2, money: 10}));
store.dispatch(coffeeBeanActions.coffeeBeanRestocked({qty: 5, money: 5}));
// store.dispatch(cakeActions.cakeOrdered(3));
// store.dispatch(cakeActions.cakeRestocked(6));

unsubscribe();