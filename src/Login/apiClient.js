// apiClient.js
import axios from 'axios';
import { AuthService } from './AuthService';

// Axios 인스턴스를 생성하여 기본 설정을 합니다.
const apiClient = axios.create({
    baseURL: 'http://localhost:8080/login', // 백엔드 서버 URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// 요청을 보내기 전, 항상 토큰을 가져와 Authorization 헤더에 추가합니다.
apiClient.interceptors.request.use((config) => {
    const token = AuthService.getToken();
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default apiClient;
