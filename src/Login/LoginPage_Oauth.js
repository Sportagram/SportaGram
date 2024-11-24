// import React from 'react';
// import Sidebar from '../components/Sidebar';
// import '../styles/LoginPage.css';
// import axios from 'axios';
//
// function LoginPage() {
//     const handleGoogleSign = () => {
//         // 서버 상태 체크 없이 바로 구글 로그인 엔드포인트로 리다이렉션
//         window.location.href = 'http://localhost:8080/login';
//     };
//
//     const buttonStyle = {
//         background: `url(${process.env.PUBLIC_URL}/google1.png) no-repeat`,
//         backgroundSize: '30px 30px',
//         display: 'inline-block',
//         verticalAlign: 'middle',
//         width: '13px',
//         height: '30px',
//     };
//     const buttonContentStyle = {
//         paddingLeft: '30px',
//     };
//
//     return (
//         <div className="login-page-container">
//             <Sidebar />
//             <div className="login-content">
//                 <h2>스포타그램에 오신 선수님, 환영해요!</h2>
//                 <div className="google-login-button">
//                     <button className="button-basic-wrapper" onClick={handleGoogleSign}>
//                         <span className="button-icon-wrap" style={buttonStyle}></span>
//                         <span className="button-contents" style={buttonContentStyle}>Playball with Google</span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default LoginPage;
