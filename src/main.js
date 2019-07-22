import avatar from '../public/images/timg.jpg';
import Avatar from "./pages/demo.js"
import "./assets/styles/index.css";
import SCSS from "./assets/styles/index.scss";
import $ from "jquery"
console.log($);

//如果没有全局注入window.$为undefined
console.log(window.$);
var app = document.getElementById("app");
var btn = document.createElement("button");
btn.innerHTML = "增加按钮";
btn.onclick = function(){
    var div = document.createElement('div');
    div.innerHTML = "哈哈哈。。。";
    app.appendChild(div)
}
app.appendChild(btn);

Avatar();

var img = new Image();
img.classList.add(SCSS.avatar);
img.src = avatar;
document.body.appendChild(img);

export const minus = (a, b) => {
    console.log(a-b);
}




