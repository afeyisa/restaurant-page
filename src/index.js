import home from "./home";
import about from "./about";
import menus from "./menu";
import "./style.css";

const container = document.getElementById('content')
const homeBtn = document.getElementById('homebtn');
function setHomeDefualt (){
    container.innerHTML = '';
    home('content');
}

homeBtn.addEventListener('click',()=>{
  setHomeDefualt()

});


const menubtn = document.getElementById('menubtn');

menubtn.addEventListener('click',()=>{
    container.innerHTML = '';
    menus('content');
});

const aboutBtn = document.getElementById('aboutbtn');

aboutBtn.addEventListener('click',()=>{
    container.innerHTML ='';
    about('content')
})

setHomeDefualt();