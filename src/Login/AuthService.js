// AuthService.js
export const AuthService = {
    // JWT 토큰 저장
    saveToken: (token) => {
        localStorage.setItem('jwtToken', token);
    },

    // JWT 토큰 가져오기
    getToken: () => {
        return localStorage.getItem('jwtToken');
    },

    // JWT 토큰 삭제 (로그아웃 시 사용)
    removeToken: () => {
        localStorage.removeItem('jwtToken');
    }
};
