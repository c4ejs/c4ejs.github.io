if (localStorage.getItem("List User Register")) {
    var getListInfoUser = JSON.parse(localStorage.getItem("List User Register"));
} else {
    var dataRegister = [];
}

function validateInfoUi() {
    const usernameRegis = document.querySelector('#username-register').value;
    const passwordRegis = document.querySelector('#pass-register').value;
    const emailRegis = document.querySelector('#email-register').value;
    if (usernameRegis == "") {
        throw new Error('Yêu cầu bắt buộc nhập USERNAME');
    }
    if (usernameRegis.length < 8) {
        throw new Error('Yêu cầu độ dài username phải >= 8 ký tự');
    }
    if (/^[a-zA-Z0-9- ]*$/.test(usernameRegis) == false) {
        throw new Error('Yêu cầu username không được chứa ký tự đặc biệt');
    }
    if (getListInfoUser) {
        for (let inforUserName = 0; inforUserName < getListInfoUser.length; inforUserName++) {
            if (usernameRegis == getListInfoUser[inforUserName].username) {
                throw new Error('Tên đăng nhập đã tồn tại trên hệ thống');
            }
        }
    }


    //check password
    if (passwordRegis == "") {
        throw new Error('Yêu cầu bắt buộc nhập PASSWORD');
    }

    if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(passwordRegis) == false) {
        throw new Error('Yêu cầu mật khẩu có tối thiểu 8 ký tự, có ít nhất một chữ cái, một số và một ký tự đặc biệt');
    }
}

function saveAndValidateInforRegis() {
    const usernameRegis = document.querySelector('#username-register').value;
    const passwordRegis = document.querySelector('#pass-register').value;
    const emailRegis = document.querySelector('#email-register').value;
    //check username
    try {
        validateInfoUi();
    } catch (e) {

        const errorNotifi = document.querySelector('.message-error');
        errorNotifi.textContent = e.message;
        return;
    }
    let idUser;
    if (getListInfoUser) {
        getListInfoUser.push({
            idUser: (getListInfoUser.length + 1),
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
    alert("Tạo tài khoản thành công. Bạn vui lòng đăng nhập để trải nghiệm dịch vụ tốt hơn.");
    location.reload();

}


function loginForTravel() {
    try {
        const usernameLogin = document.querySelector('.username-login').value;
        const passLogin = document.querySelector('.password-login').value;
        if (usernameLogin == "") {
            throw new Error('Yêu cầu bắt buộc nhập USERNAME');
        }
        if (usernameLogin.length < 8) {
            throw new Error('Yêu cầu độ dài username phải >= 8 ký tự');
        }
        //Check ký tự đặc biệt
        if (/^[a-zA-Z0-9- ]*$/.test(usernameLogin) == false) {
            throw new Error('Yêu cầu username không được chứa ký tự đặc biệt');
        }

        //check password
        if (passLogin == "") {
            throw new Error('Yêu cầu bắt buộc nhập PASSWORD');
        }
        //Check độ mạnh của mật khẩu
        if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(passLogin) == false) {
            throw new Error('Yêu cầu mật khẩu có tối thiểu 8 ký tự, có ít nhất một chữ cái, một số và một ký tự đặc biệt');
        }
        //check thông tin đăng nhập có đúng hay không
        let listUsernameFromListInfoUser = [];
        if (getListInfoUser) {
            for (let getUsername = 0; getUsername < getListInfoUser.length; getUsername++) {
                listUsernameFromListInfoUser.push(getListInfoUser[getUsername].username);
            }
            //Check user name tồn tại trên hệ thống
            if (typeof getListInfoUser[listUsernameFromListInfoUser.indexOf(usernameLogin)] == "undefined") {
                throw new Error("Tài khoản quý khách nhập không chính xác")
            }

        } else {
            throw new Error('Tài khoản của quý khách không tồn tại trên hệ thống')
        }
        //check pass có đúng không
        let infoEnterUserClient = getListInfoUser[listUsernameFromListInfoUser.indexOf(usernameLogin)];
        if (passLogin != infoEnterUserClient.password) {
            throw new Error('Mật khẩu quý khách nhập không chính xác');
        }

    } catch (e) {
        const errorNotifi = document.querySelector('.message-error');
        errorNotifi.textContent = e.message;
        return;
    }
    alert('Đăng nhập thành công');
}

// Tạo sự kiện cho button Register
document.querySelector('#btnRegister').addEventListener("click", saveAndValidateInforRegis);
document.querySelector('#btnLogin').addEventListener("click", loginForTravel);