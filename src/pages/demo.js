var avatar = require("../../public/images/timg2.jpg");
function Avatar(){
    var app = document.getElementById("app");
    var img = new Image();
    img.src = avatar;
    img.classList.add("avatar");
    app.appendChild(img)
}

export default Avatar;
