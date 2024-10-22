const container = document.getElementById('container');
const registerBtn = document.getElementById('register'); // tên nút được đặt tên
const loginBtn = document.getElementById('login'); // tên nút cũng được đặt tên

registerBtn.addEventListener('click', () => { // sử dụng nút được đặt tên ở bên trên
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => { // sử dụng nút được đặt tên ở bên trên
    container.classList.remove("active");
});
const signInBtn = document.getElementById('sign_in');

signInBtn.addEventListener('click', () => {
    window.location.href = 'file:///E:/CNPM/Project/Code/Thuy/menu/menu.html'; // Chuyển đến file menu.html
});
