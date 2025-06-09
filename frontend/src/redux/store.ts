import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

// Import your slices here
import authReducer from './slices/authSlice';
import transactionReducer from './slices/transactionSlice';
import budgetReducer from './slices/budgetSlice'; // Example additional slice
import reportReducer from './slices/reportSlice'; // Example additional slice

// Combine reducers into a root reducer
const rootReducer = {
  auth: authReducer,
  transactions: transactionReducer,
  budgets: budgetReducer,
  reports: reportReducer,
};

// Create the Redux store using configureStore from Redux Toolkit
export const store = configureStore({
  reducer: rootReducer,
  // You can add middleware here if needed, Redux Toolkit adds thunk by default
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // disable if you have non-serializable data in actions or state
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Use this instead of plain `useDispatch` to get correct typing for dispatch with Thunks
export type AppDispatch = typeof store.dispatch;

// Typed hooks for usage in components to get strong type support
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

