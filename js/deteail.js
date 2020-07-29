document.getElementById("btn-1111").addEventListener("click", function () {
    swal("Cảm ơn!", "Cảm ơn bạn đã đặt tour qua Tourbi, nhà phát hành tour sẽ sớm liên hệ với bạn!", "success");
    setInterval(app, 3000)
})

const app = function () {
    window.location.href = "index.html"
}
