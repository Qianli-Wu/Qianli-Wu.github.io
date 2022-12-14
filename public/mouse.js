// Reference: https://blog.csdn.net/qq_35068659/article/details/111692505
function getMousePos(event) {
    var e = event || window.event;
    var mouseInfo = {
        mouseX : e.clientX,
        mouseY : e.clientY
    }
    return mouseInfo;
}
 
function getMouseArt() {
    this.artStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "50px",
        height: "50px",
        "font-size": 0,
        "color": 0,
        "text-transform": 0
    };
    this.init = function(obj) {
        var character = ["✨"];
        var font_trans = ["uppercase", "lowercase"];
        this.Alpha = 1;
 
        this.element = document.createElement('div');
        var text = document.createTextNode(character[Math.floor(Math.random() * character.length)]);
        // console.log(text)
        this.element.appendChild(text);
 
        this.addStyle(this.element, this.artStyle);
 
        var offsetV =  Math.floor(Math.random() * 6 - 30); // -30 ~ 30
        this.element.style.left = obj.mouseX + offsetV + 30 +"px"; // x
        this.element.style.top = obj.mouseY + offsetV + 30 +"px"; // y
        this.element.style.fontSize = Math.floor(Math.random() * 2 + 10) + "px";
        this.element.style.color = "hsla("+  Math.floor(Math.random() * 255) + ",100%,50%," + this.Alpha + ")";
        this.element.style.textTransform = font_trans[Math.floor(Math.random() * 2)];
 
        document.body.appendChild(this.element);
    }
    this.addStyle = function(ele, genuine) {
        for (var k in genuine) {
            ele.style[k] = genuine[k];
        }
    }
    this.delElement = function() {
        document.body.removeChild(this.element);
    }
    this.reduceColor = function(win) {
        if (this.Alpha <= 1 && this.Alpha > 0) {
            this.Alpha = this.Alpha - 0.1;
            this.element.style.color = "hsla("+  Math.floor(Math.random() * 55) + ",100%,50%," + this.Alpha + ")";
            console.log(this.Alpha);
         }
        else {
            clearInterval(win);
            this.delElement();
        }
    }
}
 
document.onmousemove = function(event) {
    var obj = getMousePos(event);
    var art = new getMouseArt();
    art.init(obj);
    var win = setInterval(function() {
        art.reduceColor(win);
    }, 25);
}