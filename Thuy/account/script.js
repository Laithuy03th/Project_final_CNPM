// script.js

function showChangePassword() {
    const userInfoContainer = document.getElementById('user-info-container');
    const changePasswordContainer = document.getElementById('change-password-container');
    const overlay = document.getElementById('overlay');

    // Hiện overlay và giao diện đổi mật khẩu
    overlay.style.display = 'block';
    userInfoContainer.style.display = 'none';
    changePasswordContainer.style.display = 'block';
}

function changePassword() {
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Kiểm tra điều kiện nhập liệu
    if (newPassword === confirmPassword) {
        // Xử lý thay đổi mật khẩu ở đây (ví dụ: gửi dữ liệu đến back-end)
        alert('Mật khẩu đã được thay đổi thành công!');
        
        // Reset các trường
        document.getElementById('current-password').value = '';
        document.getElementById('new-password').value = '';
        document.getElementById('confirm-password').value = '';
        
        // Hiện lại giao diện thông tin người dùng
        document.getElementById('user-info-container').style.display = 'block';
        document.getElementById('change-password-container').style.display = 'none';
        document.getElementById('overlay').style.display = 'none'; // Ẩn overlay
    } else {
        alert('Mật khẩu mới và xác nhận không khớp. Vui lòng kiểm tra lại!');
    }
}

function cancelChangePassword() {
    // Hiện lại giao diện thông tin người dùng và ẩn giao diện đổi mật khẩu
    document.getElementById('user-info-container').style.display = 'block';
    document.getElementById('change-password-container').style.display = 'none';
    document.getElementById('overlay').style.display = 'none'; // Ẩn overlay
}
