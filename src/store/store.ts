import { configureStore } from '@reduxjs/toolkit';
import faqReducer from './faqSlice';

const store = configureStore({
  reducer: {
    faq: faqReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
