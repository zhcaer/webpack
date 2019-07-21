var avatar = require("../../public/images/timg.jpg");
function Avatar(){
    var dom = document.getElementById("app");
    var img = new Image();
    img.src = avatar;
    img.classList.add("avatar");
    dom.appendChild(img)
}

export default Avatar;
