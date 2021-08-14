import _ from 'lodash';
import './style.css';
import Logo from './logo.jpg';  //这个Logo是指向这张图片的一个地址
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello','webpack']);
    element.classList.add('hello');

   // 创建一个按钮
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    
    element.appendChild(btn);

    // 将图像添加到我们现有的 div。
    const myLogo = new Image();
    myLogo.src = Logo;

    element.appendChild(myLogo);

    return element
}

document.body.appendChild(component());