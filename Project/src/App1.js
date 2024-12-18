import React, { useState } from 'react';
import AuthForm from './sign_in/AuthForm'; // Đường dẫn tương ứng với vị trí của tệp AuthForm.jsx
import './sign_in/style.css'; // Đảm bảo tệp CSS đã được tạo

function App() {
    const [isLogin, setIsLogin] = useState(true); // Thiết lập mặc định là đăng nhập

    return (
        <div className="App">
            <AuthForm isLogin={isLogin} setIsLogin={setIsLogin} />
        </div>
    );
}

export default App;
