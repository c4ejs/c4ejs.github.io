if (localStorage.getItem("List User Register").length > 0) {
    var getListInfoUser = JSON.parse(localStorage.getItem("List User Register"));
} else {
    var dataRegister = [];
}


function saveAndValidateInforRegis() {
    const usernameRegis = document.querySelector('#username-register').value;
    const passwordRegis = document.querySelector('#pass-register').value;
    const emailRegis = document.querySelector('#email-register').value;

    //check username
    try {
        if (usernameRegis == "") {
            throw new Error('Yêu cầu bắt buộc nhập USERNAME');
        }
        if (usernameRegis.length < 8) {
            throw new Error('Yêu cầu độ dài username phải >= 8 ký tự');
        }
        if (/^[a-zA-Z0-9- ]*$/.test(usernameRegis) == false) {
            throw new Error('Yêu cầu username không được chứa ký tự đặc biệt');
        }

        //check password
        if (passwordRegis == "") {
            throw new Error('Yêu cầu bắt buộc nhập PASSWORD');
        }

        if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(passwordRegis) == false) {
            throw new Error('Yêu cầu mật khẩu có tối thiểu 8 ký tự, có ít nhất một chữ cái, một số và một ký tự đặc biệt');
        }
    } catch (e) {
        const errorNotifi = document.querySelector('.message-error');
        if (e) {
            errorNotifi.textContent = e.message;
        }
    } finally {
        if (getListInfoUser) {
            getListInfoUser.push({
                idUser: getListInfoUser.length,
                username: usernameRegis,
                password: passwordRegis,
                email: emailRegis,
            });
            const listUser = JSON.stringify(getListInfoUser);
            localStorage.setItem("List User Register", listUser);
        } else {
            dataRegister.push({
                idUser: 1,
                username: usernameRegis,
                password: passwordRegis,
                email: emailRegis,
            });
            const listUser = JSON.stringify(dataRegister);
            localStorage.setItem("List User Register", listUser);
        }
    }

}

// Tạo sự kiện cho button Register
document.querySelector('#btnRegister').addEventListener("click", saveAndValidateInforRegis);