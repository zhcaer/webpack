import avatar from '../public/images/timg2.jpg';
import Avatar from "./pages/demo.js"
import "./assets/styles/index.css";
import SCSS from "./assets/styles/index.scss";

var app = document.getElementById("app");
var img = new Image();
Avatar();
img.classList.add(SCSS.avatar);
img.src = avatar;
app.appendChild(img);
