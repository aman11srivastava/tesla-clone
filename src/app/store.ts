import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice'
import menuReducer from '../features/car/menuSlice'

export const store = configureStore({
  reducer: {
    car: carReducer,
    menu: menuReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
