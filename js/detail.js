// let slideIndex = 1;

// function changeImg(typeInput) {
//     console.log(typeInput)
//     let imgs = ["img/detail-tourist/image-1.jpg", "img/detail-tourist/image-2.jpg", "img/detail-tourist/image-3.jpg", "img/detail-tourist/image-4.jpg"];
//     if (typeInput == 0) {
//         slideIndex--;
//     } else {
//         slideIndex++;
//     }
//     if (slideIndex >= imgs.length) {
//         slideIndex = 0;
//     }
//     if (slideIndex < 0) { slideIndex = imgs.length - 1 }
//     console.log(slideIndex);
//     const eleImg = document.getElementsByClassName("d-block");
//     console.log(eleImg)
// }

//Tạo sự kiện scroll thì giữ nguyên thanh menu nếu kéo quá 300
//sự kiện domcontentloaded được kích hoạt khi HTML ban đầu đã được tải và phân tích cú pháp hoàn chỉnh
document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector('.main_menu');
    //Truy xuất div menu
    var trangthai = "duoi300";
    //Tạo sự kiện scroll cho website
    window.addEventListener("scroll", function() {
        var x = pageYOffset;
        if (x > 300) {
            if (trangthai == "duoi300") {
                trangthai = "tren300";
                menu.className += ' menu_fixed animated fadeInDown';
            }
        } else if (x <= 300) {
            if (trangthai == "tren300") {
                console.log(menu.className)
                let changeWhenXless300 = menu.className.replace(" menu_fixed animated fadeInDown", "");
                menu.className = changeWhenXless300;
                trangthai = "duoi300";
            }
        }

    });
});