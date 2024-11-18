import { configureStore } from '@reduxjs/toolkit';
import rootApi from './rootApi';

export const store = configureStore({
    reducer: {
        // 여러 리듀서를 사용할 수 있습니다.
        [rootApi.reducerPath]: rootApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rootApi.middleware),
});

export default store;
