// const appUI = {
//     insert_2nd_list: function() {
//         let val = document.getElementById('inlineFormCustomSelect').value;
//     },
// }
// document.getElementById('inlineFormCustomSelect').addEventListener('change', appUI.insert_2nd_list)
if (localStorage.getItem('curentUser')) {
    let innerHtmlHeader = '<div class = "addSuccess"><a class="hello-success">Xin chào, <span clas = "currentUser">thanh97bnvn</span></a><a class="d-none d-lg-block logout" type = "button">Đăng xuất</a></div>';
    let headerFirst = document.querySelector(".btn_1");
    headerFirst.remove();
    let currentUser = JSON.parse(localStorage.getItem('curentUser'));
    innerHtmlHeader = innerHtmlHeader.replace('thanh97bnvn', currentUser);
    document.querySelector("#navbarSupportedContent").insertAdjacentHTML('afterend', innerHtmlHeader);
}


function logout() {
    localStorage.removeItem("curentUser");
    window.location.href = 'index.html';
}
document.querySelector('.logout').addEventListener('click', logout);