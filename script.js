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