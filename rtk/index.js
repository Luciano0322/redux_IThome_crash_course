const { store } = require('./features/store');
const coffeeActions = require('./features/slices/coffeeSlice').coffeeActions;
const coffeeBeanActions = require('./features/slices/coffeeBeanSlice').coffeeBeanActions;
const cakeActions = require('./features/slices/cakeSlice').cakeActions;

console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('更新', store.getState()));

store.dispatch(coffeeActions.coffeeOrdered(1));
store.dispatch(coffeeActions.coffeeOrdered(4));
store.dispatch(coffeeActions.coffeeRestocked(10));
store.dispatch(coffeeBeanActions.coffeeBeanOrdered(2));
store.dispatch(coffeeBeanActions.coffeeBeanRestocked(5));
store.dispatch(cakeActions.cakeOrdered(3));
store.dispatch(cakeActions.cakeRestocked(6));

unsubscribe();