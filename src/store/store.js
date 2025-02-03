 import { configureStore } from '@reduxjs/toolkit';
// import {billReducer} from '../store/billSlice';


// const store = configureStore({
//   reducer: {
//     bill: billReducer,
//   },
// });

// export default store;
import billReducer from './billSlice'; // Import the default export

const store = configureStore({
  reducer: {
    bill: billReducer, // Add it to the store
  },
});

export default store;
