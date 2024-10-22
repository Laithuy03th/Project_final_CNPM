// Chờ DOM được tải hoàn toàn
document.addEventListener('DOMContentLoaded', (event) => {
    const circle = document.getElementById('circle');

    // Kiểm tra nếu phần tử tồn tại
    if (circle) {
        circle.addEventListener('click', () => {
            window.location.href = "E:/CNPM/Project/Code/Thuy/tai_khoan/account.html"; // Đường dẫn đến trang mới
        });
    } else {
        console.error('Phần tử với ID "circle" không tồn tại.');
    }
});
