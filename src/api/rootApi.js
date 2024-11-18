import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rootApi = createApi({
    reducerPath: 'rootApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080', // 서버 URL (API 엔드포인트가 있는 곳)
        prepareHeaders: (headers, { getState }) => {
            // 예시로, 필요한 경우 토큰을 헤더에 추가
            const token = getState().auth.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}), // 엔드포인트는 injectEndpoints에서 정의할 예정
});

export default rootApi;
