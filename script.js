const typewriter = (param) => {

    let el = document.querySelector(param.el);
    let speed = param.speed;
    let string = param.string.split("");
    string.forEach((char, index) => {
        setTimeout(() => {
            el.textContent += char;
        }, speed * index);
    });
    };
    typewriter({
    el: "#typewriter", //要素
    string: "Welcome to my page!!", //文字列
    speed: 100 //速度
    });

    let scrollElem = document.querySelectorAll('.animate');
let scrollAnimation = function() {
  for(let i = 0; i < scrollElem.length; i++) {
    let trigger = 50;
    if (window.innerHeight > scrollElem[i].getBoundingClientRect().top + trigger) {
      scrollElem[i].classList.add('is-show');
    }
  }
}
window.addEventListener('load', scrollAnimation);
window.addEventListener('scroll', scrollAnimation);