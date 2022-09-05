const { store } = require('./features/store');
const coffeeActions = require('./features/slices/coffeeSlice').coffeeActions;

console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('更新', store.getState()));

store.dispatch(coffeeActions.coffeeOrdered(1));
store.dispatch(coffeeActions.coffeeOrdered(4));
store.dispatch(coffeeActions.coffeeRestocked(10));
unsubscribe();